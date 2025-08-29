// Random Element Loader
// Randomly loads backgrounds and decorations for variety

class RandomElementLoader {
  constructor() {
    this.loadedElements = new Set();
    this.init();
  }
  
  init() {
    // Load elements configuration if not already loaded
    if (!window.ELEMENTS_CONFIG) {
      this.loadElementsConfig();
    }
  }
  
  loadElementsConfig() {
    // Load the elements configuration script
    const script = document.createElement('script');
    script.src = 'elements/elements-config.js';
    script.onload = () => {
      console.log('✅ Elements configuration loaded');
      this.setupRandomLoading();
    };
    script.onerror = () => {
      console.error('❌ Failed to load elements configuration');
    };
    document.head.appendChild(script);
  }
  
  setupRandomLoading() {
    // Add random loading functionality to the main app
    this.addRandomLoadButton();
    this.addAutoRandomMode();
  }
  
  addRandomLoadButton() {
    // Find the actions section
    const actionsSection = document.querySelector('.actions');
    if (!actionsSection) return;
    
    // Create random load button
    const randomLoadBtn = document.createElement('button');
    randomLoadBtn.id = 'random-elements';
    randomLoadBtn.className = 'ghost';
    randomLoadBtn.style.cssText = 'background: #9C27B0; color: white;';
    randomLoadBtn.textContent = '🎲 Random Elements';
    randomLoadBtn.title = 'Load random background and decorations';
    
    randomLoadBtn.addEventListener('click', () => {
      this.loadRandomElements();
    });
    
    actionsSection.appendChild(randomLoadBtn);
    console.log('✅ Random elements button added');
  }
  
  addAutoRandomMode() {
    // Find the actions section
    const actionsSection = document.querySelector('.actions');
    if (!actionsSection) return;
    
    // Create auto-random toggle button
    const autoRandomBtn = document.createElement('button');
    autoRandomBtn.id = 'auto-random';
    autoRandomBtn.className = 'ghost';
    autoRandomBtn.style.cssText = 'background: #FF5722; color: white;';
    autoRandomBtn.textContent = '🔄 Auto Random';
    autoRandomBtn.title = 'Automatically change elements every 10 seconds';
    
    let autoRandomInterval = null;
    
    autoRandomBtn.addEventListener('click', () => {
      if (autoRandomInterval) {
        // Stop auto-random
        clearInterval(autoRandomInterval);
        autoRandomInterval = null;
        autoRandomBtn.textContent = '🔄 Auto Random';
        autoRandomBtn.style.background = '#FF5722';
        console.log('🔄 Auto-random mode stopped');
      } else {
        // Start auto-random
        autoRandomBtn.textContent = '⏹️ Stop Auto';
        autoRandomBtn.style.background = '#4CAF50';
        autoRandomInterval = setInterval(() => {
          this.loadRandomElements();
        }, 10000); // 10 seconds
        console.log('🔄 Auto-random mode started (every 10 seconds)');
      }
    });
    
    actionsSection.appendChild(autoRandomBtn);
    console.log('✅ Auto-random button added');
  }
  
  loadRandomElements() {
    if (!window.ELEMENTS_CONFIG) {
      console.error('❌ Elements configuration not loaded');
      return;
    }
    
    console.log('🎲 Loading random elements...');
    
    // Randomly select background
    const backgrounds = Object.keys(ELEMENTS_CONFIG.backgrounds);
    const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    
    // Randomly select 1-2 decorations
    const decorations = Object.keys(ELEMENTS_CONFIG.decorations);
    const numDecorations = Math.floor(Math.random() * 2) + 1; // 1-2 decorations
    const randomDecorations = [];
    
    for (let i = 0; i < numDecorations; i++) {
      const decoration = decorations[Math.floor(Math.random() * decorations.length)];
      if (!randomDecorations.includes(decoration)) {
        randomDecorations.push(decoration);
      }
    }
    
    // Randomly select background mode
    const backgroundModes = ['image', 'img+tex', 'grad+tex'];
    const randomMode = backgroundModes[Math.floor(Math.random() * backgroundModes.length)];
    
    // Apply random elements
    this.applyRandomElements(randomBackground, randomDecorations, randomMode);
    
    // Log what was loaded
    console.log(`🎲 Random elements loaded:`);
    console.log(`  Background: ${ELEMENTS_CONFIG.backgrounds[randomBackground].name}`);
    console.log(`  Decorations: ${randomDecorations.map(d => ELEMENTS_CONFIG.decorations[d].name).join(', ')}`);
    console.log(`  Mode: ${randomMode}`);
  }
  
  applyRandomElements(backgroundKey, decorationKeys, backgroundMode) {
    // Apply background mode
    const bgModeSelect = document.getElementById('bg-mode');
    if (bgModeSelect) {
      bgModeSelect.value = backgroundMode;
      bgModeSelect.dispatchEvent(new Event('change'));
    }
    
    // Apply background image
    if (backgroundKey) {
      const photo = document.getElementById('photo');
      if (photo) {
        photo.style.backgroundImage = `url('elements/backgrounds/${backgroundKey}.svg')`;
      }
    }
    
    // Apply random image settings
    this.applyRandomImageSettings();
    
    // Apply random texture settings if mode supports it
    if (backgroundMode === 'img+tex' || backgroundMode === 'grad+tex') {
      this.applyRandomTextureSettings();
    }
    
    // Apply decorations
    this.applyDecorations(decorationKeys);
    
    // Trigger background update
    if (typeof applyBackground === 'function') {
      applyBackground();
    }
    
    // Update UI to reflect changes
    this.updateUIWithRandomElements(backgroundKey, decorationKeys, backgroundMode);
  }
  
  applyRandomImageSettings() {
    // Random image opacity (60-100%)
    const imgOpacity = document.getElementById('img-opacity');
    if (imgOpacity) {
      imgOpacity.value = Math.floor(Math.random() * 40) + 60;
    }
    
    // Random blur (0-4px)
    const imgBlur = document.getElementById('img-blur');
    if (imgBlur) {
      imgBlur.value = Math.floor(Math.random() * 5);
    }
    
    // Random brightness (85-115%)
    const imgBright = document.getElementById('img-bright');
    if (imgBright) {
      imgBright.value = Math.floor(Math.random() * 30) + 85;
    }
    
    // Random vignette (0-29px)
    const imgVignette = document.getElementById('img-vignette');
    if (imgVignette) {
      imgVignette.value = Math.floor(Math.random() * 30);
    }
  }
  
  applyRandomTextureSettings() {
    // Random texture type
    const textureTypes = ['dots', 'grid', 'stripes', 'noise'];
    const randomTextureType = textureTypes[Math.floor(Math.random() * textureTypes.length)];
    
    const texture = document.getElementById('texture');
    if (texture) {
      texture.value = randomTextureType;
    }
    
    // Random texture opacity (20-70%)
    const texOpacity = document.getElementById('tex-opacity');
    if (texOpacity) {
      texOpacity.value = Math.floor(Math.random() * 50) + 20;
    }
    
    // Random texture scale (50-150)
    const texScale = document.getElementById('tex-scale');
    if (texScale) {
      texScale.value = Math.floor(Math.random() * 100) + 50;
    }
  }
  
  applyDecorations(decorationKeys) {
    if (!decorationKeys || decorationKeys.length === 0) return;
    
    // Clear existing decorations
    const sprites = document.getElementById('sprites');
    if (sprites) {
      sprites.innerHTML = '';
    }
    
    // Add new decorations with random positioning
    decorationKeys.forEach((key, index) => {
      this.addDecorationWithRandomPosition(key, index);
    });
  }
  
  addDecorationWithRandomPosition(key, index) {
    const sprites = document.getElementById('sprites');
    if (!sprites) return;
    
    const config = ELEMENTS_CONFIG.decorations[key];
    
    // Generate random position within reasonable bounds
    const x = Math.floor(Math.random() * 700) + 100; // 100-800
    const y = Math.floor(Math.random() * 800) + 100; // 100-900
    
    // Random scale variation
    const scaleVariation = 0.7 + Math.random() * 0.6; // 0.7-1.3
    const finalScale = (config.defaultScale || 1) * scaleVariation;
    
    // Random rotation
    const rotation = Math.floor(Math.random() * 360);
    
    // Random opacity variation
    const opacityVariation = 0.8 + Math.random() * 0.4; // 0.8-1.2
    const finalOpacity = (config.defaultOpacity || 80) * opacityVariation / 100;
    
    // Create SVG use element
    const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `#${key}`);
    
    // Create group with transformations
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('class', 'sprite');
    g.setAttribute('transform', `translate(${x} ${y}) scale(${finalScale}) rotate(${rotation})`);
    g.setAttribute('style', `opacity: ${finalOpacity}`);
    
    g.appendChild(use);
    sprites.appendChild(g);
    
    console.log(`🎨 Added decoration: ${config.name} at (${x}, ${y})`);
  }
  
  updateUIWithRandomElements(backgroundKey, decorationKeys, backgroundMode) {
    // Show notification of what was loaded
    this.showRandomElementsNotification(backgroundKey, decorationKeys, backgroundMode);
    
    // Update any relevant UI elements
    this.updateBackgroundModeUI(backgroundMode);
  }
  
  showRandomElementsNotification(backgroundKey, decorationKeys, backgroundMode) {
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #4CAF50;
      color: white;
      padding: 16px 24px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
      z-index: 10001;
      font-family: system-ui, -apple-system, sans-serif;
      font-weight: bold;
      max-width: 300px;
      line-height: 1.4;
    `;
    
    const backgroundName = ELEMENTS_CONFIG.backgrounds[backgroundKey]?.name || backgroundKey;
    const decorationNames = decorationKeys.map(d => ELEMENTS_CONFIG.decorations[d]?.name || d).join(', ');
    
    notification.innerHTML = `
      <div style="margin-bottom: 8px;">🎲 Random Elements Loaded!</div>
      <div style="font-size: 14px; font-weight: normal; opacity: 0.9;">
        <div><strong>Background:</strong> ${backgroundName}</div>
        <div><strong>Decorations:</strong> ${decorationNames}</div>
        <div><strong>Mode:</strong> ${backgroundMode}</div>
      </div>
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 4 seconds
    setTimeout(() => {
      if (notification.parentNode) {
        notification.remove();
      }
    }, 4000);
  }
  
  updateBackgroundModeUI(backgroundMode) {
    // Show/hide texture controls based on mode
    const texControls = document.getElementById('tex-controls');
    if (texControls) {
      const showTex = (backgroundMode === 'texture' || backgroundMode === 'grad+tex' || backgroundMode === 'img+tex');
      texControls.style.display = showTex ? 'block' : 'none';
    }
    
    // Show/hide image controls based on mode
    const imgControls = document.getElementById('img-controls');
    if (imgControls) {
      const showImg = (backgroundMode === 'image' || backgroundMode === 'img+tex');
      imgControls.style.display = showImg ? 'block' : 'none';
    }
  }
  
  // Method to get current loaded elements info
  getCurrentElementsInfo() {
    const bgMode = document.getElementById('bg-mode')?.value || 'none';
    const background = this.getCurrentBackground();
    const decorations = this.getCurrentDecorations();
    
    return {
      backgroundMode: bgMode,
      background: background,
      decorations: decorations
    };
  }
  
  getCurrentBackground() {
    const photo = document.getElementById('photo');
    if (photo && photo.style.backgroundImage) {
      const bgImage = photo.style.backgroundImage;
      // Extract background key from URL
      const match = bgImage.match(/elements\/backgrounds\/(.+)\.svg/);
      return match ? match[1] : null;
    }
    return null;
  }
  
  getCurrentDecorations() {
    const sprites = document.getElementById('sprites');
    if (!sprites) return [];
    
    const decorationElements = sprites.querySelectorAll('.sprite');
    const decorations = [];
    
    decorationElements.forEach(element => {
      // Try to extract decoration type from the use element
      const useElement = element.querySelector('use');
      if (useElement) {
        const href = useElement.getAttribute('xlink:href');
        if (href && href.startsWith('#')) {
          decorations.push(href.substring(1));
        }
      }
    });
    
    return decorations;
  }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = RandomElementLoader;
} else {
  window.RandomElementLoader = RandomElementLoader;
}

