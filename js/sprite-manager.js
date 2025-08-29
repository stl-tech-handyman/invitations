// Sprite Management System
// Handles dynamic sprite loading, positioning, and persistence

class SpriteManager {
  constructor() {
    this.sprites = new Map(); // Store sprite instances with positions
    this.spriteDefinitions = new Map(); // Store loaded SVG definitions
    this.config = {
      defaultDensity: 15,
      defaultScale: 100,
      defaultAnimation: 'gentle',
      positionBounds: { x: { min: 100, max: 800 }, y: { min: 100, max: 900 } }
    };
    this.init();
  }

  init() {
    console.log('🎭 Initializing Sprite Manager...');
    this.loadSpriteDefinitions();
    this.setupEventListeners();
  }

  // Load sprite definitions from external SVG files
  async loadSpriteDefinitions() {
    try {
      // Load from elements-config.js if available
      if (window.ELEMENTS_CONFIG && window.ELEMENTS_CONFIG.decorations) {
        await this.loadFromElementsConfig();
      }
      
      // Load from decorations folder
      await this.loadFromDecorationsFolder();
      
      console.log('✅ Sprite definitions loaded:', this.spriteDefinitions.size);
    } catch (error) {
      console.error('❌ Failed to load sprite definitions:', error);
    }
  }

  async loadFromElementsConfig() {
    const decorations = window.ELEMENTS_CONFIG.decorations;
    
    for (const [key, config] of Object.entries(decorations)) {
      try {
        const svgContent = await this.fetchSVGFile(`elements/decorations/${config.file}`);
        if (svgContent) {
          this.spriteDefinitions.set(key, {
            ...config,
            svgContent,
            id: key
          });
        }
      } catch (error) {
        console.warn(`⚠️ Failed to load decoration ${key}:`, error);
      }
    }
  }

  async loadFromDecorationsFolder() {
    // Try to load common decoration files
    const commonDecorations = [
      'balloons', 'confetti', 'cake', 'gifts', 'candles', 'stars', 'flowers',
      'hearts', 'ribbons', 'clouds', 'leaves', 'butterflies', 'geometric-shapes'
    ];

    for (const name of commonDecorations) {
      try {
        const svgContent = await this.fetchSVGFile(`elements/decorations/${name}.svg`);
        if (svgContent) {
          this.spriteDefinitions.set(name, {
            name: this.capitalizeFirst(name),
            file: `${name}.svg`,
            category: this.categorizeDecoration(name),
            tags: [name],
            defaultOpacity: 80,
            defaultScale: 1.0,
            defaultRotation: 0,
            svgContent,
            id: name
          });
        }
      } catch (error) {
        // Silently skip if file doesn't exist
      }
    }
  }

  async fetchSVGFile(path) {
    try {
      const response = await fetch(path);
      if (response.ok) {
        return await response.text();
      }
    } catch (error) {
      // File doesn't exist or can't be loaded
    }
    return null;
  }

  categorizeDecoration(name) {
    if (['balloons', 'confetti', 'cake', 'gifts', 'candles'].includes(name)) {
      return 'celebration';
    } else if (['stars', 'clouds', 'leaves', 'butterflies'].includes(name)) {
      return 'nature';
    } else if (['geometric-shapes', 'dots', 'lines', 'triangles'].includes(name)) {
      return 'geometric';
    } else {
      return 'decorative';
    }
  }

  capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).replace(/-/g, ' ');
  }

  // Generate sprites with random positioning
  generateRandomSprites(theme, density, scale, animation) {
    this.clearSprites();
    
    const spriteIds = theme.sprites || [];
    const palette = theme.palette || ['#4a90e2', '#f39c12', '#e74c3c'];
    
    for (let i = 0; i < density; i++) {
      const spriteId = spriteIds[i % spriteIds.length];
      const spriteDef = this.spriteDefinitions.get(spriteId);
      
      if (spriteDef) {
        const position = this.generateRandomPosition();
        const sprite = this.createSprite(spriteDef, position, scale, animation, palette[i % palette.length]);
        this.sprites.set(`sprite_${i}`, sprite);
      }
    }
    
    this.renderSprites();
    console.log(`🎨 Generated ${this.sprites.size} random sprites`);
  }

  // Generate sprites with specific positions (from JSON)
  generateSpritesFromPositions(theme, spriteData, scale, animation) {
    this.clearSprites();
    
    if (!spriteData || !Array.isArray(spriteData)) {
      console.warn('⚠️ No sprite data provided, using random positions');
      this.generateRandomSprites(theme, this.config.defaultDensity, scale, animation);
      return;
    }
    
    const palette = theme.palette || ['#4a90e2', '#f39c12', '#e74c3c'];
    
    spriteData.forEach((data, index) => {
      const spriteDef = this.spriteDefinitions.get(data.id || data.type);
      
      if (spriteDef) {
        const position = {
          x: data.x || this.generateRandomPosition().x,
          y: data.y || this.generateRandomPosition().y
        };
        
        const sprite = this.createSprite(
          spriteDef, 
          position, 
          scale, 
          animation, 
          data.color || palette[index % palette.length],
          data.rotation || 0,
          data.opacity || 80
        );
        
        this.sprites.set(`sprite_${index}`, sprite);
      }
    });
    
    this.renderSprites();
    console.log(`🎨 Generated ${this.sprites.size} sprites from positions`);
  }

  generateRandomPosition() {
    const bounds = this.config.positionBounds;
    return {
      x: Math.floor(Math.random() * (bounds.x.max - bounds.x.min)) + bounds.x.min,
      y: Math.floor(Math.random() * (bounds.y.max - bounds.y.min)) + bounds.y.min
    };
  }

  createSprite(definition, position, scale, animation, color, rotation = 0, opacity = 80) {
    const scaleVariation = 0.7 + Math.random() * 0.6; // 0.7-1.3
    const finalScale = (definition.defaultScale || 1) * scaleVariation * (scale / 100);
    const finalRotation = rotation + (Math.random() * 40 - 20); // Add some randomness
    const finalOpacity = (opacity / 100) * (0.8 + Math.random() * 0.4); // 0.8-1.2
    
    // Calculate animation duration
    let duration = 0;
    if (animation === 'lively') {
      duration = 4 + Math.random() * 3;
    } else if (animation === 'gentle') {
      duration = 8 + Math.random() * 5;
    }
    
    const animStyle = duration ? `animation: floaty ${duration}s ease-in-out ${Math.random() * 2}s infinite;` : '';
    
    return {
      definition,
      position,
      scale: finalScale,
      rotation: finalRotation,
      opacity: finalOpacity,
      color,
      animation: animStyle,
      id: `sprite_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
  }

  renderSprites() {
    const spritesContainer = document.getElementById('sprites');
    if (!spritesContainer) {
      console.error('❌ Sprites container not found');
      return;
    }
    
    spritesContainer.innerHTML = '';
    
    this.sprites.forEach((sprite, key) => {
      const spriteElement = this.createSpriteElement(sprite);
      spritesContainer.appendChild(spriteElement);
    });
  }

  createSpriteElement(sprite) {
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('class', 'sprite');
    g.setAttribute('data-sprite-id', sprite.id);
    
    // Apply transformations
    const transform = `translate(${sprite.position.x} ${sprite.position.y}) rotate(${sprite.rotation}) scale(${sprite.scale})`;
    g.setAttribute('transform', transform);
    
    // Apply styles
    const style = `color: ${sprite.color}; opacity: ${sprite.opacity}; ${sprite.animation}`;
    g.setAttribute('style', style);
    
    // Create SVG use element or embed SVG content
    if (sprite.definition.svgContent) {
      // Parse and embed SVG content
      const parser = new DOMParser();
      const svgDoc = parser.parseFromString(sprite.definition.svgContent, 'image/svg+xml');
      const svgElement = svgDoc.documentElement;
      
      // Clone the SVG content
      const clonedSvg = svgElement.cloneNode(true);
      clonedSvg.setAttribute('fill', 'currentColor');
      g.appendChild(clonedSvg);
    } else {
      // Fallback to use element
      const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
      use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `#${sprite.definition.id}`);
      g.appendChild(use);
    }
    
    return g;
  }

  clearSprites() {
    this.sprites.clear();
    const spritesContainer = document.getElementById('sprites');
    if (spritesContainer) {
      spritesContainer.innerHTML = '';
    }
  }

  // Get current sprite data for JSON export
  getSpriteDataForExport() {
    const spriteData = [];
    
    this.sprites.forEach((sprite, key) => {
      spriteData.push({
        id: sprite.definition.id,
        type: sprite.definition.id,
        x: Math.round(sprite.position.x),
        y: Math.round(sprite.position.y),
        scale: Math.round(sprite.scale * 100),
        rotation: Math.round(sprite.rotation),
        opacity: Math.round(sprite.opacity * 100),
        color: sprite.color,
        animation: sprite.animation ? 'on' : 'off'
      });
    });
    
    return spriteData;
  }

  // Apply sprite data from JSON import
  applySpriteDataFromImport(spriteData, theme, scale, animation) {
    if (spriteData && Array.isArray(spriteData)) {
      this.generateSpritesFromPositions(theme, spriteData, scale, animation);
    } else {
      // Fallback to random generation
      this.generateRandomSprites(theme, this.config.defaultDensity, scale, animation);
    }
  }

  // Add new sprite definition dynamically
  addSpriteDefinition(id, config) {
    this.spriteDefinitions.set(id, {
      ...config,
      id,
      svgContent: config.svgContent || null
    });
    
    console.log(`✅ Added new sprite definition: ${id}`);
  }

  // Remove sprite definition
  removeSpriteDefinition(id) {
    const removed = this.spriteDefinitions.delete(id);
    if (removed) {
      console.log(`🗑️ Removed sprite definition: ${id}`);
    }
    return removed;
  }

  // Get available sprite categories
  getSpriteCategories() {
    const categories = new Set();
    this.spriteDefinitions.forEach(def => {
      if (def.category) {
        categories.add(def.category);
      }
    });
    return Array.from(categories);
  }

  // Get sprites by category
  getSpritesByCategory(category) {
    const sprites = [];
    this.spriteDefinitions.forEach(def => {
      if (def.category === category) {
        sprites.push(def);
      }
    });
    return sprites;
  }

  // Search sprites by tags
  searchSprites(query) {
    const results = [];
    const searchTerm = query.toLowerCase();
    
    this.spriteDefinitions.forEach(def => {
      if (def.name.toLowerCase().includes(searchTerm) ||
          def.tags.some(tag => tag.toLowerCase().includes(searchTerm))) {
        results.push(def);
      }
    });
    
    return results;
  }

  setupEventListeners() {
    // Listen for theme changes
    document.addEventListener('themeChanged', (event) => {
      const { theme, density, scale, animation } = event.detail;
      this.generateRandomSprites(theme, density, scale, animation);
    });
    
    // Listen for density/scale/animation changes
    document.addEventListener('spriteSettingsChanged', (event) => {
      const { density, scale, animation } = event.detail;
      // Regenerate sprites with new settings
      this.regenerateSpritesWithCurrentSettings();
    });
  }

  regenerateSpritesWithCurrentSettings() {
    const density = document.getElementById('density')?.value || this.config.defaultDensity;
    const scale = document.getElementById('scale')?.value || this.config.defaultScale;
    const animation = document.getElementById('sprite-anim')?.value || this.config.defaultAnimation;
    const theme = this.getCurrentTheme();
    
    if (theme) {
      this.generateRandomSprites(theme, density, scale, animation);
    }
  }

  getCurrentTheme() {
    const themeKey = document.getElementById('category')?.value;
    if (themeKey === 'custom') {
      return window.CUSTOM_THEME?.custom;
    } else {
      return window.THEMES?.[themeKey];
    }
  }

  // Utility method to trigger theme change event
  triggerThemeChange(theme, density, scale, animation) {
    document.dispatchEvent(new CustomEvent('themeChanged', {
      detail: { theme, density, scale, animation }
    }));
  }

  // Utility method to trigger sprite settings change event
  triggerSpriteSettingsChange(density, scale, animation) {
    document.dispatchEvent(new CustomEvent('spriteSettingsChanged', {
      detail: { density, scale, animation }
    }));
  }
}

// Export for use in other modules
window.SpriteManager = SpriteManager;

// Auto-initialize if DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.spriteManager = new SpriteManager();
  });
} else {
  window.spriteManager = new SpriteManager();
}
