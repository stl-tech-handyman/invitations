#!/usr/bin/env python3
"""
Generate 160 background images for event cards
Uses PIL/Pillow for image generation
"""

import os
import random
import math
from PIL import Image, ImageDraw, ImageFilter, ImageEnhance

# Ensure backgrounds directory exists
backgrounds_dir = "backgrounds"
if not os.path.exists(backgrounds_dir):
    os.makedirs(backgrounds_dir)

def create_gradient_background(width, height, colors):
    """Create a gradient background"""
    img = Image.new('RGB', (width, height))
    draw = ImageDraw.Draw(img)
    
    # Create gradient
    for y in range(height):
        r = int(colors[0][0] + (colors[1][0] - colors[0][0]) * y / height)
        g = int(colors[0][1] + (colors[1][1] - colors[0][1]) * y / height)
        b = int(colors[0][2] + (colors[1][2] - colors[0][2]) * y / height)
        draw.line([(0, y), (width, y)], fill=(r, g, b))
    
    return img

def create_radial_gradient(width, height, colors):
    """Create a radial gradient background"""
    img = Image.new('RGB', (width, height))
    draw = ImageDraw.Draw(img)
    
    center_x, center_y = width // 2, height // 2
    max_radius = math.sqrt(center_x**2 + center_y**2)
    
    for y in range(height):
        for x in range(width):
            distance = math.sqrt((x - center_x)**2 + (y - center_y)**2)
            ratio = min(distance / max_radius, 1.0)
            
            if len(colors) == 2:
                r = int(colors[0][0] + (colors[1][0] - colors[0][0]) * ratio)
                g = int(colors[0][1] + (colors[1][1] - colors[0][1]) * ratio)
                b = int(colors[0][2] + (colors[1][2] - colors[0][2]) * ratio)
            else:
                # Interpolate between three colors
                if ratio < 0.5:
                    ratio = ratio * 2
                    r = int(colors[0][0] + (colors[1][0] - colors[0][0]) * ratio)
                    g = int(colors[0][1] + (colors[1][1] - colors[0][1]) * ratio)
                    b = int(colors[0][2] + (colors[1][2] - colors[0][2]) * ratio)
                else:
                    ratio = (ratio - 0.5) * 2
                    r = int(colors[1][0] + (colors[2][0] - colors[1][0]) * ratio)
                    g = int(colors[1][1] + (colors[2][1] - colors[1][1]) * ratio)
                    b = int(colors[1][2] + (colors[2][2] - colors[1][2]) * ratio)
            
            draw.point((x, y), fill=(r, g, b))
    
    return img

def create_geometric_pattern(width, height, colors):
    """Create a geometric pattern background"""
    img = Image.new('RGB', (width, height))
    draw = ImageDraw.Draw(img)
    
    # Base color
    base_color = random.choice(colors)
    draw.rectangle([0, 0, width, height], fill=base_color)
    
    # Add random shapes
    num_shapes = random.randint(10, 25)
    for _ in range(num_shapes):
        color = random.choice(colors)
        x = random.randint(0, width)
        y = random.randint(0, height)
        size = random.randint(20, 100)
        
        if random.random() > 0.5:
            # Circle
            draw.ellipse([x-size, y-size, x+size, y+size], fill=color, outline=None)
        else:
            # Rectangle
            draw.rectangle([x-size, y-size, x+size, y+size], fill=color, outline=None)
    
    return img

def create_organic_shapes(width, height, colors):
    """Create organic, flowing shapes background"""
    img = Image.new('RGB', (width, height))
    draw = ImageDraw.Draw(img)
    
    # Base color
    base_color = random.choice(colors)
    draw.rectangle([0, 0, width, height], fill=base_color)
    
    # Create organic shapes using curves
    for _ in range(random.randint(8, 15)):
        color = random.choice(colors)
        points = []
        
        # Generate random curve points
        for _ in range(random.randint(4, 8)):
            x = random.randint(0, width)
            y = random.randint(0, height)
            points.append((x, y))
        
        if len(points) >= 3:
            # Draw filled polygon
            draw.polygon(points, fill=color, outline=None)
    
    return img

def create_stripe_pattern(width, height, colors):
    """Create a stripe pattern background"""
    img = Image.new('RGB', (width, height))
    draw = ImageDraw.Draw(img)
    
    # Base color
    base_color = random.choice(colors)
    draw.rectangle([0, 0, width, height], fill=base_color)
    
    # Stripe properties
    stripe_width = random.randint(20, 60)
    is_vertical = random.random() > 0.5
    
    if is_vertical:
        for x in range(0, width, stripe_width * 2):
            color = random.choice(colors)
            draw.rectangle([x, 0, x + stripe_width, height], fill=color, outline=None)
    else:
        for y in range(0, height, stripe_width * 2):
            color = random.choice(colors)
            draw.rectangle([0, y, width, y + stripe_width], fill=color, outline=None)
    
    return img

def create_dot_pattern(width, height, colors):
    """Create a dot pattern background"""
    img = Image.new('RGB', (width, height))
    draw = ImageDraw.Draw(img)
    
    # Base color
    base_color = random.choice(colors)
    draw.rectangle([0, 0, width, height], fill=base_color)
    
    # Dot properties
    dot_size = random.randint(4, 12)
    spacing = dot_size * 3
    
    # Draw dots in grid
    for x in range(spacing, width, spacing):
        for y in range(spacing, height, spacing):
            if random.random() > 0.3:  # 70% chance to draw a dot
                color = random.choice(colors)
                draw.ellipse([x-dot_size, y-dot_size, x+dot_size, y+dot_size], 
                           fill=color, outline=None)
    
    return img

def create_wave_pattern(width, height, colors):
    """Create a wave pattern background"""
    img = Image.new('RGB', (width, height))
    draw = ImageDraw.Draw(img)
    
    # Base color
    base_color = random.choice(colors)
    draw.rectangle([0, 0, width, height], fill=base_color)
    
    # Wave properties
    wave_color = random.choice(colors)
    wave_width = random.randint(2, 5)
    
    # Draw multiple wave lines
    for i in range(random.randint(3, 7)):
        points = []
        for x in range(0, width, 5):
            y = height // 2 + math.sin(x * 0.02 + i) * random.randint(30, 80)
            points.append((x, y))
        
        if len(points) > 1:
            draw.line(points, fill=wave_color, width=wave_width)
    
    return img

def create_checkerboard(width, height, colors):
    """Create a checkerboard pattern background"""
    img = Image.new('RGB', (width, height))
    draw = ImageDraw.Draw(img)
    
    square_size = random.randint(20, 60)
    
    for x in range(0, width, square_size):
        for y in range(0, height, square_size):
            color = random.choice(colors)
            draw.rectangle([x, y, x + square_size, y + square_size], 
                         fill=color, outline=None)
    
    return img

def create_spiral_pattern(width, height, colors):
    """Create a spiral pattern background"""
    img = Image.new('RGB', (width, height))
    draw = ImageDraw.Draw(img)
    
    # Base color
    base_color = random.choice(colors)
    draw.rectangle([0, 0, width, height], fill=base_color)
    
    # Spiral properties
    spiral_color = random.choice(colors)
    center_x, center_y = width // 2, height // 2
    
    # Draw spiral
    points = []
    for angle in range(0, 3600, 10):  # 10 degree increments
        radius = angle * 0.5
        x = center_x + math.cos(math.radians(angle)) * radius
        y = center_y + math.sin(math.radians(angle)) * radius
        
        if 0 <= x < width and 0 <= y < height:
            points.append((x, y))
    
    if len(points) > 1:
        draw.line(points, fill=spiral_color, width=3)
    
    return img

def create_noise_texture(width, height, colors):
    """Create a noise texture background"""
    img = Image.new('RGB', (width, height))
    draw = ImageDraw.Draw(img)
    
    # Base color
    base_color = random.choice(colors)
    draw.rectangle([0, 0, width, height], fill=base_color)
    
    # Add noise
    for x in range(0, width, 2):
        for y in range(0, height, 2):
            if random.random() > 0.7:  # 30% chance to add noise
                color = random.choice(colors)
                intensity = random.randint(50, 200)
                draw.point((x, y), fill=(color[0], color[1], color[2], intensity))
    
    return img

def create_marble_texture(width, height, colors):
    """Create a marble-like texture background"""
    img = Image.new('RGB', (width, height))
    draw = ImageDraw.Draw(img)
    
    # Base color
    base_color = random.choice(colors)
    draw.rectangle([0, 0, width, height], fill=base_color)
    
    # Add marble veins
    for _ in range(random.randint(5, 15)):
        color = random.choice(colors)
        start_x = random.randint(0, width)
        start_y = random.randint(0, height)
        
        points = [(start_x, start_y)]
        for _ in range(random.randint(3, 8)):
            x = start_x + random.randint(-50, 50)
            y = start_y + random.randint(-50, 50)
            if 0 <= x < width and 0 <= y < height:
                points.append((x, y))
        
        if len(points) > 1:
            draw.line(points, fill=color, width=random.randint(1, 3))
    
    return img

# Color palettes
color_palettes = [
    # Warm colors
    [(255, 107, 107), (78, 205, 196), (69, 183, 209), (150, 206, 180), (255, 234, 167)],
    # Cool colors
    [(108, 92, 231), (162, 155, 254), (253, 121, 168), (116, 185, 255), (9, 132, 227)],
    # Earth tones
    [(225, 112, 85), (253, 203, 110), (0, 184, 148), (0, 206, 201), (116, 185, 255)],
    # Pastels
    [(168, 230, 207), (220, 237, 193), (255, 211, 182), (255, 182, 193), (255, 203, 110)],
    # Vibrant
    [(255, 217, 61), (255, 107, 107), (255, 142, 142), (108, 92, 231), (162, 155, 254)],
    # Monochrome
    [(45, 52, 54), (52, 73, 94), (74, 85, 104), (99, 110, 114), (116, 125, 136)],
    # Sunset
    [(255, 107, 107), (255, 159, 67), (255, 203, 110), (255, 142, 142), (253, 121, 168)],
    # Ocean
    [(0, 184, 148), (0, 206, 201), (116, 185, 255), (9, 132, 227), (45, 52, 54)]
]

# Background generators
generators = [
    create_gradient_background,
    create_radial_gradient,
    create_geometric_pattern,
    create_organic_shapes,
    create_stripe_pattern,
    create_dot_pattern,
    create_wave_pattern,
    create_checkerboard,
    create_spiral_pattern,
    create_noise_texture,
    create_marble_texture
]

def generate_background(index):
    """Generate a single background image"""
    width, height = 800, 600
    
    # Select random generator and colors
    generator = random.choice(generators)
    colors = random.choice(color_palettes)
    
    # Generate the image
    if generator == create_gradient_background:
        img = generator(width, height, random.sample(colors, 2))
    elif generator == create_radial_gradient:
        img = generator(width, height, random.sample(colors, random.randint(2, 3)))
    else:
        img = generator(width, height, colors)
    
    # Apply some random effects
    if random.random() > 0.5:
        # Random blur
        img = img.filter(ImageFilter.GaussianBlur(radius=random.uniform(0.5, 2.0)))
    
    if random.random() > 0.7:
        # Random brightness adjustment
        enhancer = ImageEnhance.Brightness(img)
        img = enhancer.enhance(random.uniform(0.8, 1.2))
    
    # Save in random format
    formats = ['PNG', 'JPEG', 'WEBP']
    format_choice = random.choice(formats)
    
    if format_choice == 'PNG':
        filename = f"bg-{index:03d}.png"
        img.save(os.path.join(backgrounds_dir, filename), 'PNG')
    elif format_choice == 'JPEG':
        filename = f"bg-{index:03d}.jpg"
        img.save(os.path.join(backgrounds_dir, filename), 'JPEG', quality=random.randint(85, 95))
    else:  # WEBP
        filename = f"bg-{index:03d}.webp"
        img.save(os.path.join(backgrounds_dir, filename), 'WEBP', quality=random.randint(85, 95))
    
    print(f"Generated: {filename}")
    return filename

def main():
    """Main function to generate 160 backgrounds"""
    print("Starting background generation...")
    print(f"Output directory: {os.path.abspath(backgrounds_dir)}")
    
    start_time = time.time()
    
    for i in range(1, 161):
        try:
            generate_background(i)
            if i % 20 == 0:
                print(f"Progress: {i}/160 backgrounds generated")
        except Exception as e:
            print(f"Error generating background {i}: {e}")
    
    end_time = time.time()
    duration = end_time - start_time
    
    print(f"\nBackground generation complete!")
    print(f"Generated 160 backgrounds in {duration:.2f} seconds")
    print(f"Files saved to: {os.path.abspath(backgrounds_dir)}")

if __name__ == "__main__":
    import time
    main()
