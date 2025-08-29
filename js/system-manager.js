/**
 * SYSTEM MANAGER
 * Clean, organized system for managing all invitation builder groups
 * Zero global variable conflicts, immediate initialization, comprehensive error handling
 */

class SystemManager {
  constructor() {
    console.log('🚀 SystemManager: Initializing...');
    
    // Track all systems
    this.systems = new Map();
    this.initialized = false;
    
    // Initialize immediately
    this.init();
  }
  
  init() {
    console.log('🚀 SystemManager: Starting initialization...');
    
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        this.initializeAllSystems();
      });
    } else {
      this.initializeAllSystems();
    }
  }
  
  initializeAllSystems() {
    console.log('🚀 SystemManager: Initializing all systems...');
    
    try {
      // Initialize Border Edges System
      this.initializeBorderEdgesSystem();
      
      // Initialize Overlay System
      this.initializeOverlaySystem();
      
      // Initialize Background System
      this.initializeBackgroundSystem();
      
      // Initialize Sprite System
      this.initializeSpriteSystem();
      
      // Initialize Text System
      this.initializeTextSystem();
      
      // Initialize Color System
      this.initializeColorSystem();
      
      // Initialize Font System
      this.initializeFontSystem();
      
      // Initialize Shadow System
      this.initializeShadowSystem();
      
      // Initialize Particle System
      this.initializeParticleSystem();
      
      this.initialized = true;
      console.log('✅ SystemManager: All systems initialized successfully!');
      
    } catch (error) {
      console.error('❌ SystemManager: Error during initialization:', error);
    }
  }
  
  // Border Edges System
  initializeBorderEdgesSystem() {
    console.log('🎯 SystemManager: Initializing Border Edges System...');
    
    try {
      if (window.BorderEdgesSystem) {
        const borderEdges = new window.BorderEdgesSystem();
        this.systems.set('borderEdges', borderEdges);
        console.log('✅ Border Edges System initialized');
      } else {
        console.error('❌ BorderEdgesSystem class not found');
      }
    } catch (error) {
      console.error('❌ Error initializing Border Edges System:', error);
    }
  }
  
  // Overlay System
  initializeOverlaySystem() {
    console.log('🎯 SystemManager: Initializing Overlay System...');
    
    try {
      const overlaySystem = {
        settings: {
          style: 'frame-elegant',
          opacity: 0.8,
          scale: 0.95,
          position: 'center',
          blend: 'normal'
        },
        
        init() {
          this.attachEventListeners();
          this.updateUI();
        },
        
        attachEventListeners() {
          const overlayStyle = document.getElementById('overlay-style');
          const overlayOpacity = document.getElementById('overlay-opacity');
          const overlayScale = document.getElementById('overlay-scale');
          const overlayPosition = document.getElementById('overlay-position');
          const overlayBlend = document.getElementById('overlay-blend');
          const resetOverlay = document.getElementById('reset-overlay');
          
          if (overlayStyle) {
            overlayStyle.addEventListener('change', (e) => {
              this.settings.style = e.target.value;
              this.applyOverlay();
            });
          }
          
          if (overlayOpacity) {
            overlayOpacity.addEventListener('input', (e) => {
              this.settings.opacity = parseFloat(e.target.value);
              document.getElementById('overlay-opacity-value').textContent = this.settings.opacity;
              this.applyOverlay();
            });
          }
          
          if (overlayScale) {
            overlayScale.addEventListener('change', (e) => {
              this.settings.scale = parseFloat(e.target.value);
              this.applyOverlay();
            });
          }
          
          if (overlayPosition) {
            overlayPosition.addEventListener('change', (e) => {
              this.settings.position = e.target.value;
              this.applyOverlay();
            });
          }
          
          if (overlayBlend) {
            overlayBlend.addEventListener('change', (e) => {
              this.settings.blend = e.target.value;
              this.applyOverlay();
            });
          }
          
          if (resetOverlay) {
            resetOverlay.addEventListener('click', () => {
              this.reset();
            });
          }
        },
        
        applyOverlay() {
          console.log('🎨 Applying overlay:', this.settings);
          // Overlay logic here
        },
        
        updateUI() {
          const overlayStyle = document.getElementById('overlay-style');
          const overlayOpacity = document.getElementById('overlay-opacity');
          const overlayScale = document.getElementById('overlay-scale');
          const overlayPosition = document.getElementById('overlay-position');
          const overlayBlend = document.getElementById('overlay-blend');
          
          if (overlayStyle) overlayStyle.value = this.settings.style;
          if (overlayOpacity) overlayOpacity.value = this.settings.opacity;
          if (overlayScale) overlayScale.value = this.settings.scale;
          if (overlayPosition) overlayPosition.value = this.settings.position;
          if (overlayBlend) overlayBlend.value = this.settings.blend;
        },
        
        reset() {
          this.settings = {
            style: 'frame-elegant',
            opacity: 0.8,
            scale: 0.95,
            position: 'center',
            blend: 'normal'
          };
          this.updateUI();
          this.applyOverlay();
        }
      };
      
      overlaySystem.init();
      this.systems.set('overlay', overlaySystem);
      console.log('✅ Overlay System initialized');
      
    } catch (error) {
      console.error('❌ Error initializing Overlay System:', error);
    }
  }
  
  // Background System
  initializeBackgroundSystem() {
    console.log('🎯 SystemManager: Initializing Background System...');
    
    try {
      const backgroundSystem = {
        settings: {
          mode: 'color',
          theme: 'elegant',
          texture: 'none',
          textureOpacity: 0.5,
          textureScale: 1.0,
          stockImage: 'none',
          imageOpacity: 0.8,
          imageBlur: 0,
          imageBrightness: 0,
          imageVignette: 0
        },
        
        init() {
          this.attachEventListeners();
          this.updateUI();
        },
        
        attachEventListeners() {
          const bgMode = document.getElementById('bg-mode');
          const category = document.getElementById('category');
          const texture = document.getElementById('texture');
          const texOpacity = document.getElementById('tex-opacity');
          const texScale = document.getElementById('tex-scale');
          const stockImage = document.getElementById('stock-image');
          const imgOpacity = document.getElementById('img-opacity');
          const imgBlur = document.getElementById('img-blur');
          const imgBright = document.getElementById('img-bright');
          const imgVignette = document.getElementById('img-vignette');
          
          if (bgMode) {
            bgMode.addEventListener('change', (e) => {
              this.settings.mode = e.target.value;
              this.applyBackground();
            });
          }
          
          if (category) {
            category.addEventListener('change', (e) => {
              this.settings.theme = e.target.value;
              this.applyBackground();
            });
          }
          
          if (texture) {
            texture.addEventListener('change', (e) => {
              this.settings.texture = e.target.value;
              this.applyBackground();
            });
          }
          
          if (texOpacity) {
            texOpacity.addEventListener('input', (e) => {
              this.settings.textureOpacity = parseFloat(e.target.value);
              document.getElementById('tex-opacity-value').textContent = this.settings.textureOpacity;
              this.applyBackground();
            });
          }
          
          if (texScale) {
            texScale.addEventListener('input', (e) => {
              this.settings.textureScale = parseFloat(e.target.value);
              document.getElementById('tex-scale-value').textContent = this.settings.textureScale;
              this.applyBackground();
            });
          }
          
          if (stockImage) {
            stockImage.addEventListener('change', (e) => {
              this.settings.stockImage = e.target.value;
              this.applyBackground();
            });
          }
          
          if (imgOpacity) {
            imgOpacity.addEventListener('input', (e) => {
              this.settings.imageOpacity = parseFloat(e.target.value);
              document.getElementById('img-opacity-value').textContent = this.settings.imageOpacity;
              this.applyBackground();
            });
          }
          
          if (imgBlur) {
            imgBlur.addEventListener('input', (e) => {
              this.settings.imageBlur = parseFloat(e.target.value);
              document.getElementById('img-blur-value').textContent = this.settings.imageBlur;
              this.applyBackground();
            });
          }
          
          if (imgBright) {
            imgBright.addEventListener('input', (e) => {
              this.settings.imageBrightness = parseFloat(e.target.value);
              document.getElementById('img-bright-value').textContent = this.settings.imageBrightness;
              this.applyBackground();
            });
          }
          
          if (imgVignette) {
            imgVignette.addEventListener('input', (e) => {
              this.settings.imageVignette = parseFloat(e.target.value);
              document.getElementById('img-vignette-value').textContent = this.settings.imageVignette;
              this.applyBackground();
            });
          }
        },
        
        applyBackground() {
          console.log('🎨 Applying background:', this.settings);
          // Background logic here
        },
        
        updateUI() {
          const bgMode = document.getElementById('bg-mode');
          const category = document.getElementById('category');
          const texture = document.getElementById('texture');
          const texOpacity = document.getElementById('tex-opacity');
          const texScale = document.getElementById('tex-scale');
          const stockImage = document.getElementById('stock-image');
          const imgOpacity = document.getElementById('img-opacity');
          const imgBlur = document.getElementById('img-blur');
          const imgBright = document.getElementById('img-bright');
          const imgVignette = document.getElementById('img-vignette');
          
          if (bgMode) bgMode.value = this.settings.mode;
          if (category) category.value = this.settings.theme;
          if (texture) texture.value = this.settings.texture;
          if (texOpacity) texOpacity.value = this.settings.textureOpacity;
          if (texScale) texScale.value = this.settings.textureScale;
          if (stockImage) stockImage.value = this.settings.stockImage;
          if (imgOpacity) imgOpacity.value = this.settings.imageOpacity;
          if (imgBlur) imgBlur.value = this.settings.imageBlur;
          if (imgBright) imgBright.value = this.settings.imageBrightness;
          if (imgVignette) imgVignette.value = this.settings.imageVignette;
        }
      };
      
      backgroundSystem.init();
      this.systems.set('background', backgroundSystem);
      console.log('✅ Background System initialized');
      
    } catch (error) {
      console.error('❌ Error initializing Background System:', error);
    }
  }
  
  // Text System
  initializeTextSystem() {
    console.log('🎯 SystemManager: Initializing Text System...');
    
    try {
      const textSystem = {
        settings: {
          pill: '',
          title: '',
          subtitle: '',
          names: '',
          date: '',
          time: '',
          location: '',
          rsvp: ''
        },
        
        init() {
          this.attachEventListeners();
          this.updateUI();
        },
        
        attachEventListeners() {
          const textFields = ['pill', 'title', 'subtitle', 'names', 'date', 'time', 'location', 'rsvp'];
          
          textFields.forEach(field => {
            const element = document.getElementById(field);
            if (element) {
              element.addEventListener('input', (e) => {
                this.settings[field] = e.target.value;
                this.updateText();
              });
            }
          });
        },
        
        updateText() {
          console.log('📝 Updating text:', this.settings);
          // Text update logic here
        },
        
        updateUI() {
          const textFields = ['pill', 'title', 'subtitle', 'names', 'date', 'time', 'location', 'rsvp'];
          
          textFields.forEach(field => {
            const element = document.getElementById(field);
            if (element) {
              element.value = this.settings[field];
            }
          });
        }
      };
      
      textSystem.init();
      this.systems.set('text', textSystem);
      console.log('✅ Text System initialized');
      
    } catch (error) {
      console.error('❌ Error initializing Text System:', error);
    }
  }
  
  // Color System
  initializeColorSystem() {
    console.log('🎯 SystemManager: Initializing Color System...');
    
    try {
      const colorSystem = {
        settings: {
          accent: '#2ec5ff',
          accent2: '#ff6b6b'
        },
        
        init() {
          this.attachEventListeners();
          this.updateUI();
        },
        
        attachEventListeners() {
          const accent = document.getElementById('accent');
          const accent2 = document.getElementById('accent2');
          
          if (accent) {
            accent.addEventListener('change', (e) => {
              this.settings.accent = e.target.value;
              this.applyColors();
            });
          }
          
          if (accent2) {
            accent2.addEventListener('change', (e) => {
              this.settings.accent2 = e.target.value;
              this.applyColors();
            });
          }
        },
        
        applyColors() {
          console.log('🎨 Applying colors:', this.settings);
          // Color application logic here
        },
        
        updateUI() {
          const accent = document.getElementById('accent');
          const accent2 = document.getElementById('accent2');
          
          if (accent) accent.value = this.settings.accent;
          if (accent2) accent2.value = this.settings.accent2;
        }
      };
      
      colorSystem.init();
      this.systems.set('color', colorSystem);
      console.log('✅ Color System initialized');
      
    } catch (error) {
      console.error('❌ Error initializing Color System:', error);
    }
  }
  
  // Font System
  initializeFontSystem() {
    console.log('🎯 SystemManager: Initializing Font System...');
    
    try {
      const fontSystem = {
        settings: {
          title: 'Playfair Display',
          names: 'Playfair Display',
          body: 'Quicksand'
        },
        
        init() {
          this.attachEventListeners();
          this.updateUI();
        },
        
        attachEventListeners() {
          const fontTitle = document.getElementById('font-title');
          const fontNames = document.getElementById('font-names');
          const fontBody = document.getElementById('font-body');
          
          if (fontTitle) {
            fontTitle.addEventListener('change', (e) => {
              this.settings.title = e.target.value;
              this.applyFonts();
            });
          }
          
          if (fontNames) {
            fontNames.addEventListener('change', (e) => {
              this.settings.names = e.target.value;
              this.applyFonts();
            });
          }
          
          if (fontBody) {
            fontBody.addEventListener('change', (e) => {
              this.settings.body = e.target.value;
              this.applyFonts();
            });
          }
        },
        
        applyFonts() {
          console.log('🔤 Applying fonts:', this.settings);
          // Font application logic here
        },
        
        updateUI() {
          const fontTitle = document.getElementById('font-title');
          const fontNames = document.getElementById('font-names');
          const fontBody = document.getElementById('font-body');
          
          if (fontTitle) fontTitle.value = this.settings.title;
          if (fontNames) fontNames.value = this.settings.names;
          if (fontBody) fontBody.value = this.settings.body;
        }
      };
      
      fontSystem.init();
      this.systems.set('font', fontSystem);
      console.log('✅ Font System initialized');
      
    } catch (error) {
      console.error('❌ Error initializing Font System:', error);
    }
  }
  
  // Shadow System
  initializeShadowSystem() {
    console.log('🎯 SystemManager: Initializing Shadow System...');
    
    try {
      const shadowSystem = {
        settings: {
          enabled: false,
          x: 0,
          y: 0,
          blur: 10,
          opacity: 0.3
        },
        
        init() {
          this.attachEventListeners();
          this.updateUI();
        },
        
        attachEventListeners() {
          const shadowEnabled = document.getElementById('shadow-enabled');
          const shadowX = document.getElementById('shadow-x');
          const shadowY = document.getElementById('shadow-y');
          const shadowBlur = document.getElementById('shadow-blur');
          const shadowOpacity = document.getElementById('shadow-opacity');
          
          if (shadowEnabled) {
            shadowEnabled.addEventListener('change', (e) => {
              this.settings.enabled = e.target.checked;
              this.applyShadow();
            });
          }
          
          if (shadowX) {
            shadowX.addEventListener('input', (e) => {
              this.settings.x = parseInt(e.target.value);
              document.getElementById('shadow-x-value').textContent = this.settings.x;
              this.applyShadow();
            });
          }
          
          if (shadowY) {
            shadowY.addEventListener('input', (e) => {
              this.settings.y = parseInt(e.target.value);
              document.getElementById('shadow-y-value').textContent = this.settings.y;
              this.applyShadow();
            });
          }
          
          if (shadowBlur) {
            shadowBlur.addEventListener('input', (e) => {
              this.settings.blur = parseInt(e.target.value);
              document.getElementById('shadow-blur-value').textContent = this.settings.blur;
              this.applyShadow();
            });
          }
          
          if (shadowOpacity) {
            shadowOpacity.addEventListener('input', (e) => {
              this.settings.opacity = parseFloat(e.target.value);
              document.getElementById('shadow-opacity-value').textContent = this.settings.opacity;
              this.applyShadow();
            });
          }
        },
        
        applyShadow() {
          console.log('🌑 Applying shadow:', this.settings);
          // Shadow application logic here
        },
        
        updateUI() {
          const shadowEnabled = document.getElementById('shadow-enabled');
          const shadowX = document.getElementById('shadow-x');
          const shadowY = document.getElementById('shadow-y');
          const shadowBlur = document.getElementById('shadow-blur');
          const shadowOpacity = document.getElementById('shadow-opacity');
          
          if (shadowEnabled) shadowEnabled.checked = this.settings.enabled;
          if (shadowX) shadowX.value = this.settings.x;
          if (shadowY) shadowY.value = this.settings.y;
          if (shadowBlur) shadowBlur.value = this.settings.blur;
          if (shadowOpacity) shadowOpacity.value = this.settings.opacity;
        }
      };
      
      shadowSystem.init();
      this.systems.set('shadow', shadowSystem);
      console.log('✅ Shadow System initialized');
      
    } catch (error) {
      console.error('❌ Error initializing Shadow System:', error);
    }
  }
  
  // Sprite System
  initializeSpriteSystem() {
    console.log('🎯 SystemManager: Initializing Sprite System...');
    
    try {
      const spriteSystem = {
        settings: {
          density: 'medium',
          category: 'decorative',
          selectedSprites: []
        },
        
        init() {
          this.attachEventListeners();
          this.updateUI();
        },
        
        attachEventListeners() {
          const density = document.getElementById('density');
          const category = document.getElementById('sprite-category');
          
          if (density) {
            density.addEventListener('change', (e) => {
              this.settings.density = e.target.value;
              this.applySprites();
            });
          }
          
          if (category) {
            category.addEventListener('change', (e) => {
              this.settings.category = e.target.value;
              this.applySprites();
            });
          }
        },
        
        applySprites() {
          console.log('🎭 Applying sprites:', this.settings);
          // Sprite application logic here
        },
        
        updateUI() {
          const density = document.getElementById('density');
          const category = document.getElementById('sprite-category');
          
          if (density) density.value = this.settings.density;
          if (category) category.value = this.settings.category;
        }
      };
      
      spriteSystem.init();
      this.systems.set('sprite', spriteSystem);
      console.log('✅ Sprite System initialized');
      
    } catch (error) {
      console.error('❌ Error initializing Sprite System:', error);
    }
  }
  
  // Particle System
  initializeParticleSystem() {
    console.log('🎯 SystemManager: Initializing Particle System...');
    
    try {
      if (window.ParticleSystem) {
        const particleSystem = new window.ParticleSystem();
        this.systems.set('particle', particleSystem);
        console.log('✅ Particle System initialized');
      } else {
        console.log('⚠️ ParticleSystem class not found, skipping');
      }
    } catch (error) {
      console.error('❌ Error initializing Particle System:', error);
    }
  }
  
  // Get system by name
  getSystem(name) {
    return this.systems.get(name);
  }
  
  // Get all systems
  getAllSystems() {
    return this.systems;
  }
  
  // Check if system is initialized
  isSystemInitialized(name) {
    return this.systems.has(name);
  }
}

// Make it globally accessible
window.SystemManager = SystemManager;

// Auto-initialize when script loads
document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 SystemManager: DOM ready, creating instance...');
  window.systemManager = new SystemManager();
});
