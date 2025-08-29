# Sprite Management System

This document explains how the enhanced sprite management system works in the Event Card Generator.

## 🎯 Overview

The sprite management system provides:
- **Dynamic sprite loading** from SVG files in the `elements/decorations/` folder
- **Position persistence** - sprites remember their exact positions when saved/loaded
- **JSON integration** - sprite positions are included in export/import operations
- **Visual browser interface** - browse and manage available sprites
- **Random positioning** - fallback to random positions when no saved positions exist

## 🏗️ Architecture

### Core Components

1. **`SpriteManager`** (`js/sprite-manager.js`) - Main sprite management class
2. **`SpriteBrowser`** (`js/sprite-browser.js`) - Visual interface for browsing sprites
3. **Integration with main app** - Seamless integration with existing theme system

### File Structure

```
js/
├── sprite-manager.js      # Core sprite management logic
├── sprite-browser.js      # Visual sprite browser interface
└── SPRITE_SYSTEM_README.md # This documentation

elements/
├── decorations/           # SVG sprite files
├── elements-config.js     # Sprite configuration (if available)
└── random-loader.js       # Legacy random loading system
```

## 🚀 How It Works

### 1. Sprite Loading

The system automatically loads sprites from multiple sources:

```javascript
// From elements-config.js (if available)
if (window.ELEMENTS_CONFIG && window.ELEMENTS_CONFIG.decorations) {
  await this.loadFromElementsConfig();
}

// From decorations folder
await this.loadFromDecorationsFolder();
```

**Supported sprite sources:**
- `elements/elements-config.js` - Structured configuration with metadata
- `elements/decorations/*.svg` - Direct SVG files
- Built-in theme sprites (fallback)

### 2. Position Management

#### Random Positioning (Default)
```javascript
generateRandomSprites(theme, density, scale, animation) {
  // Creates sprites with random positions within bounds
  const position = this.generateRandomPosition();
  // x: 100-800, y: 100-900
}
```

#### Specific Positioning (from JSON)
```javascript
generateSpritesFromPositions(theme, spriteData, scale, animation) {
  // Creates sprites at exact saved positions
  const position = {
    x: data.x || this.generateRandomPosition().x,
    y: data.y || this.generateRandomPosition().y
  };
}
```

### 3. JSON Integration

#### Export (includes sprite positions)
```json
{
  "sprites": {
    "density": 15,
    "scale": 100,
    "animation": "gentle",
    "positions": [
      {
        "id": "balloons",
        "type": "balloons",
        "x": 245,
        "y": 156,
        "scale": 95,
        "rotation": 12,
        "opacity": 80,
        "color": "#ff6b6b",
        "animation": "on"
      }
    ]
  }
}
```

#### Import (restores exact positions)
```javascript
if (settings.sprites.positions && window.spriteManager) {
  window.spriteManager.applySpriteDataFromImport(
    settings.sprites.positions,
    theme,
    settings.sprites.scale || 100,
    settings.sprites.animation || 'gentle'
  );
}
```

## 🎨 Adding New Sprites

### Method 1: Add SVG File to Decorations Folder

1. **Create SVG file** in `elements/decorations/`
2. **File naming**: Use descriptive names like `balloons.svg`, `confetti.svg`
3. **Auto-discovery**: System automatically loads and categorizes the sprite

Example SVG structure:
```svg
<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <g fill="currentColor">
    <ellipse cx="24" cy="24" rx="20" ry="24"/>
    <path d="M24 48c0 12-8 18-8 22" stroke="currentColor" stroke-width="3" fill="none"/>
  </g>
</svg>
```

### Method 2: Add to elements-config.js

```javascript
const ELEMENTS_CONFIG = {
  decorations: {
    newSprite: {
      name: "New Sprite",
      file: "new-sprite.svg",
      category: "celebration",
      tags: ["new", "celebration", "fun"],
      defaultOpacity: 80,
      defaultScale: 1.0,
      defaultRotation: 0,
      positions: [
        { x: 200, y: 300 },
        { x: 600, y: 250 }
      ]
    }
  }
};
```

### Method 3: Add Programmatically

```javascript
if (window.spriteManager) {
  window.spriteManager.addSpriteDefinition('custom-sprite', {
    name: "Custom Sprite",
    category: "custom",
    tags: ["custom"],
    svgContent: '<svg>...</svg>',
    defaultOpacity: 90,
    defaultScale: 1.2
  });
}
```

## 🔍 Using the Sprite Browser

### Opening the Browser
1. Click the **"🎨 Browse & Manage Sprites"** button in the right panel
2. Browser opens on the right side of the screen

### Features
- **Search**: Type to find sprites by name or tags
- **Categories**: Filter by celebration, nature, geometric, etc.
- **Preview**: See sprite icons and metadata
- **Add to Theme**: Select a sprite and add it to current theme
- **Randomize**: Regenerate sprites with new random positions

### Browser Interface
```
┌─────────────────────────────────────┐
│ 🎨 Sprite Browser              ×   │
├─────────────────────────────────────┤
│ [Search sprites...]                │
│ [All Categories ▼]                 │
├─────────────────────────────────────┤
│ 🎈    🎊    🎂                     │
│ Balloons Confetti Cake             │
│ celebration celebration celebration │
├─────────────────────────────────────┤
│ [Add Selected] [Randomize]         │
└─────────────────────────────────────┘
```

## ⚙️ Configuration

### Sprite Manager Settings
```javascript
this.config = {
  defaultDensity: 15,           // Default number of sprites
  defaultScale: 100,            // Default scale percentage
  defaultAnimation: 'gentle',    // Default animation mode
  positionBounds: {              // Random position boundaries
    x: { min: 100, max: 800 },
    y: { min: 100, max: 900 }
  }
};
```

### Animation Modes
- **Off**: No animation
- **Gentle**: Slow, subtle floating (8-13 seconds)
- **Lively**: Faster, more dynamic floating (4-7 seconds)

## 🔧 API Reference

### SpriteManager Methods

#### Core Methods
```javascript
// Generate sprites with random positions
generateRandomSprites(theme, density, scale, animation)

// Generate sprites with specific positions
generateSpritesFromPositions(theme, spriteData, scale, animation)

// Get sprite data for JSON export
getSpriteDataForExport()

// Apply sprite data from JSON import
applySpriteDataFromImport(spriteData, theme, scale, animation)
```

#### Management Methods
```javascript
// Add new sprite definition
addSpriteDefinition(id, config)

// Remove sprite definition
removeSpriteDefinition(id)

// Get available categories
getSpriteCategories()

// Get sprites by category
getSpritesByCategory(category)

// Search sprites by query
searchSprites(query)
```

### SpriteBrowser Methods
```javascript
// Show the browser interface
show()

// Hide the browser interface
hide()

// Populate sprites display
populateSprites()
```

## 🎯 Integration Points

### With Main App
```javascript
// In updateSprites() function
if (window.spriteManager) {
  const density = +el('density').value;
  const scale = +el('scale').value;
  const animation = el('sprite-anim').value;
  
  window.spriteManager.generateRandomSprites(currentTheme, density, scale, animation);
} else {
  // Fallback to old system
  drawSprites(currentTheme);
}
```

### With Export/Import System
```javascript
// Export includes sprite positions
sprites: {
  density: el('density').value,
  scale: el('scale').value,
  animation: el('sprite-anim').value,
  positions: window.spriteManager ? window.spriteManager.getSpriteDataForExport() : []
}

// Import restores sprite positions
if (settings.sprites.positions && window.spriteManager) {
  window.spriteManager.applySpriteDataFromImport(
    settings.sprites.positions,
    theme,
    settings.sprites.scale || 100,
    settings.sprites.animation || 'gentle'
  );
}
```

## 🚨 Troubleshooting

### Common Issues

**Sprite Browser not opening:**
- Check if `sprite-browser.js` is loaded
- Verify `window.spriteBrowser` exists
- Check browser console for errors

**Sprites not loading:**
- Verify SVG files exist in `elements/decorations/`
- Check file permissions and paths
- Look for console errors in sprite loading

**Positions not saving:**
- Ensure `spriteManager` is available
- Check JSON export includes `positions` array
- Verify sprite data structure

**Performance issues:**
- Reduce sprite density
- Use simpler SVG files
- Disable animations for large numbers of sprites

### Debug Commands
```javascript
// Check sprite manager status
console.log('Sprite Manager:', window.spriteManager);

// Check loaded sprites
console.log('Loaded sprites:', window.spriteManager?.spriteDefinitions.size);

// Check current sprites
console.log('Current sprites:', window.spriteManager?.sprites.size);

// Test sprite generation
window.spriteManager?.generateRandomSprites(theme, 10, 100, 'gentle');
```

## 🔮 Future Enhancements

### Planned Features
- **Drag & Drop positioning** - Manually position sprites
- **Sprite libraries** - Import/export sprite collections
- **Advanced animations** - Custom animation paths
- **Sprite effects** - Shadows, glows, filters
- **Performance optimization** - Virtual scrolling for large sprite sets

### Extension Points
- **Custom sprite loaders** - Load from APIs, databases
- **Sprite validation** - Quality checks for SVG files
- **Theme templates** - Pre-configured sprite arrangements
- **Collaboration** - Share sprite arrangements between users

## 📚 Examples

### Complete Sprite Definition
```javascript
const spriteConfig = {
  name: "Birthday Cake",
  file: "birthday-cake.svg",
  category: "celebration",
  tags: ["birthday", "cake", "celebration", "sweet"],
  defaultOpacity: 85,
  defaultScale: 1.1,
  defaultRotation: 0,
  positions: [
    { x: 300, y: 400, scale: 100, rotation: 0, opacity: 85 },
    { x: 600, y: 350, scale: 90, rotation: 15, opacity: 80 }
  ]
};
```

### Custom Sprite Loading
```javascript
// Load custom SVG content
const customSVG = `<svg viewBox="0 0 48 48">
  <circle cx="24" cy="24" r="20" fill="currentColor"/>
</svg>`;

window.spriteManager.addSpriteDefinition('custom-circle', {
  name: "Custom Circle",
  category: "geometric",
  tags: ["circle", "custom"],
  svgContent: customSVG,
  defaultOpacity: 90,
  defaultScale: 1.0
});
```

---

**Note**: This system is designed to be backward compatible. Existing themes and functionality will continue to work while gaining access to the new sprite management features.
