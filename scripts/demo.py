import os
import argparse
import torch
import yaml
from skimage import img_as_ubyte
from fancyvideo.pipelines.fancyvideo_infer_pipeline import InferPipeline


@torch.no_grad()
def main(args):
    # load infer config
    config_file = args.config
    with open(config_file, "r") as fp:
        config = yaml.safe_load(fp)
    model_config = config.get("model", "")
    infer_config = config.get("inference", "")
    print ("model_config = ", model_config)
    print ("infer_config = ", infer_config)
    print ("\n")

    # init infer pipeline
    infer_pipeline = InferPipeline(
        text_to_video_mm_path = model_config.get("text_to_video_mm_path", ""),
        base_model_path = model_config.get("base_model_path", ""),
        res_adapter_type = model_config.get("res_adapter_type", ""),
        trained_keys = model_config.get("trained_keys", ""),
        model_path = model_config.get("model_path", ""),
        vae_type = model_config.get("vae_type", ""),
        use_fps_embedding = model_config.get("use_fps_embedding", ""),
        use_motion_embedding = model_config.get("use_motion_embedding", ""),
        common_positive_prompt = model_config.get("common_positive_prompt", ""),
        common_negative_prompt = model_config.get("common_negative_prompt", ""),
        )

    # inference
    infer_mode = infer_config.get("infer_mode", "") # "i2v", "t2v"
    resolution = infer_config.get("resolution", "") # (height, width)
    video_length = infer_config.get("video_length", "") # this means the video length in latent space
    output_fps = infer_config.get("output_fps", "") # the fps to export video
    cond_fps = infer_config.get("cond_fps", "") # condition fps
    cond_motion_score = infer_config.get("cond_motion_score", "") # condition motion score
    use_noise_scheduler_snr = infer_config.get("use_noise_scheduler_snr", "")
    seed = infer_config.get("seed", "")
    prompt_path = infer_config.get("prompt_path", "")
    reference_image_folder = infer_config.get("reference_image_folder", "")
    output_folder = infer_config.get("output_folder", "")
    if not os.path.exists(output_folder):
        os.makedirs(output_folder, exist_ok=True)
   
    print ("infer_mode = ", infer_mode)
    fp = open(prompt_path, "r")
    contents = fp.readlines()
    fp.close()
    for i in range(len(contents)):
        print ("processing {}/{}".format(i+1, len(contents)))
        prompt = contents[i].strip("\n")
        dst_path = "{}/example_{}.mp4".format(output_folder, i)
        print ("prompt = ", prompt)
        print ("dst_path = ", dst_path)
        
        # for i2v and t2v
        if infer_mode in ["i2v", "t2v"]:
            if infer_mode == "i2v":
                reference_image_path = "{}/{}.png".format(reference_image_folder, i)
            else:
                reference_image_path = ""
            reference_image, video, prompt = infer_pipeline.t2v_process_one_prompt(prompt=prompt, reference_image_path=reference_image_path, seed=seed, video_length=video_length, resolution=resolution, use_noise_scheduler_snr=use_noise_scheduler_snr, fps=cond_fps, motion_score=cond_motion_score,)
        
        # for video_extending and video_backtracking
        else: 
            reference_video_path = "{}/{}.mp4".format(reference_image_folder, i)
            video = infer_pipeline.video_expansion_process_one_prompt(infer_mode=infer_mode, prompt=prompt, reference_video_path=reference_video_path, seed=seed, video_length=video_length, resolution=resolution, use_noise_scheduler_snr=use_noise_scheduler_snr, fps=cond_fps, motion_score=cond_motion_score,)
        
        frame_list = []
        for frame in video:
            frame = img_as_ubyte(frame.cpu().permute(1, 2, 0).float().detach().numpy())
            frame_list.append(frame)
        infer_pipeline.save_video(frame_list=frame_list, fps=output_fps, dst_path=dst_path)
        print ("\n")


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--config", type=str, default="configs/inference/i2v.yaml")
    args = parser.parse_args()
    main(args)
