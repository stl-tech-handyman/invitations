# Elements System

This folder contains the elements system for the invitation generator, which provides backgrounds, decorations, and overlays that can be randomly loaded and used in slideshow mode.

## Structure

```
elements/
├── backgrounds/          # Background images (SVG)
├── decorations/          # Decorative elements (SVG)
├── overlays/            # Overlay elements (future)
├── elements-config.js   # Configuration and metadata
├── slideshow-manager.js # Slideshow functionality
├── random-loader.js     # Random element loading
└── README.md           # This file
```

## Backgrounds

### Available Backgrounds

- **beach.svg** - Beach scene with sky, ocean, sand, sun, clouds, and waves
- **forest.svg** - Forest scene with trees, sky, and sun rays
- **abstract.svg** - Abstract geometric design with gradients and shapes

### Background Properties

Each background has the following properties:
- `name` - Display name
- `file` - SVG filename
- `category` - Category (nature, modern, etc.)
- `tags` - Searchable tags
- `defaultOpacity` - Default opacity (0-100)
- `defaultBlur` - Default blur amount (0-12px)
- `defaultBrightness` - Default brightness (50-150%)
- `defaultVignette` - Default vignette effect (0-60px)

## Decorations

### Available Decorations

- **balloons.svg** - Colorful balloons with strings
- **flowers.svg** - Various flower types with stems
- **stars.svg** - Different sized stars with glow effects

### Decoration Properties

Each decoration has the following properties:
- `name` - Display name
- `file` - SVG filename
- `category` - Category (celebration, nature, etc.)
- `tags` - Searchable tags
- `defaultOpacity` - Default opacity (0-100)
- `defaultScale` - Default scale factor
- `defaultRotation` - Default rotation (degrees)
- `positions` - Array of suggested positions

## Usage

### Random Loading

Click the **🎲 Random Elements** button to randomly load:
- 1 random background
- 1-2 random decorations
- Random background mode (image, img+tex, grad+tex)
- Random settings for opacity, blur, brightness, vignette
- Random texture settings if applicable

### Auto-Random Mode

Click the **🔄 Auto Random** button to automatically change elements every 10 seconds. Click again to stop.

### Slideshow Mode

Click the **🎬 Slideshow** button to enter slideshow mode, which showcases:
- Pure image backgrounds
- Image + gradient combinations
- Image + texture combinations
- Gradient + texture combinations
- Complex multi-layer combinations

## Slideshow Controls

- **⏮️ Previous** - Go to previous slide
- **▶️ Play** / **⏸️ Pause** - Auto-play slideshow
- **⏭️ Next** - Go to next slide
- **❌ Close** - Exit slideshow mode

### Keyboard Shortcuts

- **Left Arrow** - Previous slide
- **Right Arrow** - Next slide
- **Space** - Play/Pause
- **Escape** - Close slideshow

## Adding New Elements

### Adding a New Background

1. Create an SVG file in `backgrounds/` folder
2. Add configuration to `elements-config.js`:

```javascript
backgrounds: {
  newBackground: {
    name: "New Background Name",
    file: "new-background.svg",
    category: "category",
    tags: ["tag1", "tag2"],
    defaultOpacity: 100,
    defaultBlur: 0,
    defaultBrightness: 100,
    defaultVignette: 20
  }
}
```

### Adding a New Decoration

1. Create an SVG file in `decorations/` folder
2. Add configuration to `elements-config.js`:

```javascript
decorations: {
  newDecoration: {
    name: "New Decoration Name",
    file: "new-decoration.svg",
    category: "category",
    tags: ["tag1", "tag2"],
    defaultOpacity: 80,
    defaultScale: 1.0,
    defaultRotation: 0,
    positions: [
      { x: 100, y: 200 },
      { x: 700, y: 150 }
    ]
  }
}
```

3. Add SVG symbol definition to `home.html`:

```html
<g id="newDecoration" fill="currentColor">
  <!-- SVG content -->
</g>
```

## Technical Details

### File Loading

Elements are loaded asynchronously when the system initializes:
- Background images are preloaded for instant switching
- Decoration images are loaded on demand
- SVG symbols are embedded in the main HTML for performance

### Randomization Algorithm

The random element loader uses:
- Uniform distribution for element selection
- Bounded random values for settings (e.g., opacity 60-100%)
- Collision detection for decoration positioning
- Scale and rotation variations for visual interest

### Performance Considerations

- SVG files are optimized for size and rendering
- Elements use `currentColor` for easy theming
- Background images are cached after first load
- Decoration positioning uses efficient DOM manipulation

## Troubleshooting

### Elements Not Loading

1. Check browser console for errors
2. Verify file paths are correct
3. Ensure SVG files are valid
4. Check that elements-config.js is loaded

### Slideshow Not Working

1. Verify slideshow-manager.js is loaded
2. Check that SLIDESHOW_COMBINATIONS array is defined
3. Ensure background and decoration images exist
4. Check browser console for JavaScript errors

### Random Elements Not Working

1. Verify random-loader.js is loaded
2. Check that ELEMENTS_CONFIG is available
3. Ensure SVG symbols are defined in HTML
4. Verify event listeners are properly attached

## Future Enhancements

- **Overlay Elements** - Frames, borders, and masks
- **Animation Support** - Animated decorations and backgrounds
- **Custom Element Upload** - User-uploaded elements
- **Element Categories** - Better organization and filtering
- **Preset Collections** - Curated element combinations
- **Export/Import** - Save and share element configurations

