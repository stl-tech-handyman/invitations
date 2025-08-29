// Event Handlers for Event Card Generator

import { 
  el, 
  state, 
  updateText, 
  setTheme, 
  updateSprites, 
  drawSprites, 
  applyBackground, 
  setStockImage, 
  setLayout, 
  setEffect, 
  setupParallax, 
  swapLayout, 
  replay,
  updateFonts,
  THEMES,
  CUSTOM_THEME,
  CUSTOM_BACKGROUNDS,
  TEXTURES
} from './main.js';

// Wire inputs
['pill','title','subtitle','names','date','time','location','rsvp','accent','accent2'].forEach(id=>{
  el(id).addEventListener('input',()=>{
    updateText(); 
    setTheme(el('category').value);
    console.log('📝 Text updated for:', id);
  });
});

['density','scale','sprite-anim'].forEach(id=>{ 
  el(id).addEventListener('input',()=>updateSprites()); 
});

['tex-opacity','tex-scale','texture','bg-mode','img-opacity','img-blur','img-bright','img-vignette'].forEach(id=>{ 
  el(id).addEventListener('input',applyBackground); 
});

el('stock-image').addEventListener('change',()=>{ 
  setStockImage(); 
  applyBackground(); 
});

el('img-upload').addEventListener('change', (e)=>{
  const f = e.target.files && e.target.files[0]; 
  if(!f) return; 
  const reader = new FileReader(); 
  reader.onload = ev=>{ 
    el('photo').style.backgroundImage = `url('${ev.target.result}')`; 
    applyBackground(); 
  }; 
  reader.readAsDataURL(f);
});

// Drag and Drop functionality
const dropZone = el('drop-zone');

dropZone.addEventListener('dragover', (e) => {
  e.preventDefault();
  dropZone.classList.add('dragover');
});

dropZone.addEventListener('dragleave', (e) => {
  e.preventDefault();
  dropZone.classList.remove('dragover');
});

dropZone.addEventListener('drop', (e) => {
  e.preventDefault();
  dropZone.classList.remove('dragover');
  
  const files = e.dataTransfer.files;
  if (files.length > 0) {
    const file = files[0];
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        el('photo').style.backgroundImage = `url('${ev.target.result}')`;
        // Set background mode to image when image is dropped
        el('bg-mode').value = 'image';
        applyBackground();
        console.log('✅ Image dropped and loaded:', file.name);
      };
      reader.readAsDataURL(file);
    } else {
      console.error('❌ Dropped file is not an image:', file.type);
    }
  }
});

el('layout').addEventListener('change', setLayout);
el('effect').addEventListener('change', setEffect);
el('parallax').addEventListener('change', setupParallax);
el('category').addEventListener('change',()=>{ 
  setTheme(el('category').value); 
});

el('randomize').addEventListener('click',()=>{ 
  console.log('🔀 Randomizing sprites...');
  
  // Generate new random seed
  state.seed = (Math.random()*1e9)|0; 
  
  // Get current theme
  const currentTheme = THEMES[el('category').value] || CUSTOM_THEME.custom;
  
  if (currentTheme) {
    // Redraw sprites with new random positions
    drawSprites(currentTheme);
    console.log('✅ Sprites randomized with new seed:', state.seed);
  } else {
    console.error('❌ No theme found for randomization');
  }
});

el('swap').addEventListener('click',swapLayout);
el('replay').addEventListener('click',replay);
el('pdf').addEventListener('click',()=>{ window.print() });

['font-title','font-names','font-body'].forEach(id=> {
  el(id).addEventListener('change', () => {
    updateFonts();
    updateText(); // Also update text to apply new fonts
    console.log('🔤 Font changed for:', id);
  });
});

// Visibility toggles for controls depending on mode
el('bg-mode').addEventListener('change',()=>{
  const mode = el('bg-mode').value;
  console.log('🔄 Background mode changed to:', mode);
  
  // Show/hide texture controls
  const texControls = el('tex-controls');
  const imgControls = el('img-controls');
  
  if (mode.includes('tex') || mode === 'texture') {
    texControls.style.display = 'block';
  } else {
    texControls.style.display = 'none';
  }
  
  if (mode.includes('img') || mode === 'image') {
    imgControls.style.display = 'block';
  } else {
    imgControls.style.display = 'none';
  }
  
  // Apply the background changes
  applyBackground();
});

// Initialize control visibility based on default background mode
document.addEventListener('DOMContentLoaded', () => {
  const initialMode = el('bg-mode').value;
  el('tex-controls').style.display = (initialMode.includes('tex') || initialMode === 'texture') ? 'block' : 'none';
  el('img-controls').style.display = (initialMode.includes('img') || initialMode === 'image') ? 'block' : 'none';
  
  console.log('✅ Control visibility initialized');
});

// Add random elements button
function addRandomElementsButton() {
  const actionsSection = document.querySelector('.actions');
  if (!actionsSection) return;
  
  // Create random elements button
  const randomBtn = document.createElement('button');
  randomBtn.id = 'random-elements';
  randomBtn.className = 'ghost';
  randomBtn.style.cssText = 'background: #9C27B0; color: white;';
  randomBtn.textContent = '🎲 Random Elements';
  randomBtn.title = 'Load random background, theme, texture, and settings';
  
  randomBtn.addEventListener('click', () => {
    loadRandomElements();
  });
  
  actionsSection.appendChild(randomBtn);
  console.log('✅ Random elements button added');
}

function loadRandomElements() {
  console.log('🎲 Randomizing elements...');
  
  // Randomly select a background
  const backgrounds = Object.keys(CUSTOM_BACKGROUNDS);
  const randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  console.log('Selected background:', randomBg);
  
  // Randomly select a theme
  const themeKeys = Object.keys(THEMES);
  const randomTheme = themeKeys[Math.floor(Math.random() * themeKeys.length)];
  console.log('Selected theme:', randomTheme);
  
  // Randomly select background mode
  const bgModes = ['gradient', 'texture', 'image', 'grad+tex', 'img+tex'];
  const randomBgMode = bgModes[Math.floor(Math.random() * bgModes.length)];
  console.log('Selected background mode:', randomBgMode);
  
  // Randomly select texture
  const textureKeys = Object.keys(TEXTURES);
  const randomTexture = textureKeys[Math.floor(Math.random() * textureKeys.length)];
  console.log('Selected texture:', randomTexture);
  
  // Apply random background
  el('stock-image').value = randomBg;
  setStockImage();
  
  // Apply random theme
  el('category').value = randomTheme;
  setTheme(randomTheme);
  
  // Apply random background mode
  el('bg-mode').value = randomBgMode;
  
  // Apply random texture
  el('texture').value = randomTexture;
  
  // Randomize texture settings
  el('tex-opacity').value = Math.floor(Math.random() * 80) + 20; // 20-100
  el('tex-scale').value = Math.floor(Math.random() * 120) + 60; // 60-180
  
  // Randomize sprite settings
  el('density').value = Math.floor(Math.random() * 30) + 10; // 10-40
  el('scale').value = Math.floor(Math.random() * 60) + 80; // 80-140
  
  // Randomize colors
  const randomAccent = '#' + Math.floor(Math.random()*16777215).toString(16);
  const randomAccent2 = '#' + Math.floor(Math.random()*16777215).toString(16);
  el('accent').value = randomAccent;
  el('accent2').value = randomAccent2;
  
  // Randomize layout and effects
  const layouts = ['centered', 'banner', 'split'];
  const effects = ['none', 'fade', 'pop'];
  const spriteAnims = ['off', 'gentle', 'lively'];
  const parallaxModes = ['off', 'on'];
  
  el('layout').value = layouts[Math.floor(Math.random() * layouts.length)];
  el('effect').value = effects[Math.floor(Math.random() * effects.length)];
  el('sprite-anim').value = spriteAnims[Math.floor(Math.random() * spriteAnims.length)];
  el('parallax').value = parallaxModes[Math.floor(Math.random() * parallaxModes.length)];
  
  // Apply all changes
  updateText();
  updateSprites();
  setLayout();
  setEffect();
  setupParallax();
  applyBackground();
  
  console.log('🎲 Random elements loaded successfully!', { 
    background: randomBg, 
    theme: randomTheme, 
    backgroundMode: randomBgMode,
    texture: randomTexture,
    accent: randomAccent,
    accent2: randomAccent2
  });
}

// Add random elements button after a delay
setTimeout(addRandomElementsButton, 500);

// Function to refresh backgrounds dropdown
function refreshBackgroundsDropdown() {
  console.log('🔄 Refreshing backgrounds dropdown...');
  
  const stockImageSelect = el('stock-image');
  const svgOptgroup = stockImageSelect.querySelector('optgroup[label="SVG Backgrounds"]');
  
  if (svgOptgroup) {
    // Clear existing SVG options
    svgOptgroup.innerHTML = '';
    
    // Add all available SVG backgrounds
    Object.keys(CUSTOM_BACKGROUNDS).forEach(key => {
      if (key.endsWith('.svg')) {
        const option = document.createElement('option');
        option.value = key;
        
        // Create friendly names for the backgrounds
        const friendlyNames = {
          'beach.svg': 'Beach Scene',
          'forest.svg': 'Forest Scene',
          'abstract.svg': 'Abstract Geometric',
          'geometric.svg': 'Modern Geometric',
          'space.svg': 'Space & Stars',
          'watercolor.svg': 'Watercolor Art',
          'tech.svg': 'Tech & Digital',
          'zen.svg': 'Zen & Minimal',
          'retro.svg': 'Retro & Vintage',
          'neon.svg': 'Neon & Cyberpunk',
          'artistic.svg': 'Artistic & Painterly',
          'nature.svg': 'Nature & Organic',
          'elegant.svg': 'Elegant & Refined',
          'playful.svg': 'Playful & Fun',
          'modern.svg': 'Modern & Clean',
          'vintage.svg': 'Vintage & Classic',
          'industrial.svg': 'Industrial & Mechanical',
          'festive.svg': 'Festive & Celebration',
          'abstract2.svg': 'Abstract Curves',
          'cosmic.svg': 'Cosmic Space',
          'marble.svg': 'Elegant Marble',
          'aurora.svg': 'Aurora Borealis',
          'geometric2.svg': 'Geometric Patterns',
          'floral.svg': 'Delicate Floral',
          'abstract3.svg': 'Abstract Curves 2',
          'cyberpunk.svg': 'Cyberpunk Grid',
          'sunset.svg': 'Warm Sunset',
          'abstract4.svg': 'Abstract Triangles',
          'watercolor2.svg': 'Watercolor Blobs',
          'abstract5.svg': 'Organic Shapes',
          'abstract6.svg': 'Wave Patterns',
          'abstract7.svg': 'Dot Matrix',
          'abstract8.svg': 'Hexagonal Grid'
        };
        
        option.textContent = friendlyNames[key] || key.replace('.svg', '');
        svgOptgroup.appendChild(option);
      }
    });
    
    console.log(`✅ Refreshed backgrounds dropdown with ${Object.keys(CUSTOM_BACKGROUNDS).filter(k => k.endsWith('.svg')).length} SVG backgrounds`);
  }
}

// Auto-refresh backgrounds on page load and every 30 seconds
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(refreshBackgroundsDropdown, 1000);
  
  // Set up periodic refresh
  setInterval(refreshBackgroundsDropdown, 30000);
});

// Add refresh button to backgrounds section
function addRefreshButton() {
  const imgControls = el('img-controls');
  if (imgControls && !imgControls.querySelector('.refresh-btn')) {
    const refreshBtn = document.createElement('button');
    refreshBtn.className = 'refresh-btn';
    refreshBtn.innerHTML = '🔄 Refresh';
    refreshBtn.style.cssText = `
      background: var(--accent);
      color: white;
      border: none;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 11px;
      cursor: pointer;
      margin-left: 8px;
    `;
    refreshBtn.onclick = refreshBackgroundsDropdown;
    
    const title = imgControls.querySelector('h4');
    if (title) {
      title.appendChild(refreshBtn);
    }
  }
}

// Add refresh button after a delay
setTimeout(addRefreshButton, 2000);
