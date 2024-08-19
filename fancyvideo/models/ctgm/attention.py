# Adapted from https://github.com/huggingface/diffusers/blob/main/src/diffusers/models/attention.py

from dataclasses import dataclass
from typing import Optional

import torch
import torch.nn.functional as F
from torch import nn

from diffusers.configuration_utils import ConfigMixin, register_to_config
from diffusers.modeling_utils import ModelMixin
from diffusers.utils import BaseOutput
from diffusers.utils.import_utils import is_xformers_available
from diffusers.models.attention import FeedForward, AdaLayerNorm

from einops import rearrange, repeat
import pdb

import math
from ..motion_module import get_motion_module
from .temporal_cross_module import get_temporal_text_module

if is_xformers_available():
    import xformers
    import xformers.ops
else:
    import torch_npu

@dataclass
class Transformer3DModelOutput(BaseOutput):
    sample: torch.FloatTensor

class CrossAttention(nn.Module):
    """
    A cross attention layer.

    Parameters:
        query_dim (`int`): The number of channels in the query.
        cross_attention_dim (`int`, *optional*):
            The number of channels in the encoder_hidden_states. If not given, defaults to `query_dim`.
        heads (`int`,  *optional*, defaults to 8): The number of heads to use for multi-head attention.
        dim_head (`int`,  *optional*, defaults to 64): The number of channels in each head.
        dropout (`float`, *optional*, defaults to 0.0): The dropout probability to use.
        bias (`bool`, *optional*, defaults to False):
            Set to `True` for the query, key, and value linear layers to contain a bias parameter.
    """

    def __init__(
        self,
        query_dim: int,
        cross_attention_dim: Optional[int] = None,
        heads: int = 8,
        dim_head: int = 64,
        dropout: float = 0.0,
        bias=False,
        upcast_attention: bool = False,
        upcast_softmax: bool = False,
        added_kv_proj_dim: Optional[int] = None,
        norm_num_groups: Optional[int] = None,

        cross_frame_txtattn=False,
        text_attn_mode = '',
        temporal_position_encoding_max_len=32,
    ):
        super().__init__()

        self.cross_frame_txtattn = cross_frame_txtattn
        self.text_attn_mode = text_attn_mode

        inner_dim = dim_head * heads
        cross_attention_dim = cross_attention_dim if cross_attention_dim is not None else query_dim
        self.upcast_attention = upcast_attention
        self.upcast_softmax = upcast_softmax

        self.scale = dim_head**-0.5

        self.heads = heads
        # for slice_size > 0 the attention score computation
        # is split across the batch axis to save memory
        # You can set slice_size with `set_attention_slice`
        self.sliceable_head_dim = heads
        self._slice_size = None
        self._use_memory_efficient_attention_xformers = False
        self.added_kv_proj_dim = added_kv_proj_dim

        if norm_num_groups is not None:
            self.group_norm = nn.GroupNorm(num_channels=inner_dim, num_groups=norm_num_groups, eps=1e-5, affine=True)
        else:
            self.group_norm = None

        self.to_q = nn.Linear(query_dim, inner_dim, bias=bias)
        self.to_k = nn.Linear(cross_attention_dim, inner_dim, bias=bias)
        self.to_v = nn.Linear(cross_attention_dim, inner_dim, bias=bias)

        if self.added_kv_proj_dim is not None:
            self.add_k_proj = nn.Linear(added_kv_proj_dim, cross_attention_dim)
            self.add_v_proj = nn.Linear(added_kv_proj_dim, cross_attention_dim)

        self.to_out = nn.ModuleList([])
        self.to_out.append(nn.Linear(inner_dim, query_dim))
        self.to_out.append(nn.Dropout(dropout))

        #'add_scoremap' 'replace_scoremap' 'add_hiddenstate'
        if cross_frame_txtattn and cross_attention_dim == 768 and (text_attn_mode =='add_scoremap' or text_attn_mode.startswith('all')):
            ctm_i_modules = []
            motion_module_kwargs = {
                'num_attention_heads': 8,
                'num_transformer_block': 1,
                'attention_block_types': ['Temporal_Self', 'Temporal_Self'],
                'temporal_position_encoding': True,
                'temporal_position_encoding_max_len': temporal_position_encoding_max_len,
                'temporal_attention_dim_div': 1,
                'zero_initialize': True
            }
            for _ in range(2): 
                ctm_i_modules.append(
                        get_motion_module(
                            in_channels=inner_dim if text_attn_mode =='add_hiddenstate' else 77,
                            motion_module_type='Vanilla', 
                            motion_module_kwargs=motion_module_kwargs,
                        )
                    )
            self.ctm_i_modules=nn.ModuleList(ctm_i_modules)
        else: 
            self.ctm_i_modules=[]

        if cross_frame_txtattn and cross_attention_dim == 768 and (text_attn_mode =='add_hiddenstate' or text_attn_mode.startswith('all')):
            ctm_a_modules = []
            motion_module_kwargs = {
                'num_attention_heads': 8,
                'num_transformer_block': 1,
                'attention_block_types': ['Temporal_Self', 'Temporal_Self'],
                'temporal_position_encoding': True,
                'temporal_position_encoding_max_len': temporal_position_encoding_max_len,
                'temporal_attention_dim_div': 1,
                'zero_initialize': True
            }
            for _ in range(1): 
                ctm_a_modules.append(
                        get_motion_module(
                            in_channels=inner_dim,
                            motion_module_type='Vanilla', 
                            motion_module_kwargs=motion_module_kwargs,
                        )
                    )
            self.ctm_a_modules=nn.ModuleList(ctm_a_modules)
        else: 
            self.ctm_a_modules=[]

    def reshape_heads_to_batch_dim(self, tensor, out_dim=3):
        batch_size, seq_len, dim = tensor.shape
        head_size = self.heads
        if self._use_memory_efficient_attention_xformers and not is_xformers_available():
            tensor = torch_npu.npu_confusion_transpose(tensor, [0, 2, 1, 3], (batch_size, seq_len, head_size, dim // head_size), False)
            if out_dim == 3:
                tensor = tensor.reshape(batch_size * head_size, seq_len, dim // head_size)
        else:
            tensor = tensor.reshape(batch_size, seq_len, head_size, dim // head_size)
            tensor = tensor.permute(0, 2, 1, 3).reshape(batch_size * head_size, seq_len, dim // head_size)
        return tensor

    def reshape_batch_dim_to_heads(self, tensor):
        if self._use_memory_efficient_attention_xformers and not is_xformers_available():
            if len(tensor.shape) == 3:
                batch_size, seq_len, dim = tensor.shape
                head_size = self.heads
                tensor = tensor.reshape(batch_size // head_size, head_size, seq_len, dim)
                #tensor = tensor.permute(0, 2, 1, 3).reshape(batch_size // head_size, seq_len, dim * head_size)
                tensor = torch_npu.npu_confusion_transpose(tensor, [0, 2, 1, 3],
                        (batch_size // head_size, seq_len, dim * head_size), True)
            elif len(tensor.shape) == 4:
                batch_size, head_size, seq_len, dim = tensor.shape
                tensor = torch_npu.npu_confusion_transpose(tensor, [0, 2, 1, 3],
                        (batch_size, seq_len, dim * head_size), True)
        else:
            batch_size, seq_len, dim = tensor.shape
            head_size = self.heads
            tensor = tensor.reshape(batch_size // head_size, head_size, seq_len, dim)
            tensor = tensor.permute(0, 2, 1, 3).reshape(batch_size // head_size, seq_len, dim * head_size)
        return tensor

    def set_attention_slice(self, slice_size):
        if slice_size is not None and slice_size > self.sliceable_head_dim:
            raise ValueError(f"slice_size {slice_size} has to be smaller or equal to {self.sliceable_head_dim}.")

        self._slice_size = slice_size

    def forward(self, hidden_states,encoder_hidden_states=None, attention_mask=None, video_length=16):

        cross_frame_txtattn = self.cross_frame_txtattn
        if hidden_states.shape[0]==2:
            cross_frame_txtattn=False

        if not cross_frame_txtattn:
            self._use_memory_efficient_attention_xformers=True
        else:
            self._use_memory_efficient_attention_xformers=False

        batch_size, sequence_length, _ = hidden_states.shape

        encoder_hidden_states = encoder_hidden_states

        if self.group_norm is not None:
            hidden_states = self.group_norm(hidden_states.transpose(1, 2)).transpose(1, 2)

        query = self.to_q(hidden_states)
        dim = query.shape[-1]
        if self._use_memory_efficient_attention_xformers and not is_xformers_available():
            query = self.reshape_heads_to_batch_dim(query,out_dim=4)
        else:
            query = self.reshape_heads_to_batch_dim(query)

        if self.added_kv_proj_dim is not None:
            key = self.to_k(hidden_states)
            value = self.to_v(hidden_states)
            encoder_hidden_states_key_proj = self.add_k_proj(encoder_hidden_states)
            encoder_hidden_states_value_proj = self.add_v_proj(encoder_hidden_states)

            key = self.reshape_heads_to_batch_dim(key)
            value = self.reshape_heads_to_batch_dim(value)
            encoder_hidden_states_key_proj = self.reshape_heads_to_batch_dim(encoder_hidden_states_key_proj)
            encoder_hidden_states_value_proj = self.reshape_heads_to_batch_dim(encoder_hidden_states_value_proj)

            key = torch.concat([encoder_hidden_states_key_proj, key], dim=1)
            value = torch.concat([encoder_hidden_states_value_proj, value], dim=1)
        else:
            encoder_hidden_states = encoder_hidden_states if encoder_hidden_states is not None else hidden_states
            key = self.to_k(encoder_hidden_states)
            value = self.to_v(encoder_hidden_states)
            if self._use_memory_efficient_attention_xformers and not is_xformers_available():
                key = self.reshape_heads_to_batch_dim(key,out_dim=4)
                value = self.reshape_heads_to_batch_dim(value,out_dim=4)
            else:
                key = self.reshape_heads_to_batch_dim(key)
                value = self.reshape_heads_to_batch_dim(value)

        if attention_mask is not None:
            if attention_mask.shape[-1] != query.shape[1]:
                target_length = query.shape[1]
                attention_mask = F.pad(attention_mask, (0, target_length), value=0.0)
                attention_mask = attention_mask.repeat_interleave(self.heads, dim=0)

        # attention, what we cannot get enough of
        if self._use_memory_efficient_attention_xformers:
            hidden_states = self._memory_efficient_attention_xformers(query, key, value, attention_mask)
            # Some versions of xformers return output in fp32, cast it back to the dtype of the input
            hidden_states = hidden_states.to(query.dtype)
        else:
            if self._slice_size is None or query.shape[0] // self._slice_size == 1:
                # hidden_states,attention_scores = self._attention(query, key, value,raft_loss,attention_mask)
                block_status=None
                trans_index=None
                timesteps=None
                hidden_states = self._attention(query, key, value,cross_frame_txtattn, block_status, trans_index, timesteps, attention_mask, video_length=video_length)

            else:
                hidden_states = self._sliced_attention(query, key, value, sequence_length, dim, attention_mask)

        # linear proj
        hidden_states = self.to_out[0](hidden_states)

        # dropout
        hidden_states = self.to_out[1](hidden_states)

        return hidden_states

    def _attention(self, query, key, value,cross_frame_txtattn=False,block_status=None,trans_index=None,timesteps=None,attention_mask=None, video_length=16):


        if self.upcast_attention:
            query = query.float()
            key = key.float()
        
        attention_scores = torch.baddbmm(
            torch.empty(query.shape[0], query.shape[1], key.shape[1], dtype=query.dtype, device=query.device),
            query,
            key.transpose(-1, -2),
            beta=0,
            alpha=self.scale,
        )

        if attention_mask is not None:
            attention_scores = attention_scores + attention_mask
        # use module

        text_attn_mode=self.text_attn_mode #'add_scoremap' 'replace_scoremap' 'add_hiddenstate'

        if cross_frame_txtattn:
            if text_attn_mode == 'add_scoremap' or text_attn_mode.startswith('all'):
                def create_custom_forward(module, return_dict=None):
                    def custom_forward(*inputs):
                        if return_dict is not None:
                            return module(*inputs, return_dict=return_dict)
                        else:
                            return module(*inputs)
                    return custom_forward
                attention_scores_finetuned=attention_scores.clone()
                
                for ctm_i_module in self.ctm_i_modules:
                    temb=None
                    encoder_hidden_states=None
                    head_size=self.heads
                    batch_head,seq_len,prompt_channel = attention_scores_finetuned.shape
                    mul_head_attn_scores=attention_scores_finetuned.reshape(batch_head//head_size,head_size,seq_len,prompt_channel) #32,8,1024,77

                    b = int(batch_head / video_length //head_size)
                    h_w = int(math.sqrt(seq_len))
                    unsqueeze_attention_scores = rearrange(mul_head_attn_scores, "(b f) m (h w) c -> (b m) c f h w",b=b,f=video_length,h=h_w, w=h_w)
                    attention_scores_first_frame, attention_scores_without_first_frame = torch.split(unsqueeze_attention_scores, [1, unsqueeze_attention_scores.size(2) - 1], dim=2)
                    refined_attention_scores = torch.utils.checkpoint.checkpoint(create_custom_forward(ctm_i_module), attention_scores_without_first_frame.requires_grad_(), temb, encoder_hidden_states)
                    combined_attention_scores = torch.cat([attention_scores_first_frame, refined_attention_scores], dim=2)
                    attention_scores_finetuned = rearrange(combined_attention_scores, "b c f h w -> (b f) (h w) c")
                    
                attention_scores = attention_scores + attention_scores_finetuned

        visualize=False
        if visualize:
            if attention_scores.size(0) == 256:
                if block_status:
                    attention_scores = attention_scores[128:]
                    timesteps = timesteps[0]
                    attention_save_path = f'/home/jovyan/maao-data-cephfs-2/workspace/fengjiasong/projects/Cross_atten_visual/{block_status}_{trans_index}_{timesteps}.pt'#Down or UP? Down_block 1 or 2? Transformer 1 or 2? TimeStep?
                    torch.save(attention_scores, attention_save_path) 
                    attention_info = attention_save_path
                    with open('/home/jovyan/maao-data-cephfs-2/workspace/fengjiasong/projects/Cross_atten_visual/attention_info.txt','a') as f:
                        f.write(attention_info+'\n')


        if self.upcast_softmax:
            attention_scores = attention_scores.float()

        attention_probs = attention_scores.softmax(dim=-1)

        # cast back to the original dtype
        attention_probs = attention_probs.to(value.dtype)

        # compute attention output
        hidden_states = torch.bmm(attention_probs, value)

        # reshape hidden_states
        hidden_states = self.reshape_batch_dim_to_heads(hidden_states)

        if cross_frame_txtattn:
            if text_attn_mode=='add_hiddenstate' or text_attn_mode.startswith('all'):
                temb=None
                encoder_hidden_states=None
                def create_custom_forward(module, return_dict=None):
                    def custom_forward(*inputs):
                        if return_dict is not None:
                            return module(*inputs, return_dict=return_dict)
                        else:
                            return module(*inputs)
                    return custom_forward
                hidden_states_finetuned = hidden_states.clone()
                for ctm_a_module in self.ctm_a_modules:
                    bsz,seq_len,prompt_channel = hidden_states_finetuned.shape
                    h_w = int(math.sqrt(seq_len))
                    unsqueeze_hidden_states_finetuned = rearrange(hidden_states_finetuned, "(b f) (h w) c -> b c f h w", f=video_length,h=h_w, w=h_w)
                    refined_unsqueeze_hidden_states_finetuned = torch.utils.checkpoint.checkpoint(create_custom_forward(ctm_a_module), unsqueeze_hidden_states_finetuned.requires_grad_(), temb, encoder_hidden_states)
                    hidden_states_finetuned = rearrange(refined_unsqueeze_hidden_states_finetuned, "b c f h w -> (b f) (h w) c")
                hidden_states = 0.5* hidden_states + 0.5* hidden_states_finetuned

        return hidden_states

    def _memory_efficient_attention_xformers(self, query, key, value, attention_mask):
        # TODO attention_mask
        query = query.contiguous()
        key = key.contiguous()
        value = value.contiguous()

        if is_xformers_available():
            hidden_states = xformers.ops.memory_efficient_attention(query, key, value, attn_bias=attention_mask)
        else:
            query = torch.tensor(query, dtype=torch.float16, device='npu')
            key = torch.tensor(key, dtype=torch.float16, device='npu')
            value = torch.tensor(value, dtype=torch.float16, device='npu')
            hidden_states = torch_npu.npu_fusion_attention(
                query, key, value, self.heads, input_layout="BNSD",
                pse=None,
                atten_mask=attention_mask,
                #scale=self.scale,
                scale=1.0/math.sqrt(query.shape[-1]),
                pre_tockens=65536,
                next_tockens=65536,
                keep_prob=1.,
                sync=False,
                inner_precise=0,
            )[0]

        hidden_states = self.reshape_batch_dim_to_heads(hidden_states)
        return hidden_states


class Transformer3DModel(ModelMixin, ConfigMixin):
    @register_to_config
    def __init__(
        self,
        num_attention_heads: int = 16,
        attention_head_dim: int = 88,
        in_channels: Optional[int] = None,
        num_layers: int = 1,
        dropout: float = 0.0,
        norm_num_groups: int = 32,
        cross_attention_dim: Optional[int] = None,
        attention_bias: bool = False,
        activation_fn: str = "geglu",
        num_embeds_ada_norm: Optional[int] = None,
        use_linear_projection: bool = False,
        only_cross_attention: bool = False,
        upcast_attention: bool = False,

        unet_use_cross_frame_attention=None,
        unet_use_temporal_attention=None,

        cross_frame_txtattn=False,
        text_attn_mode = '',
        if_mid :bool = False,
        temporal_position_encoding_max_len=32,
    ):
        super().__init__()
        self.use_linear_projection = use_linear_projection
        self.num_attention_heads = num_attention_heads
        self.attention_head_dim = attention_head_dim
        inner_dim = num_attention_heads * attention_head_dim

        # Define input layers
        self.in_channels = in_channels

        self.cross_frame_txtattn = cross_frame_txtattn
        self.text_attn_mode=text_attn_mode

        self.norm = torch.nn.GroupNorm(num_groups=norm_num_groups, num_channels=in_channels, eps=1e-6, affine=True)
        if use_linear_projection:
            self.proj_in = nn.Linear(in_channels, inner_dim)
        else:
            self.proj_in = nn.Conv2d(in_channels, inner_dim, kernel_size=1, stride=1, padding=0)

        # Define transformers blocks
        self.transformer_blocks = nn.ModuleList(
            [
                BasicTransformerBlock(
                    inner_dim,
                    num_attention_heads,
                    attention_head_dim,
                    dropout=dropout,
                    cross_attention_dim=cross_attention_dim,
                    activation_fn=activation_fn,
                    num_embeds_ada_norm=num_embeds_ada_norm,
                    attention_bias=attention_bias,
                    only_cross_attention=only_cross_attention,
                    upcast_attention=upcast_attention,

                    unet_use_cross_frame_attention=unet_use_cross_frame_attention,
                    unet_use_temporal_attention=unet_use_temporal_attention,

                    cross_frame_txtattn=cross_frame_txtattn,
                    text_attn_mode = text_attn_mode,
                    temporal_position_encoding_max_len=temporal_position_encoding_max_len
                )
                for d in range(num_layers)
            ]
        )

        #'add_scoremap' ' 'add_temporal_txt' 'all' 'add_tem_noise_cross_text'
        if cross_frame_txtattn:
            if text_attn_mode=='add_temporal_txt' or text_attn_mode=='add_tem_noise_cross_text' or text_attn_mode=='all_stage_2' or text_attn_mode=='all' :
                self.ctm_b_cross_modules=[]
                ctm_b_cross_modules = []
                spatial_cross_text_kwargs = {
                    'num_attention_heads': 8,
                    'num_transformer_block': 1,
                    'attention_block_types': ['Temporal_Cross'],
                    'temporal_position_encoding': True,
                    'temporal_position_encoding_max_len': temporal_position_encoding_max_len,
                    'temporal_attention_dim_div': 1,
                    'zero_initialize': True
                }
                for _ in range(1): 
                    ctm_b_cross_modules.append(
                            get_temporal_text_module(
                                in_channels=inner_dim,
                                temporal_module_type='Vanilla', 
                                temporal_module_kwargs=spatial_cross_text_kwargs,
                                if_mid = if_mid
                            )
                        )
                self.ctm_b_cross_modules=nn.ModuleList(ctm_b_cross_modules)

                # temporal_self_attn
                self.ctm_b_self_modules=[]
                ctm_b_self_modules = []
                temporal_self_text_kwargs = {
                    'num_attention_heads': 8,
                    'num_transformer_block': 1,
                    'attention_block_types': ['Temporal_Self', 'Temporal_Self'],
                    'temporal_position_encoding': True,
                    'temporal_position_encoding_max_len': temporal_position_encoding_max_len,
                    'temporal_attention_dim_div': 1,
                    'zero_initialize': True
                }
                for _ in range(2): 
                    ctm_b_self_modules.append(
                            get_motion_module(
                                in_channels=inner_dim if text_attn_mode=='add_tem_noise_cross_text' or text_attn_mode=='all_stage_2' or text_attn_mode=='all' else 768,
                                motion_module_type='Vanilla', 
                                motion_module_kwargs=temporal_self_text_kwargs,
                            )
                        )
                self.ctm_b_self_modules=nn.ModuleList(ctm_b_self_modules)

        # 4. Define output layers
        if use_linear_projection:
            self.proj_out = nn.Linear(in_channels, inner_dim)
        else:
            self.proj_out = nn.Conv2d(inner_dim, in_channels, kernel_size=1, stride=1, padding=0)

    def forward(self, hidden_states, encoder_hidden_states=None, timestep=None, return_dict: bool = True):
        # Input
        #if torch.isnan(hidden_states).any():
            #print("**************************Transformer3DModel_hidden_states_nan**************************")

        cross_frame_txtattn=self.cross_frame_txtattn
        if hidden_states.shape[2]==1:
            cross_frame_txtattn=False
        # Input
        assert hidden_states.dim() == 5, f"Expected hidden_states to have ndim=5, but got ndim={hidden_states.dim()}."
        video_length = hidden_states.shape[2]
        hidden_states = rearrange(hidden_states, "b c f h w -> (b f) c h w")
        encoder_hidden_states = repeat(encoder_hidden_states, 'b n c -> b f n c', f=video_length)
        first_frame_encoder_hidden_states = encoder_hidden_states[:, 0:1, :,:]
        encoder_hidden_states = rearrange(encoder_hidden_states, 'b f n c -> (b f) n c')

        text_attn_mode=self.text_attn_mode
        if cross_frame_txtattn:
            if text_attn_mode=='add_temporal_txt':
                temb=timestep
                res_encoder_hidden_states = encoder_hidden_states
                rearrange_hidden_states = hidden_states.clone()
                rearrange_hidden_states = rearrange(rearrange_hidden_states,"(b f) c h w ->b c f h w", f=video_length)
                for ctm_b_cross_module in self.ctm_b_cross_modules:
                    encoder_hidden_states = ctm_b_cross_module(input_tensor=rearrange_hidden_states,temb=temb,encoder_hidden_states=encoder_hidden_states)
                encoder_hidden_states = rearrange(encoder_hidden_states, '(b f) n c -> b c f n',f=video_length).unsqueeze(dim=-1)
                # temporal_self_attn
                for ctm_b_self_module in self.ctm_b_self_modules:
                    encoder_hidden_states = ctm_b_self_module(input_tensor=encoder_hidden_states,temb=temb,encoder_hidden_states=encoder_hidden_states)
                encoder_hidden_states = rearrange(encoder_hidden_states.squeeze(dim=-1), 'b c f n -> b f n c',f=video_length)
                encoder_hidden_states[:, 0:1, :,:] = first_frame_encoder_hidden_states
                encoder_hidden_states = rearrange(encoder_hidden_states, 'b f n c -> (b f) n c')
                
            if text_attn_mode=='add_tem_noise_cross_text' or text_attn_mode=='all_stage_2' or text_attn_mode=='all':
                temb=timestep
                res_encoder_hidden_states = encoder_hidden_states
                hidden_states = rearrange(hidden_states,"(b f) c h w ->b c f h w", f=video_length)
                for ctm_b_self_module in self.ctm_b_self_modules:
                    hidden_states = ctm_b_self_module(input_tensor=hidden_states,temb=temb,encoder_hidden_states=hidden_states)
                for ctm_b_cross_module in self.ctm_b_cross_modules:
                    encoder_hidden_states = ctm_b_cross_module(input_tensor=hidden_states,temb=temb,encoder_hidden_states=encoder_hidden_states)
                encoder_hidden_states = rearrange(encoder_hidden_states, '(b f) n c -> b c f n',f=video_length).unsqueeze(dim=-1)
                encoder_hidden_states = rearrange(encoder_hidden_states.squeeze(dim=-1), 'b c f n -> b f n c',f=video_length)
                encoder_hidden_states[:, 0:1, :,:] = first_frame_encoder_hidden_states
                encoder_hidden_states = rearrange(encoder_hidden_states, 'b f n c -> (b f) n c')
                hidden_states = rearrange(hidden_states,"b c f h w -> (b f) c h w")
            # encoder_hidden_states = 0.5*encoder_hidden_states + 0.5*res_encoder_hidden_states #注释掉就是替换，否则就是残差结构

        batch, channel, height, weight = hidden_states.shape
        residual = hidden_states

        hidden_states = self.norm(hidden_states)
        if not self.use_linear_projection:
            hidden_states = self.proj_in(hidden_states)
            inner_dim = hidden_states.shape[1]
            hidden_states = hidden_states.permute(0, 2, 3, 1).reshape(batch, height * weight, inner_dim)
        else:
            inner_dim = hidden_states.shape[1]
            hidden_states = hidden_states.permute(0, 2, 3, 1).reshape(batch, height * weight, inner_dim)
            hidden_states = self.proj_in(hidden_states)

        # Blocks
        for block in self.transformer_blocks:
            hidden_states = block(
                hidden_states,
                encoder_hidden_states=encoder_hidden_states,
                timestep=timestep,
                video_length=video_length
            )

        # Output
        if not self.use_linear_projection:
            hidden_states = (
                hidden_states.reshape(batch, height, weight, inner_dim).permute(0, 3, 1, 2).contiguous()
            )
            hidden_states = self.proj_out(hidden_states)
        else:
            hidden_states = self.proj_out(hidden_states)
            hidden_states = (
                hidden_states.reshape(batch, height, weight, inner_dim).permute(0, 3, 1, 2).contiguous()
            )

        output = hidden_states + residual

        output = rearrange(output, "(b f) c h w -> b c f h w", f=video_length)
        if not return_dict:
            return output

        return Transformer3DModelOutput(sample=output).sample


class BasicTransformerBlock(nn.Module):
    def __init__(
        self,
        dim: int,
        num_attention_heads: int,
        attention_head_dim: int,
        dropout=0.0,
        cross_attention_dim: Optional[int] = None,
        activation_fn: str = "geglu",
        num_embeds_ada_norm: Optional[int] = None,
        attention_bias: bool = False,
        only_cross_attention: bool = False,
        upcast_attention: bool = False,

        unet_use_cross_frame_attention = None,
        unet_use_temporal_attention = None,

        cross_frame_txtattn:bool = False,
        text_attn_mode:str = '',
        temporal_position_encoding_max_len=32,
    ):
        super().__init__()
        self.only_cross_attention = only_cross_attention
        self.use_ada_layer_norm = num_embeds_ada_norm is not None
        self.unet_use_cross_frame_attention = unet_use_cross_frame_attention
        self.unet_use_temporal_attention = unet_use_temporal_attention

        # SC-Attn
        assert unet_use_cross_frame_attention is not None
        if unet_use_cross_frame_attention:
            self.attn1 = SparseCausalAttention2D(
                query_dim=dim,
                heads=num_attention_heads,
                dim_head=attention_head_dim,
                dropout=dropout,
                bias=attention_bias,
                cross_attention_dim=cross_attention_dim if only_cross_attention else None,
                upcast_attention=upcast_attention,
            )
        else:
            self.attn1 = CrossAttention(
                query_dim=dim,
                heads=num_attention_heads,
                dim_head=attention_head_dim,
                dropout=dropout,
                bias=attention_bias,
                upcast_attention=upcast_attention,
            )
        self.norm1 = AdaLayerNorm(dim, num_embeds_ada_norm) if self.use_ada_layer_norm else nn.LayerNorm(dim)

        # Cross-Attn
        if cross_attention_dim is not None:
            self.attn2 = CrossAttention(
                query_dim=dim,
                cross_attention_dim=cross_attention_dim,
                heads=num_attention_heads,
                dim_head=attention_head_dim,
                dropout=dropout,
                bias=attention_bias,
                upcast_attention=upcast_attention,

                cross_frame_txtattn=cross_frame_txtattn,
                text_attn_mode=text_attn_mode,
                temporal_position_encoding_max_len=temporal_position_encoding_max_len
            )
        else:
            self.attn2 = None

        if cross_attention_dim is not None:
            self.norm2 = AdaLayerNorm(dim, num_embeds_ada_norm) if self.use_ada_layer_norm else nn.LayerNorm(dim)
        else:
            self.norm2 = None

        # Feed-forward
        self.ff = FeedForward(dim, dropout=dropout, activation_fn=activation_fn)
        self.norm3 = nn.LayerNorm(dim)

        # Temp-Attn
        assert unet_use_temporal_attention is not None
        if unet_use_temporal_attention:
            self.attn_temp = CrossAttention(
                query_dim=dim,
                heads=num_attention_heads,
                dim_head=attention_head_dim,
                dropout=dropout,
                bias=attention_bias,
                upcast_attention=upcast_attention,
            )
            nn.init.zeros_(self.attn_temp.to_out[0].weight.data)
            self.norm_temp = AdaLayerNorm(dim, num_embeds_ada_norm) if self.use_ada_layer_norm else nn.LayerNorm(dim)

    def set_use_memory_efficient_attention_xformers(self, use_memory_efficient_attention_xformers: bool):
#        if not is_xformers_available():
#            print("Here is how to install it")
#            raise ModuleNotFoundError(
#                "Refer to https://github.com/facebookresearch/xformers for more information on how to install"
#                " xformers",
#                name="xformers",
#            )
#        elif not torch.cuda.is_available():
#            raise ValueError(
#                "torch.cuda.is_available() should be True but is False. xformers' memory efficient attention is only"
#                " available for GPU "
#            )
#        else:
#            try:
#                # Make sure we can run the memory efficient attention
#                _ = xformers.ops.memory_efficient_attention(
#                    torch.randn((1, 2, 40), device="cuda"),
#                    torch.randn((1, 2, 40), device="cuda"),
#                    torch.randn((1, 2, 40), device="cuda"),
#                )
#            except Exception as e:
#                raise e
        self.attn1._use_memory_efficient_attention_xformers = use_memory_efficient_attention_xformers
        if self.attn2 is not None:
            self.attn2._use_memory_efficient_attention_xformers = use_memory_efficient_attention_xformers
            # self.attn_temp._use_memory_efficient_attention_xformers = use_memory_efficient_attention_xformers

    def forward(self, hidden_states, encoder_hidden_states=None, timestep=None, attention_mask=None, video_length=None):
        # SparseCausal-Attention
        #if torch.isnan(hidden_states).any() :
        #    print("***********************************hidden_states_nan_0*************")
        norm_hidden_states = (
            self.norm1(hidden_states, timestep) if self.use_ada_layer_norm else self.norm1(hidden_states)
        )

        # if self.only_cross_attention:
        #     hidden_states = (
        #         self.attn1(norm_hidden_states, encoder_hidden_states, attention_mask=attention_mask) + hidden_states
        #     )
        # else:
        #     hidden_states = self.attn1(norm_hidden_states, attention_mask=attention_mask, video_length=video_length) + hidden_states

        # pdb.set_trace()
        #if torch.isnan(norm_hidden_states).any() :
        #    print("***********************************norm_hidden_states_nan_1*************")
        if self.unet_use_cross_frame_attention:
            hidden_states = self.attn1(norm_hidden_states, attention_mask=attention_mask, video_length=video_length) + hidden_states
            #print("*****************unet_use_cross_frame_attention_0*************")
        else:
            #if torch.isnan(hidden_states).any() :
            #    print("***********************************before_hidden_states_nan*************")

            hidden_states = self.attn1(norm_hidden_states, attention_mask=attention_mask) + hidden_states
            #if torch.isnan(hidden_states).any() :
            #    print("***********************************after_hidden_states_nan*************")

        #if torch.isnan(hidden_states).any() :
        #    print("***********************************hidden_states_nan_2*************")

        if self.attn2 is not None:
            # Cross-Attention
            norm_hidden_states = (
                self.norm2(hidden_states, timestep) if self.use_ada_layer_norm else self.norm2(hidden_states)
            )
            hidden_states = (
                self.attn2(
                    norm_hidden_states, encoder_hidden_states=encoder_hidden_states, attention_mask=attention_mask, video_length=video_length
                )
                + hidden_states
            )

        # Feed-forward
        hidden_states = self.ff(self.norm3(hidden_states)) + hidden_states

        # Temporal-Attention
        if self.unet_use_temporal_attention:
            d = hidden_states.shape[1]
            hidden_states = rearrange(hidden_states, "(b f) d c -> (b d) f c", f=video_length)
            norm_hidden_states = (
                self.norm_temp(hidden_states, timestep) if self.use_ada_layer_norm else self.norm_temp(hidden_states)
            )
            hidden_states = self.attn_temp(norm_hidden_states) + hidden_states
            hidden_states = rearrange(hidden_states, "(b d) f c -> (b f) d c", d=d)

        return hidden_states
