import os
from PIL import Image

def compress_image(image_path, output_path, target_size_kb=30, quality_step=5):
    img = Image.open(image_path)
    
    # Resize image if necessary (optional: adjust dimensions to reduce file size)
    max_dimension = 800  # Resize image to a max of 800px on the longest side, can be adjusted
    img.thumbnail((max_dimension, max_dimension), Image.Resampling.LANCZOS)

    # Save with decreasing quality until target size is met
    quality = 85
    while quality > 10:  # Don't lower quality too much to avoid heavy degradation
        img.save(output_path, optimize=True, quality=quality)
        file_size_kb = os.path.getsize(output_path) / 1024  # Get size in KB
        
        if file_size_kb <= target_size_kb:
            print(f"Image saved at {file_size_kb:.2f} KB with quality {quality}")
            break
        quality -= quality_step

def optimize_images_in_folder(folder_path):
    # Create a subfolder named "compressed" inside the folder
    compressed_folder = os.path.join(folder_path, "compressed")
    if not os.path.exists(compressed_folder):
        os.makedirs(compressed_folder)
    
    # Loop through all files in the folder
    for filename in os.listdir(folder_path):
        file_path = os.path.join(folder_path, filename)
        
        # Check if the file is an image (by extension)
        if filename.lower().endswith(('.png', '.jpg', '.jpeg')):
            try:
                # Define compressed image path
                compressed_image_path = os.path.join(compressed_folder, filename)
                
                # Compress the image to target 20-30KB
                compress_image(file_path, compressed_image_path, target_size_kb=30)
                
            except Exception as e:
                print(f"Could not process {filename}: {e}")

if __name__ == "__main__":
    # Specify the folder path where the images are located
    folder_path = './sign-talk/assets/images/categories/numbers/'
    optimize_images_in_folder(folder_path)
