#gradio-app by ThiagoPorto
#run in the root: python scripts/app.py

import gradio as gr
import subprocess
import os
import yaml
from PIL import Image
import time  # Import time to use for generating unique filenames

def run_inference(prompt, reference_image, cond_motion_score):
    # Check if the prompt is empty
    if not prompt.strip():
        return None, "Error: The prompt cannot be empty."
    
    # Check if a reference image is provided
    if reference_image is None:
        return None, "Error: A reference image must be provided."

    # Save the prompt to the specified file path
    prompt_file_dir = "resources/demos/test_prompts/"
    prompt_file_path = os.path.join(prompt_file_dir, "test_i2v_prompt.txt")

    if not os.path.exists(prompt_file_dir):
        os.makedirs(prompt_file_dir, exist_ok=True)

    with open(prompt_file_path, "w") as f:
        f.write(prompt)

    # Define the path to save the reference image
    reference_image_folder = "resources/demos/reference_images/768x768/"
    if not os.path.exists(reference_image_folder):
        os.makedirs(reference_image_folder, exist_ok=True)
    
    reference_image_path = os.path.join(reference_image_folder, "0.png")
    
    # Convert numpy array to PIL image and save
    reference_image_pil = Image.fromarray(reference_image)
    reference_image_pil.save(reference_image_path)

    # Update the YAML configuration file with the cond_motion_score
    config_file_path = "configs/inference/i2v.yaml"
    with open(config_file_path, "r") as file:
        config = yaml.safe_load(file)
    
    config['inference']['cond_motion_score'] = cond_motion_score

    with open(config_file_path, "w") as file:
        yaml.safe_dump(config, file)

    # Run the inference script
    command = "CUDA_VISIBLE_DEVICES=0 PYTHONPATH=./ python scripts/demo.py --config configs/inference/i2v.yaml"
    subprocess.run(command, shell=True)
    
    # Generate a unique filename using timestamp
    timestamp = time.strftime("%Y%m%d-%H%M%S")
    output_folder = "resources/demos/samples/i2v/realisticVisionV60B1_v51VAE/768x768"
    output_video_path = os.path.join(output_folder, f"example_{timestamp}.mp4")
    
    # Assuming the output video is generated and renamed after running the demo script
    generated_video_path = os.path.join(output_folder, "example_0.mp4")
    
    if os.path.exists(generated_video_path):
        os.rename(generated_video_path, output_video_path)
        return output_video_path, "Video generation successful!"
    else:
        return None, "Failed to generate video."


# Gradio interface
with gr.Blocks() as demo:
    gr.Markdown("""
       <div style="text-align: center; font-size: 32px; font-weight: bold; margin-bottom: 20px;">
           FancyVideo: Towards Dynamic and Consistent Video Generation via Cross-frame Textual Guidance
       </div>
       <div style="text-align: center;">
           <a href="https://github.com/360CVGroup/FancyVideo">Github</a> 
       </div>
       <div style="text-align: center; font-size: 15px; font-weight: bold; color: red; margin-bottom: 20px;">
       </div>
    """)

    output_video = gr.Video(label="Generated Video")
    output_message = gr.Markdown()

    # Input components
    prompt_input = gr.Textbox(label="Prompt")
    reference_image_input = gr.Image(label="Reference Image")
    camera_motion_slider = gr.Slider(minimum=0.0, maximum=3.0, step=0.1, value=2.0, label="Camera Motion (0 = static, 6 = heavy motion)")

    # Define the inputs and outputs for the interface
    inputs = [prompt_input, reference_image_input, camera_motion_slider]
    outputs = [output_video, output_message]

    gr.Interface(
        fn=run_inference,
        inputs=inputs,
        outputs=outputs,
        allow_flagging="never"  # Disable the flag button
    )

demo.launch(server_name="0.0.0.0", server_port=7080, share=False) 

