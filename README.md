# FancyVideo

This repository is the official implementation of [FancyVideo](https://360cvgroup.github.io/FancyVideo/).

**[FancyVideo: Towards Dynamic and Consistent Video Generation via Cross-frame Textual Guidance](https://arxiv.org/abs/2408.08189)** 
</br>
Jiasong Feng*, Ao Ma*, Jing Wang*, Bo Cheng, Xiaodan Liang, Dawei Leng†, Yuhui Yin(*Equal Contribution, ✝Corresponding Author)
</br>
[![arXiv](https://img.shields.io/badge/arXiv-2307.04725-b31b1b.svg)](https://arxiv.org/abs/2408.08189)
[![Project Page](https://img.shields.io/badge/Project-Website-green)](https://360cvgroup.github.io/FancyVideo/)
[![weixin](https://img.shields.io/badge/-WeChat@机器之心-000000?logo=wechat&logoColor=07C160)](https://mp.weixin.qq.com/s/_Njlo7D1YogSpr8nK_p_Jg)
[![ComfyUI](https://img.shields.io/static/v1?label=App&message=ComfyUI&&color=green)](https://github.com/AIFSH/FancyVideo-ComfyUI)


Our code builds upon [AnimateDiff](https://github.com/guoyww/AnimateDiff), and we also incorporate insights from [CV-VAE](https://github.com/AILab-CVC/CV-VAE), [Res-Adapter](https://github.com/bytedance/res-adapter), and [Long-CLIP](https://github.com/beichenzbc/Long-CLIP) to enhance our project. We appreciate the open-source contributions of these works.


## 🔥 News
- **[2024/10/10]** 🔥 We released the 125-frame model, along with the video extending model and the video backtracking model, all developed from the 61-frame model. The model has been uploaded to [huggingface](https://huggingface.co/qihoo360/FancyVideo).
- **[2024/09/05]** We are thrilled to present our latest research: [Qihoo-T2X](https://360cvgroup.github.io/Qihoo-T2X/), a pioneering DiT architecture paradigm designed for Text-to-Any tasks.
- **[2024/08/19]** We initialized this github repository and released the inference code and 61-frame model.
- **[2024/08/15]** We released the paper of [FancyVideo](https://arxiv.org/abs/2408.08189).


## 🕓 Schedules
- **[In early October 2024]** We plan to release the 125-frame model of FancyVideo, along with the video extending model and the video backtracking model. [√]
- **[In early November 2024]** We plan to release the training code of FancyVideo.
- **[Temporary uncertainty]** We plan to release the 16-channel 3D Video VAEs and corresponding model of FancyVideo.


## Quick Demos
Video demos can be found in the [webpage](https://360cvgroup.github.io/FancyVideo/). Some of them are contributed by the community. You can customize your own videos using the following reasoning code.


## Quick Start
### 0. Experimental environment
We tested our inference code on a machine with a 24GB 3090 GPU and CUDA environment version 12.1.

### 1. Setup repository and environment
```
git clone https://github.com/360CVGroup/FancyVideo.git
cd FancyVideo

conda create -n fancyvideo python=3.10
conda activate fancyvideo
pip install -r requirements.txt
```

### 2. Prepare the models
```
# fancyvideo-ckpts & cv-vae & res-adapter & longclip & sdv1.5-base-models
git lfs install
git clone https://huggingface.co/qihoo360/FancyVideo
mv FancyVideo/resources/models resources 


# stable-diffusion-v1-5
git clone https://huggingface.co/runwayml/stable-diffusion-v1-5 resources/models
```
After download models, your resources folder is like:
```
📦 resources/
├── 📂 models/
│   └── 📂 fancyvideo_ckpts/
│       └── 📂 vae_3d_61_frames/
│       └── 📂 vae_3d_125_frames/
│       └── 📂 video_extending/
│       └── 📂 video_backtracking/
│   └── 📂 CV-VAE/
│   └── 📂 res-adapter/
│   └── 📂 LongCLIP-L/
│   └── 📂 sd_v1-5_base_models/
│   └── 📂 stable-diffusion-v1-5/
├── 📂 demos/
│   └── 📂 reference_images/
│   └── 📂 reference_videos/
│   └── 📂 test_prompts/
```

### 3. Customize your own videos
#### 3.1 Image to Video
Due to the limited image generation capabilities of the SD1.5 model, we recommend generating the initial frame using a more advanced T2I model, such as SDXL, and then using our model's I2V capabilities to create the video.
```
CUDA_VISIBLE_DEVICES=0 PYTHONPATH=./ python scripts/demo.py --config configs/inference/i2v.yaml
```
#### 3.2 Text to Video with different base models
Our model features universal T2V capabilities and can be customized with the SD1.5 community base model.
```
# use the base model of pixars
CUDA_VISIBLE_DEVICES=0 PYTHONPATH=./ python scripts/demo.py --config configs/inference/t2v_pixars.yaml

# use the base model of realcartoon3d
CUDA_VISIBLE_DEVICES=0 PYTHONPATH=./ python scripts/demo.py --config configs/inference/t2v_realcartoon3d.yaml

# use the base model of toonyou
CUDA_VISIBLE_DEVICES=0 PYTHONPATH=./ python scripts/demo.py --config configs/inference/t2v_toonyou.yaml
```
#### 3.3 Image to Video with 125-Frame Model
Similar to 3.1, section 3.2 can also utilize this model.
```
CUDA_VISIBLE_DEVICES=0 PYTHONPATH=./ python scripts/demo.py --config configs/inference/i2v_125_frames.yaml
```
#### 3.4 Video Extending
You can expand your 61 frames of video to 125 frames by increasing the latent space from 16 to 32.
```
CUDA_VISIBLE_DEVICES=0 PYTHONPATH=./ python scripts/demo.py --config configs/inference/video_extending.yaml
```
#### 3.5 Video Backtracking
You can downscale your 61 frames of video to 125 frames by adjusting the latent space from 16 to 32.
```
CUDA_VISIBLE_DEVICES=0 PYTHONPATH=./ python scripts/demo.py --config configs/inference/video_backtracking.yaml
```


## Reference
- Animatediff: https://github.com/guoyww/AnimateDiff
- CV-VAE: https://github.com/AILab-CVC/CV-VAE
- Res-Adapter: https://github.com/bytedance/res-adapter
- Long-CLIP: https://github.com/beichenzbc/Long-CLIP


## We Are Hiring
We are seeking academic interns in the AIGC field. If interested, please send your resume to [maao@360.cn](mailto:maao@360.cn).


## BibTeX
```
@misc{feng2024fancyvideodynamicconsistentvideo,
        title={FancyVideo: Towards Dynamic and Consistent Video Generation via Cross-frame Textual Guidance}, 
        author={Jiasong Feng and Ao Ma and Jing Wang and Bo Cheng and Xiaodan Liang and Dawei Leng and Yuhui Yin},
        year={2024},
        eprint={2408.08189},
        archivePrefix={arXiv},
        primaryClass={cs.CV},
        url={https://arxiv.org/abs/2408.08189}, 
}
```


## License
This project is licensed under the [Apache License (Version 2.0)](https://github.com/modelscope/modelscope/blob/master/LICENSE).
