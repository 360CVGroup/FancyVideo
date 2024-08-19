# FancyVideo

This repository is the official implementation of [FancyVideo](https://360cvgroup.github.io/FancyVideo/).

**[FancyVideo: Towards Dynamic and Consistent Video Generation via Cross-frame Textual Guidance](https://arxiv.org/abs/2408.08189)** 
</br>
Jiasong Feng*, Ao Ma*, Jing Wang*, Bo Cheng, Xiaodan Liang, Dawei Leng†, Yuhui Yin(*Equal Contribution, ✝Corresponding Author)
</br>
[![arXiv](https://img.shields.io/badge/arXiv-2307.04725-b31b1b.svg)](https://arxiv.org/abs/2408.08189)
[![Project Page](https://img.shields.io/badge/Project-Website-green)](https://360cvgroup.github.io/FancyVideo/)

Our code builds upon [AnimateDiff](https://github.com/guoyww/AnimateDiff), and we also incorporate insights from [CV-VAE](https://github.com/AILab-CVC/CV-VAE), [Res-Adapter](https://github.com/bytedance/res-adapter), and [Long-CLIP](https://github.com/beichenzbc/Long-CLIP) to enhance our project. We appreciate the open-source contributions of these works.


## 🔥 News
- **[2024/08/19]** We initialized this github repository and released the inference code and 61-frame model.
- **[2024/08/15]** We released the paper of [FancyVideo](https://arxiv.org/abs/2408.08189).


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
mkdir resources/models

# fancyvideo-ckpts
wget -O resources/models/fancyvideo_ckpts.zip "https://drive.google.com/uc?export=download&id=1m4UqKVQ3POI5ei1A9yppHX_H--8PKMtn"
unzip resources/models/fancyvideo_ckpts.zip

# cv-vae
wget -O resources/models/CV-VAE.zip "https://drive.google.com/uc?export=download&id=1Xal1fxVbVWf0jjiPK5gb_1-lOh0w8G_r"
unzip resources/models/CV-VAE.zip

# res-adapter
wget -O resources/models/res-adapter.zip "https://drive.google.com/uc?export=download&id=18EawVd1HJtrQds703sLqoYZtLfbUgLm4"
unzip resources/models/res-adapter.zip

# longclip
wget -O resources/models/LongCLIP-L.zip "https://drive.google.com/uc?export=download&id=1-DDPcbAbmGZJPHsdl1PgFMVtxmOnUtc7"
unzip resources/models/LongCLIP-L.zip

# sdv1.5-base-models(you can also donwload from civitai.com)
wget -O resources/models/sd_v1-5_base_models.zip "https://drive.google.com/uc?export=download&id=1pxrAVT8OQKyyyW2WgImqEQrectbIpkBH"
unzip resources/models/sd_v1-5_base_models.zip

# stable-diffusion-v1-5
git lfs install
git clone https://huggingface.co/runwayml/stable-diffusion-v1-5 resources/models
```
After download models, your resources folder is like:
```
📦 resouces/
├── 📂 models/
│   └── 📂 fancyvideo_ckpts/
│   └── 📂 CV-VAE/
│   └── 📂 res-adapter/
│   └── 📂 LongCLIP-L/
│   └── 📂 sd_v1-5_base_models/
│   └── 📂 stable-diffusion-v1-5/
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


## Reference
- Animatediff: https://github.com/guoyww/AnimateDiff
- CV-VAE: https://github.com/AILab-CVC/CV-VAE
- Animatediff: https://github.com/bytedance/res-adapter
- Animatediff: https://github.com/beichenzbc/Long-CLIP


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
