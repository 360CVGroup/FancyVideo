import os
import torch
import torchvision
import diffusers
import imageio
import numpy as np
import cv2
import copy
import peft
import torch.nn as nn
import torchvision.transforms as transforms

from diffusers import AutoencoderKL, DDIMScheduler
from diffusers.models import UNet2DConditionModel
from einops import rearrange
from omegaconf import OmegaConf
from safetensors import safe_open
from transformers import CLIPTextModel, CLIPTokenizer
from skimage import img_as_ubyte
from PIL import Image
from safetensors.torch import load_file
from fancyvideo.utils.convert_from_ckpt import convert_ldm_unet_checkpoint, convert_ldm_clip_checkpoint, convert_ldm_vae_checkpoint
from fancyvideo.models.cv_vae.modeling_vae import CVVAEModel
from fancyvideo.models.long_clip import longclip
from fancyvideo.models.unet import UNet3DConditionModel
from fancyvideo.pipelines.pipeline_animation_vae_2d import AnimationPipeline as AnimationPipeline2D
from fancyvideo.pipelines.pipeline_animation_vae_3d import AnimationPipeline as AnimationPipeline3D


def processing_reference_image(reference_image, vae, vae_type, device, video_length, resolution):
    # reference_image: np.array
    sample_size = resolution # (height, width)
    pixel_transforms = transforms.Compose([
        transforms.CenterCrop(sample_size),
        transforms.Normalize(mean=[0.5, 0.5, 0.5], std=[0.5, 0.5, 0.5], inplace=True),
    ])

    if reference_image is not None:
        pixel_values = torch.from_numpy(reference_image).permute(2, 0, 1).contiguous()
        pixel_values = pixel_values / 255.
        pixel_values = pixel_transforms(pixel_values)
        pixel_values = pixel_values.unsqueeze(0).unsqueeze(0) # 扩充维度到 b * f * c * h * w

        pixel_values = pixel_values.half().to(device) # 默认用fp16计算
        if vae_type == "vae_2d":
            pixel_values = rearrange(pixel_values, "b f c h w -> (b f) c h w")
            latents = vae.encode(pixel_values).latent_dist
            latents = latents.sample()
            latents = rearrange(latents, "(b f) c h w -> b c f h w", f=1)
        else:
            pixel_values = rearrange(pixel_values, "b f c h w -> b c f h w")
            latents = vae.encode(pixel_values).latent_dist.sample() # b * c * f * h * w
        latents = latents * 0.18215

        # first frame
        first_frame = latents[:, :, 0:1, :, :]
        pad_frame = torch.zeros([latents.shape[0], latents.shape[1], video_length-1, latents.shape[3], latents.shape[4]]).to(device)
        image_tensor = torch.cat((first_frame, pad_frame), dim=2).half() # [b, 4, f, h, w]
        # mask
        first_frame_mask = torch.ones([latents.shape[0], 1, 1, latents.shape[3], latents.shape[4]])
        pad_frame_mask = torch.zeros([latents.shape[0], 1, video_length-1, latents.shape[3], latents.shape[4]])
        mask_tensor = torch.cat((first_frame_mask, pad_frame_mask), dim=2).half().to(device) # [b, 1, f, h, w]
    else:
        image_tensor = torch.zeros([1, 4, video_length, resolution[0]//8, resolution[1]//8]).half().to(device)
        mask_tensor = torch.zeros([1, 1, video_length, resolution[0]//8, resolution[1]//8]).half().to(device)

    return image_tensor, mask_tensor


def enforce_zero_terminal_snr(betas):
    # Convert betas to alphas_bar_sqrt
    alphas = 1 - betas
    alphas_bar = alphas.cumprod(0)
    alphas_bar_sqrt = alphas_bar.sqrt()

    # Store old values.
    alphas_bar_sqrt_0 = alphas_bar_sqrt[0].clone()
    alphas_bar_sqrt_T = alphas_bar_sqrt[-1].clone()

    # Shift so the last timestep is zero.
    alphas_bar_sqrt -= alphas_bar_sqrt_T

    # Scale so the first timestep is back to the old value.
    alphas_bar_sqrt *= alphas_bar_sqrt_0 / (alphas_bar_sqrt_0 - alphas_bar_sqrt_T)

    # Convert alphas_bar_sqrt to betas
    alphas_bar = alphas_bar_sqrt ** 2
    alphas = alphas_bar[1:] / alphas_bar[:-1]
    alphas = torch.cat([alphas_bar[0:1], alphas])
    betas = 1 - alphas

    return betas


class InferPipeline():

    def __init__(self,
                 temporal_position_encoding_max_len=32,
                 model_path="",
                 text_to_video_mm_path="",
                 base_model_path="",
                 res_adapter_type="", # "", "res_adapter_v1", "res_adapter_v2"
                 trained_keys=["motion_modules.", "conv_in.weight"], 

                 cross_frame_txtattn=False,
                 part_module=False,
                 text_attn_mode="",

                 vae_type="vae_2d", # "vae_2d", "vae_3d"
                 use_long_clip=False,

                 use_fps_embedding=False,
                 use_motion_embedding=False,

                 common_positive_prompt="",
                 common_negative_prompt="",
                 ):
        print ("Start loading infer pipeline...")
        device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
        self.device = device
        print ("device = ", device)
        self.trained_keys=trained_keys
        print ("unet trained keys = ", self.trained_keys)
        self.vae_type=vae_type
        print ("vae_type = ", self.vae_type)
        print ("\n")

        # load scheduler
        noise_scheduler_kwargs = {
            'num_train_timesteps': 1000,
            'beta_start': 0.00085,
            'beta_end': 0.012,
            'beta_schedule': 'linear',
            'steps_offset': 1,
            'clip_sample': False
        }
        noise_scheduler_kwargs = OmegaConf.create(noise_scheduler_kwargs)

        # noise_scheduler for generate Image
        noise_scheduler = DDIMScheduler(**OmegaConf.to_container(noise_scheduler_kwargs))

        # noise_scheduler_snr for generate Video
        custom_betas = enforce_zero_terminal_snr(noise_scheduler.betas)
        noise_scheduler_snr = DDIMScheduler(num_train_timesteps=noise_scheduler.num_train_timesteps, beta_schedule=noise_scheduler.beta_schedule, steps_offset=noise_scheduler.steps_offset, clip_sample=noise_scheduler.clip_sample, trained_betas=custom_betas, prediction_type="v_prediction")
        self.noise_scheduler = noise_scheduler
        self.noise_scheduler_snr = noise_scheduler_snr
        print ("load scheduler done\n")

        # load tokenizer and text_encoder
        pretrained_model_path = "{}/stable-diffusion-v1-5".format(model_path)
        tokenizer    = CLIPTokenizer.from_pretrained(pretrained_model_path, subfolder="tokenizer")
        text_encoder = CLIPTextModel.from_pretrained(pretrained_model_path, subfolder="text_encoder")
        text_encoder.requires_grad_(False)
        print ("load text_encoder done\n")

        # load long clip
        if use_long_clip:
            long_clip_model_path = "{}/Long_CLIP/LongCLIP-L/longclip-L.pt".format(model_path)
            long_clip_model, long_clip_preprocess = longclip.load(long_clip_model_path, device=self.device)
        else:
            long_clip_model = None

        # load vae
        if self.vae_type == "vae_2d":
            vae = AutoencoderKL.from_pretrained(pretrained_model_path, subfolder="vae")
            vae.requires_grad_(False)
        else:
            vae_path = "{}/CV-VAE/vae3d".format(model_path)
            vae = CVVAEModel.from_pretrained(vae_path, subfolder="vae3d", torch_dtype=torch.float16)
            vae_2d = AutoencoderKL.from_pretrained(pretrained_model_path, subfolder="vae")
            vae.requires_grad_(False)
            vae_2d.requires_grad_(False)
        self.vae = vae
        print ("load vae done\n")
        
        # load unet
        unet_additional_kwargs = {
            'use_motion_module': True,
            'motion_module_resolutions': [
                1,
                2,
                4,
                8
            ],
            'unet_use_cross_frame_attention': False,
            'unet_use_temporal_attention': False,
            'motion_module_type': 'Vanilla',
            'motion_module_kwargs': {
                'num_attention_heads': 8,
                'num_transformer_block': 1,
                'attention_block_types': [
                    'Temporal_Self',
                    'Temporal_Self'
                ],
                'temporal_position_encoding': True,
                'temporal_position_encoding_max_len': temporal_position_encoding_max_len, # 24-mm_sd_v15.ckpt; 32-mm_sd_v15_v2.ckpt
                'temporal_attention_dim_div': 1,
                'zero_initialize': True
                }
            }
        unet_additional_kwargs['use_inflated_groupnorm'] = True # false-mm_sd_v15.ckpt; true-mm_sd_v15_v2.ckpt
        unet_additional_kwargs['use_motion_module'] = True
        unet_additional_kwargs['motion_module_mid_block'] = True # false-mm_sd_v15.ckpt; true-mm_sd_v15_v2.ckpt
        unet_additional_kwargs['motion_module_decoder_only'] = False
        unet_additional_kwargs['emu_mask'] = True
        unet_additional_kwargs["in_channels"] = 9
        unet_additional_kwargs['use_fps_embedding'] = use_fps_embedding
        unet_additional_kwargs['use_motion_embedding'] = use_motion_embedding
        unet_additional_kwargs = OmegaConf.create(unet_additional_kwargs)
        print ("unet_additional_kwargs = ", unet_additional_kwargs)

        unet = UNet3DConditionModel.from_pretrained_2d(
            pretrained_model_path, subfolder="unet",
            unet_additional_kwargs=OmegaConf.to_container(unet_additional_kwargs),

            cross_frame_txtattn=cross_frame_txtattn,
            part_module=part_module,
            text_attn_mode=text_attn_mode,
        )
        print ("load unet done\n")

        # unet load base model
        if base_model_path:
            print ("load base model from {}...".format(base_model_path))
            base_model_state_dict = {}
            with safe_open(base_model_path, framework="pt", device="cpu") as f:
                for key in f.keys():
                    base_model_state_dict[key] = f.get_tensor(key)
            converted_unet_checkpoint = convert_ldm_unet_checkpoint(base_model_state_dict, unet.config)
            converted_clip_checkpoint = convert_ldm_clip_checkpoint(base_model_state_dict)
            base_conv_in_weight = converted_unet_checkpoint['conv_in.weight']
            base_conv_in_bias = converted_unet_checkpoint['conv_in.bias']
            converted_unet_checkpoint.pop('conv_in.weight')
            converted_unet_checkpoint.pop('conv_in.bias')
            m, u = unet.load_state_dict(converted_unet_checkpoint, strict=False)
            print ("unet load base model done")
            print ("missing keys num {} ; unexpected keys num {}".format(len(m), len(u)))
            try:
                m, u = text_encoder.load_state_dict(converted_clip_checkpoint, strict=True)
                print ("text_encoder load base model done")
                print ("missing keys num {} ; unexpected keys num {}".format(len(m), len(u)))
                converted_vae_checkpoint = convert_ldm_vae_checkpoint(base_model_state_dict, vae.config)
                if self.vae_type == "vae_2d":
                    m, u = vae.load_state_dict(converted_vae_checkpoint, strict=True)
                else:
                    m, u = vae_2d.load_state_dict(converted_vae_checkpoint, strict=True)
                print ("vae load base model done")
                print ("missing keys num {} ; unexpected keys num {}".format(len(m), len(u)))
            except:
                pass
            print ("load base model done\n")
        else:
            print ("do not use base model\n")

        # load res_adapter
        if res_adapter_type:
            class Inflated(nn.Module):
                def __init__(self, base_model):
                    super(Inflated, self).__init__()
                    self.base_model = base_model

                def forward(self, x):
                    video_length = x.shape[2]
                    x = rearrange(x, "b c f h w -> (b f) c h w")
                    x = self.base_model.forward(x)
                    x = rearrange(x, "(b f) c h w -> b c f h w", f=video_length)
                    return x

            def make_lora_conv(ori_conv, adapter_name, r, inflated=False):
                base_conv = nn.Conv2d(in_channels=ori_conv.in_channels, out_channels=ori_conv.out_channels, kernel_size=ori_conv.kernel_size, stride=ori_conv.stride, padding=ori_conv.padding)
                base_conv.load_state_dict(ori_conv.state_dict(), strict=True)
                lora_conv = peft.tuners.lora.layer.Conv2d(base_layer=base_conv, adapter_name=adapter_name, r=r)
                if inflated:
                    lora_conv = Inflated(lora_conv)
                return lora_conv

            lora_weights_path = "{}/res-adapter/resadapter_{}_sd1.5/pytorch_lora_weights.safetensors".format(model_path, res_adapter_type.split("_")[-1])
            lora_norm_path = "{}/res-adapter/resadapter_{}_sd1.5/diffusion_pytorch_model.safetensors".format(model_path, res_adapter_type.split("_")[-1])
            print ("res_adapter_type = ", res_adapter_type)
            print ("lora_weights_path = ", lora_weights_path)
            print ("lora_norm_path = ", lora_norm_path)

            # make res_adapter model
            for i in range(3):
                unet.down_blocks[i].downsamplers[0].conv = make_lora_conv(unet.down_blocks[i].downsamplers[0].conv, "res_adapter", 16, inflated=True)
            for j in range(3):
                unet.up_blocks[j].upsamplers[0].conv = make_lora_conv(unet.up_blocks[j].upsamplers[0].conv, "res_adapter", 16, inflated=True)

            # load lora weights
            state_dict = load_file(lora_weights_path)
            new_state_dict = {}
            for key in state_dict.keys():
                new_key = key.replace("lora_unet_down_blocks_", "down_blocks.").replace("_downsamplers_", ".downsamplers.").replace("_conv.lora_down.weight", ".conv.base_model.lora_A.res_adapter.weight").replace("_conv.lora_up.weight", ".conv.base_model.lora_B.res_adapter.weight").replace("lora_unet_up_blocks_", "up_blocks.").replace("_upsamplers_", ".upsamplers.")
                new_state_dict[new_key] = state_dict[key]
            m, u = unet.load_state_dict(new_state_dict, strict=False)
            print ("load lora weights missing keys num {} ; unexpect keys num {}".format(len(m), len(u)))

            # load norm weights
            m, u = unet.load_state_dict(load_file(lora_norm_path), strict=False)
            print ("load norm weights missing keys num {} ; unexpect keys num {}".format(len(m), len(u)))
            print ("load res_adapter done\n")

        # unet load motion module
        text_to_video_unet = copy.deepcopy(unet)
        text_to_video_unet = self.load_unet(text_to_video_unet, text_to_video_mm_path, self.trained_keys)
        print ("text_to_video_unet load motion module from {}".format(text_to_video_mm_path))
        
        if base_model_path:
            text_to_video_unet.conv_in.weight.data[:,:4,:,:] = base_conv_in_weight
            text_to_video_unet.conv_in.bias.data = base_conv_in_bias
        
        text_to_video_unet.enable_xformers_memory_efficient_attention()
        text_to_video_unet.requires_grad_(False)
        print ("text_to_video_unet init done\n")

        # infer pipeline
        if self.vae_type == "vae_2d":
            text_to_video_pipeline = AnimationPipeline2D(
                unet=text_to_video_unet, vae=vae, tokenizer=tokenizer, text_encoder=text_encoder, scheduler=noise_scheduler,
                use_fp16=True, long_clip_model=long_clip_model,
            ).to(device)
            text_to_video_pipeline_vae_2d = text_to_video_pipeline
        else:
            text_to_video_pipeline = AnimationPipeline3D(
                unet=text_to_video_unet, vae=vae, tokenizer=tokenizer, text_encoder=text_encoder, scheduler=noise_scheduler,
                use_fp16=True, long_clip_model=long_clip_model,
            ).to(device)
            text_to_video_pipeline_vae_2d = AnimationPipeline2D(
                unet=text_to_video_unet, vae=vae_2d, tokenizer=tokenizer, text_encoder=text_encoder, scheduler=noise_scheduler,
                use_fp16=True, long_clip_model=long_clip_model,
            ).to(device)
        self.text_to_video_pipeline = text_to_video_pipeline
        self.text_to_video_pipeline_vae_2d = text_to_video_pipeline_vae_2d
        print ("load text_to_video_pipeline done\n")

        self.common_positive_prompt = common_positive_prompt
        self.common_negative_prompt = common_negative_prompt
        print ("Init fancyvideo infer pipeline done!\n")

    def load_unet(self, unet, motion_module_path, trained_keys):
        if "states" in motion_module_path:
            state_dict = torch.load(motion_module_path, map_location="cpu")['module']
        else:
            state_dict = torch.load(motion_module_path, map_location="cpu")['state_dict']
        motion_state_dict = {}
        for name, param in state_dict.items():
            for it in trained_keys:
                if it in name:
                    motion_state_dict.update({name.replace("module.", ""): param})
                    break
        for key in list(motion_state_dict.keys()):
            if "spatial_cross_text_modules" in key:
                new_key = key.replace("spatial_cross_text_modules", "ctm_b_cross_modules")
                motion_state_dict[new_key] = motion_state_dict.pop(key)
            if "temporal_self_text_modules" in key:
                new_key = key.replace("temporal_self_text_modules", "ctm_b_self_modules")
                motion_state_dict[new_key] = motion_state_dict.pop(key)
        m, u = unet.load_state_dict(motion_state_dict, strict=False)
        print ("load unet missing keys num = ", len(m))
        print ("load unet unexpected keys num = ", len(u))
        return unet

    def save_video(self, frame_list, fps, dst_path):
        writer = imageio.get_writer(dst_path, fps=fps)
        for frame in frame_list:
            writer.append_data(frame)
        writer.close()
        print ("save {} done".format(dst_path))

    def t2v_process_one_prompt(self, prompt, reference_image_path, seed=None, video_length=16, resolution=(512, 512), use_noise_scheduler_snr=True, only_t2i=False, fps=None, motion_score=None):
        generator = torch.Generator(device=self.device)

        prompt = prompt + ',' + self.common_positive_prompt
        print ("positive prompt = ", prompt)
        print ("negative prompt = ", self.common_negative_prompt)

        if fps is not None:
            fps = torch.tensor(fps).to(self.device)
        if motion_score is not None:
            motion_score = torch.tensor(motion_score).to(self.device)
       
        print ("Generate reference_image ...")
        if not reference_image_path:
            # 生成首帧
            if seed:
                generator.manual_seed(seed)
            reference_image = None
            image_tensor, mask_tensor = processing_reference_image(reference_image, self.vae, self.vae_type, self.device, 1, resolution)
            sample_image = self.text_to_video_pipeline_vae_2d(
                prompt = prompt,
                negative_prompt = self.common_negative_prompt,
                generator = generator,
                num_inference_steps = 50,
                guidance_scale = 7.5,
                video_length = 1,
                height = resolution[0],
                width = resolution[1],
                emu_mask = True,
                image_tensor = image_tensor,
                mask_tensor = mask_tensor,
                compute_motion = False,
                noise_scheduler = self.noise_scheduler,
            ).videos
            reference_image = img_as_ubyte(sample_image[0].permute(1, 0, 2, 3)[0].cpu().permute(1, 2, 0).float().detach().numpy())
        else:
            reference_image = np.array(Image.open(reference_image_path).convert("RGB"))
        image_tensor, mask_tensor = processing_reference_image(reference_image, self.vae, self.vae_type, self.device, video_length, resolution)
        print ("Generate reference_image done!")
        if only_t2i:
            return reference_image, None, prompt

        # generate video
        if seed:
            generator.manual_seed(seed)
        print ("Generate video ...")    
        if use_noise_scheduler_snr:
            sample = self.text_to_video_pipeline(
                prompt = prompt,
                negative_prompt = self.common_negative_prompt,
                generator = generator,
                num_inference_steps = 50,
                guidance_scale = 7.5,
                video_length = video_length,
                height = resolution[0],
                width = resolution[1],
                emu_mask = True,
                image_tensor = image_tensor,
                mask_tensor = mask_tensor,
                compute_motion = True,
                noise_scheduler = self.noise_scheduler_snr,
                # fps & motion_score
                fps=fps,
                motion_score=motion_score,
            ).videos
        else:
            sample = self.text_to_video_pipeline(
                prompt = prompt,
                negative_prompt = self.common_negative_prompt,
                generator = generator,
                num_inference_steps = 50,
                guidance_scale = 7.5,
                video_length = video_length,
                height = resolution[0],
                width = resolution[1],
                emu_mask = True,
                image_tensor = image_tensor,
                mask_tensor = mask_tensor,
                compute_motion = True,
                noise_scheduler = self.noise_scheduler,
                # fps & motion_score
                fps=fps,
                motion_score=motion_score,
            ).videos

        # post process
        video = sample[0].permute(1, 0, 2, 3)
        print ("Generate video done!")
        return reference_image, video, prompt


