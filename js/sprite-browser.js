// Sprite Browser Interface
// Provides a visual interface for browsing and managing available sprites

class SpriteBrowser {
  constructor() {
    this.isVisible = false;
    this.currentCategory = 'all';
    this.searchQuery = '';
    this.init();
  }

  init() {
    console.log('🔍 Initializing Sprite Browser...');
    this.createBrowserInterface();
    this.setupEventListeners();
  }

  createBrowserInterface() {
    // Create the browser container
    const browser = document.createElement('div');
    browser.id = 'sprite-browser';
    browser.className = 'sprite-browser';
    browser.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      width: 400px;
      max-height: 80vh;
      background: white;
      border-radius: 12px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.15);
      z-index: 1005;
      font-family: system-ui, -apple-system, sans-serif;
      overflow: hidden;
      transform: translateX(100%);
      transition: transform 0.3s ease;
      display: none;
    `;

    browser.innerHTML = `
      <div class="browser-header" style="
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 16px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      ">
        <h3 style="margin: 0; font-size: 18px;">🎨 Sprite Browser</h3>
        <button id="close-sprite-browser" style="
          background: none;
          border: none;
          color: white;
          font-size: 20px;
          cursor: pointer;
          padding: 0;
          width: 24px;
          height: 24px;
        ">×</button>
      </div>
      
      <div class="browser-content" style="padding: 20px;">
        <div class="search-section" style="margin-bottom: 20px;">
          <input type="text" id="sprite-search" placeholder="Search sprites..." style="
            width: 100%;
            padding: 12px;
            border: 2px solid #e1e5e9;
            border-radius: 8px;
            font-size: 14px;
            outline: none;
          ">
        </div>
        
        <div class="category-filter" style="margin-bottom: 20px;">
          <select id="sprite-category-filter" style="
            width: 100%;
            padding: 10px;
            border: 2px solid #e1e5e9;
            border-radius: 6px;
            font-size: 14px;
            outline: none;
          ">
            <option value="all">All Categories</option>
          </select>
        </div>
        
        <div class="sprites-grid" id="sprites-grid" style="
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          max-height: 400px;
          overflow-y: auto;
        "></div>
        
        <div class="browser-actions" style="
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid #e1e5e9;
          display: flex;
          gap: 10px;
        ">
          <button id="add-sprite-btn" class="btn-primary" style="
            flex: 1;
            padding: 12px;
            background: #4CAF50;
            color: white;
            border: none;
            border-radius: 6px;
            font-size: 14px;
            cursor: pointer;
          ">Add Selected</button>
          <button id="randomize-sprites-btn" class="btn-secondary" style="
            flex: 1;
            padding: 12px;
            background: #2196F3;
            color: white;
            border: none;
            border-radius: 6px;
            font-size: 14px;
            cursor: pointer;
          ">Randomize</button>
        </div>
      </div>
    `;

    document.body.appendChild(browser);
    this.browser = browser;
  }

  setupEventListeners() {
    // Close button
    document.getElementById('close-sprite-browser')?.addEventListener('click', () => {
      this.hide();
    });

    // Search input
    document.getElementById('sprite-search')?.addEventListener('input', (e) => {
      this.searchQuery = e.target.value;
      this.filterSprites();
    });

    // Category filter
    document.getElementById('sprite-category-filter')?.addEventListener('change', (e) => {
      this.currentCategory = e.target.value;
      this.filterSprites();
    });

    // Add sprite button
    document.getElementById('add-sprite-btn')?.addEventListener('click', () => {
      this.addSelectedSprites();
    });

    // Randomize button
    document.getElementById('randomize-sprites-btn')?.addEventListener('click', () => {
      this.randomizeSprites();
    });

    // Click outside to close
    document.addEventListener('click', (e) => {
      if (this.isVisible && !this.browser.contains(e.target) && !e.target.closest('#open-sprite-browser')) {
        this.hide();
      }
    });
  }

  show() {
    if (!this.isVisible) {
      this.browser.style.display = 'block';
      setTimeout(() => {
        this.browser.style.transform = 'translateX(0)';
      }, 10);
      this.isVisible = true;
      this.populateSprites();
      console.log('🔍 Sprite Browser opened');
    }
  }

  hide() {
    if (this.isVisible) {
      this.browser.style.transform = 'translateX(100%)';
      setTimeout(() => {
        this.browser.style.display = 'none';
      }, 300);
      this.isVisible = false;
      console.log('🔍 Sprite Browser closed');
    }
  }

  populateSprites() {
    // Populate categories
    this.populateCategories();
    
    // Populate sprites grid
    this.populateSpritesGrid();
  }

  populateCategories() {
    const categoryFilter = document.getElementById('sprite-category-filter');
    if (!categoryFilter) return;

    // Get categories from existing sprites
    const categories = this.getExistingSpriteCategories();
    
    // Clear existing options except "All Categories"
    categoryFilter.innerHTML = '<option value="all">All Categories</option>';
    
    // Add category options
    categories.forEach(category => {
      const option = document.createElement('option');
      option.value = category;
      option.textContent = this.capitalizeFirst(category);
      categoryFilter.appendChild(option);
    });
  }

  populateSpritesGrid() {
    const grid = document.getElementById('sprites-grid');
    if (!grid) return;

    grid.innerHTML = '';

    let sprites = [];
    
    if (this.currentCategory === 'all') {
      // Get all existing sprites
      sprites = this.getExistingSprites();
    } else {
      // Get sprites by category
      sprites = this.getExistingSpritesByCategory(this.currentCategory);
    }

    // Filter by search query
    if (this.searchQuery) {
      sprites = sprites.filter(sprite => 
        sprite.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        sprite.tags.some(tag => tag.toLowerCase().includes(this.searchQuery.toLowerCase()))
      );
    }

    if (sprites.length === 0) {
      grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #666;">No sprites found</p>';
      return;
    }

    // Create sprite previews
    sprites.forEach(sprite => {
      const spritePreview = this.createSpritePreview(sprite);
      grid.appendChild(spritePreview);
    });
  }

  createSpritePreview(sprite) {
    const preview = document.createElement('div');
    preview.className = 'sprite-preview';
    preview.style.cssText = `
      border: 2px solid #e1e5e9;
      border-radius: 8px;
      padding: 12px;
      text-align: center;
      cursor: pointer;
      transition: all 0.2s ease;
      background: white;
    `;

    preview.innerHTML = `
      <div class="sprite-icon" style="
        width: 48px;
        height: 48px;
        margin: 0 auto 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #4a90e2;
      ">
        ${this.getSpriteIcon(sprite)}
      </div>
      <div class="sprite-name" style="
        font-size: 12px;
        font-weight: 500;
        color: #333;
        margin-bottom: 4px;
      ">${sprite.name}</div>
      <div class="sprite-category" style="
        font-size: 10px;
        color: #666;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      ">${sprite.category}</div>
    `;

    // Add click handler
    preview.addEventListener('click', (event) => {
      this.selectSprite(sprite, event);
    });

    // Add hover effects
    preview.addEventListener('mouseenter', () => {
      preview.style.borderColor = '#4a90e2';
      preview.style.transform = 'translateY(-2px)';
      preview.style.boxShadow = '0 4px 12px rgba(74, 144, 226, 0.2)';
    });

    preview.addEventListener('mouseleave', () => {
      preview.style.borderColor = '#e1e5e9';
      preview.style.transform = 'translateY(0)';
      preview.style.boxShadow = 'none';
    });

    return preview;
  }

  getSpriteIcon(sprite) {
    // Try to create a preview using the existing SVG element
    if (sprite.svgElement) {
      try {
        // Clone the SVG element and scale it down for preview
        const clonedSvg = sprite.svgElement.cloneNode(true);
        clonedSvg.setAttribute('width', '32');
        clonedSvg.setAttribute('height', '32');
        clonedSvg.setAttribute('fill', 'currentColor');
        
        return clonedSvg.outerHTML;
      } catch (error) {
        console.warn('Failed to create SVG preview:', error);
      }
    }
    
    // Fallback icon
    return '🎨';
  }

  selectSprite(sprite, event) {
    // Highlight selected sprite
    const previews = document.querySelectorAll('.sprite-preview');
    previews.forEach(p => p.style.borderColor = '#e1e5e9');
    
    const selectedPreview = event.currentTarget;
    selectedPreview.style.borderColor = '#4CAF50';
    selectedPreview.style.background = '#f0f9ff';
    
    // Store selected sprite
    this.selectedSprite = sprite;
    
    console.log('🎯 Selected sprite:', sprite.name);
  }

  addSelectedSprites() {
    if (!this.selectedSprite) {
      alert('Please select a sprite first');
      return;
    }

    // Add the selected sprite to the current theme
    const theme = this.getCurrentTheme();
    if (theme) {
      // Add sprite to theme if not already present
      if (!theme.sprites.includes(this.selectedSprite.id)) {
        theme.sprites.push(this.selectedSprite.id);
        console.log(`✅ Added ${this.selectedSprite.name} to current theme`);
        
        // Update sprites display using the existing system
        if (typeof updateSprites === 'function') {
          updateSprites();
        } else {
          console.warn('⚠️ updateSprites function not available');
        }
      } else {
        console.log(`ℹ️ ${this.selectedSprite.name} is already in the current theme`);
      }
    }
  }

  randomizeSprites() {
    const theme = this.getCurrentTheme();
    if (theme) {
      // Use the existing system to randomize sprites
      if (typeof updateSprites === 'function') {
        updateSprites();
        console.log('🎲 Sprites randomized using existing system');
      } else {
        console.warn('⚠️ updateSprites function not available');
      }
    }
  }

  filterSprites() {
    this.populateSpritesGrid();
  }

  getCurrentTheme() {
    const themeKey = document.getElementById('category')?.value;
    if (themeKey === 'custom') {
      return window.CUSTOM_THEME?.custom;
    } else {
      return window.THEMES?.[themeKey];
    }
  }

  capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // Helper methods to work with existing sprites
  getExistingSpriteCategories() {
    const categories = new Set();
    
    // Get all SVG definitions from the existing HTML
    const svgDefs = document.querySelector('svg defs');
    if (!svgDefs) return ['celebration', 'nature', 'geometric', 'decorative'];
    
    const spriteElements = svgDefs.querySelectorAll('g[id]');
    spriteElements.forEach(element => {
      const id = element.getAttribute('id');
      const category = this.categorizeExistingSprite(id);
      categories.add(category);
    });
    
    return Array.from(categories);
  }

  getExistingSprites() {
    const sprites = [];
    
    // Get all SVG definitions from the existing HTML
    const svgDefs = document.querySelector('svg defs');
    if (!svgDefs) return sprites;
    
    const spriteElements = svgDefs.querySelectorAll('g[id]');
    spriteElements.forEach(element => {
      const id = element.getAttribute('id');
      const category = this.categorizeExistingSprite(id);
      
      sprites.push({
        id: id,
        name: this.capitalizeFirst(id),
        category: category,
        tags: [id, category],
        svgElement: element
      });
    });
    
    return sprites;
  }

  getExistingSpritesByCategory(category) {
    return this.getExistingSprites().filter(sprite => sprite.category === category);
  }

  categorizeExistingSprite(id) {
    if (['balloon', 'confetti', 'cake', 'gifts', 'candles'].includes(id)) {
      return 'celebration';
    } else if (['star', 'cloud', 'duck', 'tree', 'snow'].includes(id)) {
      return 'nature';
    } else if (['floatie', 'sunglasses', 'flipflop', 'cap', 'ribbon'].includes(id)) {
      return 'decorative';
    } else {
      return 'decorative';
    }
  }
}

// Export for use in other modules
export { SpriteBrowser };
