# Background Generator for Event Cards

This tool generates 160 unique background images for your event card generator project.

## Features

- **11 Different Background Styles**: Including gradients, geometric patterns, organic shapes, stripes, dots, waves, checkerboards, spirals, noise textures, and marble textures
- **8 Color Palettes**: Warm colors, cool colors, earth tones, pastels, vibrant, monochrome, sunset, and ocean themes
- **Multiple Formats**: Outputs in PNG, JPEG, and WebP formats
- **Random Variations**: Each background is unique with random colors, patterns, and effects
- **High Quality**: 800x600 resolution backgrounds suitable for event cards

## Requirements

- Python 3.6 or higher
- Pillow (PIL) library

## Quick Start

### Windows Users
1. Double-click `generate_backgrounds.bat`
2. The script will automatically install dependencies and generate backgrounds

### Unix/Linux/Mac Users
1. Make the script executable: `chmod +x generate_backgrounds.sh`
2. Run: `./generate_backgrounds.sh`

### Manual Installation
1. Install Python dependencies: `pip install -r requirements.txt`
2. Run the generator: `python generate_backgrounds.py`

## Output

The script will create 160 background images in the `backgrounds/` folder with names like:
- `bg-001.png`
- `bg-002.jpg`
- `bg-003.webp`
- ... and so on up to `bg-160`

## Background Styles

1. **Gradient**: Linear color transitions
2. **Radial Gradient**: Circular color transitions from center
3. **Geometric**: Random geometric shapes (circles, rectangles)
4. **Organic**: Flowing, organic shapes
5. **Stripes**: Vertical or horizontal stripe patterns
6. **Dots**: Grid-based dot patterns
7. **Waves**: Sinusoidal wave patterns
8. **Checkerboard**: Alternating square patterns
9. **Spiral**: Spiral line patterns
10. **Noise**: Textured noise overlays
11. **Marble**: Marble-like vein patterns

## Color Palettes

- **Warm**: Reds, oranges, yellows
- **Cool**: Blues, purples, cyans
- **Earth**: Browns, greens, natural tones
- **Pastels**: Soft, muted colors
- **Vibrant**: Bright, saturated colors
- **Monochrome**: Grayscale variations
- **Sunset**: Warm sunset colors
- **Ocean**: Blue-green ocean tones

## Customization

You can modify the script to:
- Change image dimensions (currently 800x600)
- Add new background styles
- Create custom color palettes
- Adjust pattern densities
- Modify output formats

## Troubleshooting

- **Pillow not found**: Run `pip install Pillow`
- **Permission errors**: Make sure you have write access to the backgrounds folder
- **Memory issues**: The script processes one image at a time to minimize memory usage

## Performance

- Generation time: Approximately 2-5 minutes depending on your system
- File sizes: PNG (100-300KB), JPEG (50-200KB), WebP (30-150KB)
- Total disk space: Approximately 20-50MB for all 160 backgrounds

## Integration

These backgrounds are designed to work with your existing event card generator. They provide a wide variety of styles and colors to give users many options for their event invitations.
