import torch
import os
import math
import json
from diffusers.configuration_utils import ConfigMixin, register_to_config
from diffusers.modeling_utils import ModelMixin
from typing import Optional, Union, Tuple
from einops import rearrange, repeat
from diffusers.models.vae import DiagonalGaussianDistribution, DecoderOutput, AutoencoderKLOutput
from .vae_models import Encoder, Decoder


class CVVAEModel(ModelMixin, ConfigMixin):
    config_name = "config.json"
    @register_to_config
    def __init__(
        self,
        double_z= True,
        z_channels= 4,
        in_channels= 3,
        out_ch= 3,
        ch= 128,
        ch_mult= [1, 2, 4, 4],
        num_res_blocks= 2,
        attn_resolutions= [],
        dropout= 0.0,
        use_3d_conv= True,
        half_3d= True,
        causal_encoder= True,
        causal_decoder= False,
        encoder_attn_type='vanilla-xformers',
        decoder_attn_type='spatial-temporal-xformer',
        scaling_factor: float = 0.18215,
        force_upcast: float = True,
        en_de_n_frames_a_time: Optional[int] =16,
        time_n_compress: Optional[int] = 4,
        spatial_n_compress: Optional[int] = 8,
        tile_spatial_size: Optional[int] = 576,
        num_video_frames: Optional[int] = None,
        tile_overlap_ratio: Optional[float] = 0.2222,
        reshape_z_dim_to_4: bool = False,
        reshape_x_dim_to_4: bool = False,
    ):
        super().__init__()
        self.encoder = Encoder(ch=ch,
                               out_ch=out_ch,
                               ch_mult=ch_mult,
                               num_res_blocks=num_res_blocks,
                               attn_resolutions=attn_resolutions,
                               dropout=dropout,
                               in_channels=in_channels,
                               z_channels=z_channels,
                               double_z=double_z,
                               attn_type=encoder_attn_type,
                               use_3d_conv=use_3d_conv,
                               half_3d=half_3d,
                               causal=causal_encoder)
        self.decoder = Decoder(ch=ch,
                               out_ch=out_ch,
                               ch_mult=ch_mult,
                               num_res_blocks=num_res_blocks,
                               attn_resolutions=attn_resolutions,
                               dropout=dropout,
                               in_channels=in_channels,
                               z_channels=z_channels,
                               double_z=double_z,
                               attn_type=decoder_attn_type,
                               use_3d_conv=use_3d_conv,
                               half_3d=half_3d,
                               causal=causal_decoder)

        if en_de_n_frames_a_time is not None:
            assert time_n_compress is not None
            assert en_de_n_frames_a_time % time_n_compress == 0
            self.encode_n_frames_a_time = en_de_n_frames_a_time
            self.decode_n_frames_a_time = en_de_n_frames_a_time // time_n_compress
        else:
            self.encode_n_frames_a_time = None
            self.decode_n_frames_a_time = None

        if num_video_frames is not None:
            assert time_n_compress is not None
            self.num_video_frames = num_video_frames
            self.num_latent_frames = 1 + (num_video_frames - 1) // time_n_compress
        else:
            self.num_video_frames = None
            self.num_latent_frames = None

        if tile_spatial_size is not None:
            assert spatial_n_compress is not None and tile_overlap_ratio is not None
            self.pixel_tile_size = tile_spatial_size
            self.latent_tile_size = tile_spatial_size // spatial_n_compress
            self.tile_overlap_ratio = tile_overlap_ratio
        else:
            self.pixel_tile_size = None
            self.latent_tile_size = None
            self.tile_overlap_ratio = None

        self.reshape_z_dim_to_4 = reshape_z_dim_to_4
        self.reshape_x_dim_to_4 = reshape_x_dim_to_4
        

    def forward(
        self,
        sample: torch.FloatTensor,
        sample_posterior: bool = False,
        return_dict: bool = True,
        generator: Optional[torch.Generator] = None,
        num_frames: int = None,
    ) -> Union[DecoderOutput, torch.FloatTensor]:
        r"""
        Args:
            sample (`torch.FloatTensor`): Input sample.
            sample_posterior (`bool`, *optional*, defaults to `False`):
                Whether to sample from the posterior.
            return_dict (`bool`, *optional*, defaults to `True`):
                Whether or not to return a [`DecoderOutput`] instead of a plain tuple.
        """
        x = sample
        posterior = self.encode(x).latent_dist
        if sample_posterior:
            z = posterior.sample(generator=generator)
        else:
            z = posterior.mode()

        dec = self.decode(z, num_frames=num_frames).sample

        if not return_dict:
            return (dec,)

        return DecoderOutput(sample=dec)

    def spatial_tiled_encode(self, x):
        if self.pixel_tile_size is None:
            z = self.encoder(x)
        else:
            pixel_stride = round(self.pixel_tile_size * (1 - self.tile_overlap_ratio))
            latent_overlap = round(self.latent_tile_size * self.tile_overlap_ratio)
            latent_stride = self.latent_tile_size - latent_overlap
            rows = []
            for i in range(0, x.shape[3], pixel_stride):
                cols = []
                for j in range(0, x.shape[4], pixel_stride):
                    tile = x[
                        :,
                        :,
                        :,
                        i : i + self.pixel_tile_size,
                        j : j + self.pixel_tile_size,
                    ]
                    tile = self.encoder(tile)
                    cols.append(tile)
                    if j + self.pixel_tile_size >= x.shape[4]:
                        break
                rows.append(cols)
                if i + self.pixel_tile_size >= x.shape[3]:
                    break

            results_rows = []
            for i, cols in enumerate(rows):
                results_cols = []
                for j, tile in enumerate(cols):
                    if i > 0:
                        tile = self.blend_v(rows[i - 1][j], tile, latent_overlap)
                    if j > 0:
                        tile = self.blend_h(cols[j - 1], tile, latent_overlap)
                    results_cols.append(tile)
                results_rows.append(results_cols)

            latents = []
            for i, cols in enumerate(results_rows):
                for j, tile in enumerate(cols):
                    if i < len(results_rows) - 1:
                        tile = tile[:, :, :, :latent_stride, :]
                    if j < len(cols) - 1:
                        tile = tile[:, :, :, :, :latent_stride]
                    cols[j] = tile
                latents.append(torch.cat(cols, dim=4))
            z = torch.cat(latents, dim=3)
        return z

    def tiled_encode(self, x):
        if self.encode_n_frames_a_time is None:
            z = self.spatial_tiled_encode(x)
        else:
            assert x.dim() == 5
            z_all = []
            stride = self.encode_n_frames_a_time
            n_rounds = math.ceil((x.shape[2] - 1) / stride)
            n_rounds = 1 if n_rounds == 0 else n_rounds
            for n in range(n_rounds):
                z_i = self.spatial_tiled_encode(
                    x[:, :, n * stride : (n + 1) * stride + 1, :, :]
                )
                z_i = z_i if n == 0 else z_i[:, :, 1:, :, :]
                z_all.append(z_i)
            z = torch.cat(z_all, dim=2)

        return z

    def encode(
        self,
        x: torch.Tensor,
        return_dict: bool = True
    ) -> Union[AutoencoderKLOutput, Tuple[DiagonalGaussianDistribution]]:
        if x.dim() == 4:
            if self.num_video_frames is not None:
                x = rearrange(x, "(b t) c h w -> b c t h w", t=self.num_video_frames)
            else:
                x = rearrange(x, "b c h w -> b c () h w")

        moments = self.tiled_encode(x)
        posterior = DiagonalGaussianDistribution(moments)

        if not return_dict:
            return (posterior,)

        return AutoencoderKLOutput(latent_dist=posterior)

    def spatial_tiled_decode(self, z: torch.Tensor, **kwargs):
        if self.latent_tile_size is None:
            x = self.decoder(z, **kwargs)
        else:
            latent_stride = round(self.latent_tile_size * (1 - self.tile_overlap_ratio))
            pixel_overlap = round(self.pixel_tile_size * self.tile_overlap_ratio)
            pixel_stride = self.pixel_tile_size - pixel_overlap

            rows = []
            for i in range(0, z.shape[3], latent_stride):
                cols = []
                for j in range(0, z.shape[4], latent_stride):
                    tile = z[
                        :,
                        :,
                        :,
                        i : i + self.latent_tile_size,
                        j : j + self.latent_tile_size,
                    ]
                    tile = self.decoder(tile)
                    cols.append(tile)
                    if j + self.latent_tile_size >= z.shape[4]:
                        break
                rows.append(cols)
                if i + self.latent_tile_size >= z.shape[3]:
                    break
            results_rows = []
            for i, cols in enumerate(rows):
                results_cols = []
                for j, tile in enumerate(cols):
                    if i > 0:
                        tile = self.blend_v(rows[i - 1][j], tile, pixel_overlap)
                    if j > 0:
                        tile = self.blend_h(cols[j - 1], tile, pixel_overlap)
                    results_cols.append(tile)
                results_rows.append(results_cols)

            pixels = []
            for i, cols in enumerate(results_rows):
                for j, tile in enumerate(cols):
                    if i < len(results_rows) - 1:
                        tile = tile[:, :, :, :pixel_stride, :]
                    if j < len(cols) - 1:
                        tile = tile[:, :, :, :, :pixel_stride]
                    cols[j] = tile
                pixels.append(torch.cat(cols, dim=4))
            x = torch.cat(pixels, dim=3)
        return x

    def tiled_decode(self, z: torch.Tensor, **kwargs):
        if self.decode_n_frames_a_time is None:
            x = self.spatial_tiled_decode(z, **kwargs)
        else:
            assert z.dim() == 5
            x_all = []
            stride = self.decode_n_frames_a_time
            n_rounds = math.ceil((z.shape[2] - 1) / stride)
            n_rounds = 1 if n_rounds == 0 else n_rounds

            for n in range(n_rounds):
                x_i = self.spatial_tiled_decode(
                    z[:, :, n * stride : (n + 1) * stride + 1, :, :], **kwargs
                )
                x_i = x_i if n == 0 else x_i[:, :, 1:, :, :]
                x_all.append(x_i)
            x = torch.cat(x_all, dim=2)
        return x

    def decode(self,
               z: torch.Tensor,
               num_frames: int = None,
               return_dict: bool = True,) -> torch.Tensor:
        if z.dim() == 4:
            if num_frames is not None:
                z = rearrange(z, "(b t) c h w -> b c t h w", t=num_frames)
            elif self.num_latent_frames is not None:
                z = rearrange(z, "(b t) c h w -> b c t h w", t=self.num_latent_frames)
            else:
                z = rearrange(z, "b c h w -> b c () h w")
        x = self.tiled_decode(z)
        if self.reshape_x_dim_to_4:
            x = rearrange(x, "b c t h w -> (b t) c h w")
        
        if not return_dict:
            return (x,)

        return DecoderOutput(sample=x)

    def blend_h(
        self, a: torch.Tensor, b: torch.Tensor, overlap_size: int
    ) -> torch.Tensor:
        weight_b = (torch.arange(overlap_size).view(1, 1, 1, 1, -1) / overlap_size).to(
            b.device
        )
        b[:, :, :, :, :overlap_size] = (1 - weight_b) * a[
            :, :, :, :, -overlap_size:
        ] + weight_b * b[:, :, :, :, :overlap_size]
        return b

    def blend_v(
        self, a: torch.Tensor, b: torch.Tensor, overlap_size: int
    ) -> torch.Tensor:
        weight_b = (torch.arange(overlap_size).view(1, 1, 1, -1, 1) / overlap_size).to(
            b.device
        )
        b[:, :, :, :overlap_size, :] = (1 - weight_b) * a[
            :, :, :, -overlap_size:, :
        ] + weight_b * b[:, :, :, :overlap_size, :]
        return b
