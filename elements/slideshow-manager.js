// Slideshow Manager
// Handles cycling through different element combinations to showcase possibilities

class SlideshowManager {
  constructor() {
    this.currentSlideIndex = 0;
    this.isPlaying = false;
    this.autoPlayInterval = null;
    this.slideDuration = 5000; // 5 seconds per slide
    this.transitionDuration = 1000; // 1 second transition
    
    this.slideshowContainer = null;
    this.slideshowControls = null;
    this.slideshowInfo = null;
    
    this.init();
  }
  
  init() {
    this.createSlideshowUI();
    this.loadElements();
    this.setupEventListeners();
    this.showSlide(0);
  }
  
  createSlideshowUI() {
    // Create slideshow container
    this.slideshowContainer = document.createElement('div');
    this.slideshowContainer.id = 'slideshow-container';
    this.slideshowContainer.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 80vw;
      height: 80vh;
      background: rgba(0, 0, 0, 0.9);
      border-radius: 20px;
      z-index: 10000;
      display: none;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: white;
      font-family: system-ui, -apple-system, sans-serif;
    `;
    
    // Create slideshow content
    const content = document.createElement('div');
    content.style.cssText = `
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 20px;
    `;
    
    // Title
    const title = document.createElement('h2');
    title.textContent = '🎨 Slideshow Mode';
    title.style.cssText = `
      margin: 0 0 20px 0;
      font-size: 24px;
      text-align: center;
    `;
    
    // Slideshow info
    this.slideshowInfo = document.createElement('div');
    this.slideshowInfo.style.cssText = `
      margin: 20px 0;
      text-align: center;
      font-size: 16px;
      line-height: 1.5;
    `;
    
    // Slideshow controls
    this.slideshowControls = document.createElement('div');
    this.slideshowControls.style.cssText = `
      display: flex;
      gap: 15px;
      margin: 20px 0;
      flex-wrap: wrap;
      justify-content: center;
    `;
    
    // Control buttons
    const prevBtn = this.createButton('⏮️ Previous', () => this.previousSlide());
    const playPauseBtn = this.createButton('▶️ Play', () => this.togglePlayPause());
    const nextBtn = this.createButton('⏭️ Next', () => this.nextSlide());
    const closeBtn = this.createButton('❌ Close', () => this.closeSlideshow());
    
    this.playPauseBtn = playPauseBtn;
    
    this.slideshowControls.appendChild(prevBtn);
    this.slideshowControls.appendChild(playPauseBtn);
    this.slideshowControls.appendChild(nextBtn);
    this.slideshowControls.appendChild(closeBtn);
    
    // Progress bar
    this.progressBar = document.createElement('div');
    this.progressBar.style.cssText = `
      width: 100%;
      height: 4px;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 2px;
      margin: 20px 0;
      overflow: hidden;
    `;
    
    this.progressFill = document.createElement('div');
    this.progressFill.style.cssText = `
      height: 100%;
      background: #4CAF50;
      width: 0%;
      transition: width 0.1s ease;
    `;
    
    this.progressBar.appendChild(this.progressFill);
    
    // Assemble UI
    content.appendChild(title);
    content.appendChild(this.slideshowInfo);
    content.appendChild(this.slideshowControls);
    content.appendChild(this.progressBar);
    
    this.slideshowContainer.appendChild(content);
    document.body.appendChild(this.slideshowContainer);
  }
  
  createButton(text, onClick) {
    const button = document.createElement('button');
    button.textContent = text;
    button.style.cssText = `
      padding: 10px 20px;
      border: none;
      border-radius: 8px;
      background: #4CAF50;
      color: white;
      font-size: 14px;
      cursor: pointer;
      transition: all 0.2s ease;
    `;
    
    button.addEventListener('click', onClick);
    button.addEventListener('mouseenter', () => {
      button.style.background = '#45a049';
      button.style.transform = 'scale(1.05)';
    });
    button.addEventListener('mouseleave', () => {
      button.style.background = '#4CAF50';
      button.style.transform = 'scale(1)';
    });
    
    return button;
  }
  
  setupEventListeners() {
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (!this.slideshowContainer.style.display || this.slideshowContainer.style.display === 'none') return;
      
      switch(e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          this.previousSlide();
          break;
        case 'ArrowRight':
          e.preventDefault();
          this.nextSlide();
          break;
        case ' ':
          e.preventDefault();
          this.togglePlayPause();
          break;
        case 'Escape':
          e.preventDefault();
          this.closeSlideshow();
          break;
      }
    });
  }
  
  loadElements() {
    // Load background images
    this.backgroundImages = {};
    Object.keys(ELEMENTS_CONFIG.backgrounds).forEach(key => {
      const config = ELEMENTS_CONFIG.backgrounds[key];
      const img = new Image();
      img.src = `elements/backgrounds/${config.file}`;
      this.backgroundImages[key] = img;
    });
    
    // Load decoration images
    this.decorationImages = {};
    Object.keys(ELEMENTS_CONFIG.decorations).forEach(key => {
      const config = ELEMENTS_CONFIG.decorations[key];
      const img = new Image();
      img.src = `elements/decorations/${config.file}`;
      this.decorationImages[key] = img;
    });
  }
  
  showSlide(index) {
    if (index < 0 || index >= SLIDESHOW_COMBINATIONS.length) return;
    
    this.currentSlideIndex = index;
    const combination = SLIDESHOW_COMBINATIONS[index];
    
    // Update info display
    this.slideshowInfo.innerHTML = `
      <div style="margin-bottom: 15px;">
        <strong>${combination.name}</strong>
      </div>
      <div style="font-size: 14px; opacity: 0.8;">
        Slide ${index + 1} of ${SLIDESHOW_COMBINATIONS.length}
      </div>
      <div style="font-size: 12px; opacity: 0.6; margin-top: 10px;">
        ${this.getCombinationDescription(combination)}
      </div>
    `;
    
    // Apply the combination to the main invitation
    this.applyCombination(combination);
    
    // Update progress bar
    const progress = ((index + 1) / SLIDESHOW_COMBINATIONS.length) * 100;
    this.progressFill.style.width = `${progress}%`;
    
    // Reset auto-play timer
    this.resetAutoPlayTimer();
  }
  
  getCombinationDescription(combination) {
    const parts = [];
    
    if (combination.background) {
      parts.push(`Background: ${ELEMENTS_CONFIG.backgrounds[combination.background].name}`);
    }
    
    if (combination.decorations && combination.decorations.length > 0) {
      const decorationNames = combination.decorations.map(d => ELEMENTS_CONFIG.decorations[d].name);
      parts.push(`Decorations: ${decorationNames.join(', ')}`);
    }
    
    if (combination.backgroundMode === 'image') {
      parts.push('Mode: Pure Image');
    } else if (combination.backgroundMode === 'img+tex') {
      if (combination.gradientOpacity > 0) {
        parts.push(`Mode: Image + Gradient (${combination.gradientOpacity}%)`);
      }
      if (combination.textureOpacity > 0) {
        parts.push(`Mode: Image + Texture (${combination.textureOpacity}%)`);
      }
    } else if (combination.backgroundMode === 'grad+tex') {
      parts.push(`Mode: Gradient + Texture (${combination.textureOpacity}%)`);
    }
    
    return parts.join(' • ');
  }
  
  applyCombination(combination) {
    // Apply background mode
    const bgModeSelect = document.getElementById('bg-mode');
    if (bgModeSelect) {
      bgModeSelect.value = combination.backgroundMode;
      bgModeSelect.dispatchEvent(new Event('change'));
    }
    
    // Apply background image if specified
    if (combination.background) {
      // Set the background image
      const photo = document.getElementById('photo');
      if (photo && this.backgroundImages[combination.background]) {
        photo.style.backgroundImage = `url('elements/backgrounds/${combination.background}.svg')`;
      }
    }
    
    // Apply image settings
    const imgOpacity = document.getElementById('img-opacity');
    const imgBlur = document.getElementById('img-blur');
    const imgBright = document.getElementById('img-bright');
    const imgVignette = document.getElementById('img-vignette');
    
    if (imgOpacity) imgOpacity.value = combination.imageOpacity;
    if (imgBlur) imgBlur.value = combination.imageBlur;
    if (imgBright) imgBright.value = combination.imageBrightness;
    if (imgVignette) imgVignette.value = combination.imageVignette;
    
    // Apply texture settings
    if (combination.textureOpacity > 0) {
      const texOpacity = document.getElementById('tex-opacity');
      const texScale = document.getElementById('tex-scale');
      const texture = document.getElementById('texture');
      
      if (texOpacity) texOpacity.value = combination.textureOpacity;
      if (texScale) texScale.value = combination.textureScale || 100;
      if (texture && combination.textureType) texture.value = combination.textureType;
    }
    
    // Apply decorations
    this.applyDecorations(combination.decorations);
    
    // Trigger background update
    if (typeof applyBackground === 'function') {
      applyBackground();
    }
  }
  
  applyDecorations(decorationKeys) {
    if (!decorationKeys || decorationKeys.length === 0) return;
    
    // Clear existing decorations
    const sprites = document.getElementById('sprites');
    if (sprites) {
      sprites.innerHTML = '';
    }
    
    // Add new decorations
    decorationKeys.forEach((key, index) => {
      if (this.decorationImages[key]) {
        this.addDecoration(key, index);
      }
    });
  }
  
  addDecoration(key, index) {
    const sprites = document.getElementById('sprites');
    if (!sprites) return;
    
    const config = ELEMENTS_CONFIG.decorations[key];
    const position = config.positions[index % config.positions.length];
    
    const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `#${key}`);
    
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('class', 'sprite');
    g.setAttribute('transform', `translate(${position.x} ${position.y}) scale(${config.defaultScale || 1}) rotate(${config.defaultRotation || 0})`);
    g.setAttribute('style', `opacity: ${config.defaultOpacity / 100}`);
    
    g.appendChild(use);
    sprites.appendChild(g);
  }
  
  nextSlide() {
    const nextIndex = (this.currentSlideIndex + 1) % SLIDESHOW_COMBINATIONS.length;
    this.showSlide(nextIndex);
  }
  
  previousSlide() {
    const prevIndex = this.currentSlideIndex === 0 ? SLIDESHOW_COMBINATIONS.length - 1 : this.currentSlideIndex - 1;
    this.showSlide(prevIndex);
  }
  
  togglePlayPause() {
    if (this.isPlaying) {
      this.pauseSlideshow();
    } else {
      this.playSlideshow();
    }
  }
  
  playSlideshow() {
    this.isPlaying = true;
    this.playPauseBtn.textContent = '⏸️ Pause';
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, this.slideDuration);
  }
  
  pauseSlideshow() {
    this.isPlaying = false;
    this.playPauseBtn.textContent = '▶️ Play';
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }
  
  resetAutoPlayTimer() {
    if (this.isPlaying) {
      this.pauseSlideshow();
      this.playSlideshow();
    }
  }
  
  openSlideshow() {
    this.slideshowContainer.style.display = 'flex';
    this.showSlide(this.currentSlideIndex);
  }
  
  closeSlideshow() {
    this.slideshowContainer.style.display = 'none';
    this.pauseSlideshow();
  }
  
  // Random combination generator
  generateRandomCombination() {
    const backgrounds = Object.keys(ELEMENTS_CONFIG.backgrounds);
    const decorations = Object.keys(ELEMENTS_CONFIG.decorations);
    const backgroundModes = ['image', 'img+tex', 'grad+tex'];
    
    const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    const randomDecorations = [];
    const numDecorations = Math.floor(Math.random() * 3) + 1; // 1-3 decorations
    
    for (let i = 0; i < numDecorations; i++) {
      const decoration = decorations[Math.floor(Math.random() * decorations.length)];
      if (!randomDecorations.includes(decoration)) {
        randomDecorations.push(decoration);
      }
    }
    
    const randomMode = backgroundModes[Math.floor(Math.random() * backgroundModes.length)];
    
    return {
      name: `Random Combination ${Date.now()}`,
      background: randomBackground,
      decorations: randomDecorations,
      backgroundMode: randomMode,
      imageOpacity: Math.floor(Math.random() * 40) + 60, // 60-100%
      imageBlur: Math.floor(Math.random() * 5), // 0-4px
      imageBrightness: Math.floor(Math.random() * 30) + 85, // 85-115%
      imageVignette: Math.floor(Math.random() * 30), // 0-29px
      textureOpacity: randomMode === 'grad+tex' ? Math.floor(Math.random() * 50) + 20 : 0, // 20-70%
      textureType: ['dots', 'grid', 'stripes', 'noise'][Math.floor(Math.random() * 4)],
      textureScale: Math.floor(Math.random() * 100) + 50, // 50-150
      gradientOpacity: randomMode === 'img+tex' ? Math.floor(Math.random() * 40) + 30 : 0, // 30-70%
      gradientType: ['blue', 'green', 'purple'][Math.floor(Math.random() * 3)]
    };
  }
  
  addRandomSlide() {
    const randomCombination = this.generateRandomCombination();
    SLIDESHOW_COMBINATIONS.push(randomCombination);
    this.showSlide(SLIDESHOW_COMBINATIONS.length - 1);
  }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SlideshowManager;
} else {
  window.SlideshowManager = SlideshowManager;
}

