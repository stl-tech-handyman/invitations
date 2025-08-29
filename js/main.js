// Main JavaScript file for Event Card Generator
// Core functionality and state management

import { 
  THEMES, 
  CUSTOM_THEME, 
  EDGE_STYLES, 
  OVERLAY_FILES, 
  TEXTURES, 
  IMAGES, 
  CUSTOM_BACKGROUNDS, 
  CUSTOM_DECORATIONS, 
  FONTS, 
  PAPER_SIZES, 
  QUALITY_DPI, 
  MARGIN_SIZES, 
  DEFAULT_SETTINGS,
  BACKGROUND_FRIENDLY_NAMES
} from './config.js';

import { loadPartials } from './partial-loader.js';

// Helper function to get DOM elements
const el = id => document.getElementById(id);

// Application state
const state = { seed: Math.random()*1e9|0, layout:'centered' };

// Random number generator
function rng(){ 
  state.seed ^= state.seed << 13; 
  state.seed ^= state.seed >> 17; 
  state.seed ^= state.seed << 5; 
  return Math.abs(state.seed) / 2**31; 
}

// Global shadow settings
let globalShadow = { ...DEFAULT_SETTINGS.globalShadow };

// Edge settings
let edgeSettings = { ...DEFAULT_SETTINGS.edgeSettings };

// Overlay settings
let overlaySettings = { ...DEFAULT_SETTINGS.overlaySettings };

// PDF configuration
let pdfConfig = { ...DEFAULT_SETTINGS.pdfConfig };

// Slideshow state
let slideshowInterval = null;
let slideshowPaused = false;
let currentInviteIndex = 0;
let savedInvitations = [];

/* === CORE FUNCTIONS === */

// Font management
function populateFonts(){
  const selTitle = el('font-title');
  const selNames = el('font-names');
  const selBody = el('font-body');
  FONTS.forEach(f=>{
    const o1 = new Option(`Title: ${f}`, f); selTitle.add(o1);
    const o2 = new Option(`Names: ${f}`, f); selNames.add(o2);
    const o3 = new Option(`Body: ${f}`, f); selBody.add(o3);
  });
  selTitle.value='Playfair Display'; selNames.value='Playfair Display'; selBody.value='Quicksand';
  updateFonts();
}

function googleFontsHref(){
  const families = new Set(['Quicksand:400,700']);
  families.add(`${el('font-title').value}:400,600,700`);
  families.add(`${el('font-names').value}:400,700`);
  families.add(`${el('font-body').value}:400,600,700`);
  const qs = Array.from(families).map(f=>`family=${encodeURIComponent(f)}`).join('&');
  return `https://fonts.googleapis.com/css2?${qs}&display=swap`;
}

function updateFonts(){
  const titleFont = el('font-title').value;
  const namesFont = el('font-names').value;
  const bodyFont = el('font-body').value;
  
  console.log('🔤 Updating fonts:', { titleFont, namesFont, bodyFont });
  
  el('gfonts').href = googleFontsHref();
  document.documentElement.style.setProperty('--title-font', `'${titleFont}', serif`);
  document.documentElement.style.setProperty('--names-font', `'${namesFont}', serif`);
  document.documentElement.style.setProperty('--body-font', `'${bodyFont}', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial`);
  el('fonts-link').href = `https://fonts.google.com/specimen/${encodeURIComponent(titleFont)}`;
  
  console.log('✅ Fonts updated successfully');
}

// Theme management
function setTheme(themeKey){
  let t;
  if (themeKey === 'custom') {
    t = CUSTOM_THEME.custom;
  } else {
    t = THEMES[themeKey];
  }
  
  if (t) {
    el('bg').style.background = `radial-gradient(1200px 800px at 10% -10%, rgba(255,255,255,.7), transparent),
 radial-gradient(1000px 700px at 110% 10%, rgba(255,255,255,.65), transparent),
 ${t.gradient}`;
    document.documentElement.style.setProperty('--accent', el('accent').value);
    document.documentElement.style.setProperty('--accent-2', el('accent2').value);
  }
}

// Sprite management
function updateSprites(){
  const themeKey = el('category').value;
  let currentTheme;
  
  if (themeKey === 'custom') {
    currentTheme = CUSTOM_THEME.custom;
  } else {
    currentTheme = THEMES[themeKey];
  }
  
  if (currentTheme) {
    console.log('🎭 Updating sprites for theme:', themeKey);
    
    // Use the new sprite manager if available
    if (window.spriteManager) {
      const density = +el('density').value;
      const scale = +el('scale').value;
      const animation = el('sprite-anim').value;
      
      window.spriteManager.generateRandomSprites(currentTheme, density, scale, animation);
    } else {
      // Fallback to old system
      drawSprites(currentTheme);
    }
    
    console.log('✅ Sprites updated');
  }
}

function drawSprites(theme){
  // Check if sprite manager is available and use it
  if (window.spriteManager) {
    const density = +el('density').value;
    const scale = +el('scale').value;
    const animation = el('sprite-anim').value;
    
    window.spriteManager.generateRandomSprites(theme, density, scale, animation);
    return;
  }
  
  // Fallback to old system
  const svg = el('sprites'); svg.innerHTML = '';
  const density = +el('density').value; const scale = +el('scale').value / 100;
  const anim = el('sprite-anim').value;
  for(let i=0;i<density;i++){
    const id = theme.sprites[i % theme.sprites.length];
    const use = document.createElementNS('http://www.w3.org/2000/svg','use');
    use.setAttributeNS('http://www.w3.org/1999/xlink','xlink:href',`#${id}`);
    const x = rng()*900, y = rng()*600 + (i%2? 100: 250);
    const r = (rng()*40 - 20); const s = (0.6 + rng()*0.9) * scale; const color = theme.palette[i % theme.palette.length];
    const g = document.createElementNS('http://www.w3.org/2000/svg','g');
    g.setAttribute('class','sprite');
    const dur = anim==='lively' ? (4 + rng()*3) : (anim==='gentle' ? (8 + rng()*5) : 0);
    const animStyle = dur ? `animation: floaty ${dur}s ease-in-out ${rng()*2}s infinite;` : '';
    g.setAttribute('transform',`translate(${x} ${y}) rotate(${r}) scale(${s})`);
    g.setAttribute('style',`color:${color}; ${animStyle}`);
    g.appendChild(use); svg.appendChild(g);
  }
}

// Background management
function textureStyle(){
  const kind = el('texture').value; const scale = +el('tex-scale').value; const fn = TEXTURES[kind];
  return fn ? fn(scale) : 'none';
}

function applyBackground(){
  const mode = el('bg-mode').value;
  const texLayer = el('texture-layer');
  const photo = el('photo');
  const bg = el('bg');
  
  console.log('🎨 Applying background mode:', mode);
  
  if (mode === 'gradient') {
    bg.style.opacity = '1';
    texLayer.style.display = 'none';
    photo.style.display = 'none';
    console.log('✅ Applied: Theme gradient only');
  } else if (mode === 'texture') {
    bg.style.opacity = '0';
    texLayer.style.background = textureStyle();
    texLayer.style.opacity = (+el('tex-opacity').value)/100;
    texLayer.style.display = 'block';
    photo.style.display = 'none';
    console.log('✅ Applied: Texture only');
  } else if (mode === 'image') {
    bg.style.opacity = '0';
    texLayer.style.display = 'none';
    photo.style.display = 'block';
    photo.style.opacity = (+el('img-opacity').value)/100;
    const blur = +el('img-blur').value;
    const bright = +el('img-bright').value/100;
    const vig = +el('img-vignette').value;
    photo.style.filter = `blur(${blur}px) brightness(${bright})`;
    photo.style.boxShadow = `inset 0 0 ${vig}px ${vig/2}px rgba(0,0,0,.25)`;
    console.log('✅ Applied: Image only');
  } else if (mode === 'grad+tex') {
    bg.style.opacity = '1';
    texLayer.style.background = textureStyle();
    texLayer.style.opacity = (+el('tex-opacity').value)/100;
    texLayer.style.display = 'block';
    photo.style.display = 'none';
    console.log('✅ Applied: Gradient + texture');
  } else if (mode === 'img+tex') {
    bg.style.opacity = '0';
    texLayer.style.background = textureStyle();
    texLayer.style.opacity = (+el('tex-opacity').value)/100;
    texLayer.style.display = 'block';
    photo.style.display = 'block';
    photo.style.opacity = (+el('img-opacity').value)/100;
    const blur = +el('img-blur').value;
    const bright = +el('img-bright').value/100;
    const vig = +el('img-vignette').value;
    photo.style.filter = `blur(${blur}px) brightness(${bright})`;
    photo.style.boxShadow = `inset 0 0 ${vig}px ${vig/2}px rgba(0,0,0,.25)`;
    console.log('✅ Applied: Image + texture');
  }
}

function setStockImage(){
  const key = el('stock-image').value;
  let backgroundImage = 'none';
  
  if (IMAGES[key]) {
    backgroundImage = IMAGES[key];
  } else if (CUSTOM_BACKGROUNDS[key]) {
    backgroundImage = `url('${CUSTOM_BACKGROUNDS[key]}')`;
  }
  
  el('photo').style.backgroundImage = backgroundImage;
}

// Text management
function updateText(){
  el('pill-out').textContent = el('pill').value.trim();
  el('title-out').textContent = el('title').value.trim();
  el('subtitle-out').textContent = el('subtitle').value.trim();
  el('names-out').textContent = el('names').value.trim();
  el('date-out').textContent = el('date').value.trim();
  el('time-out').textContent = el('time').value.trim();
  el('location-out').textContent = el('location').value.trim();
  el('rsvp-out').textContent = el('rsvp').value.trim();
  
  const accentColor = el('accent').value;
  const accent2Color = el('accent2').value;
  
  document.documentElement.style.setProperty('--accent', accentColor);
  document.documentElement.style.setProperty('--accent-2', accent2Color);
  
  console.log('🎨 Colors updated:', { primary: accentColor, secondary: accent2Color });
}

// Layout and effects
function swapLayout(){ 
  const names = el('names'); 
  const t = el('title').value; 
  el('title').value = names.value; 
  names.value = t; 
  updateText(); 
}

function setLayout(){
  const stage = el('stage'); 
  stage.classList.remove('style-centered','style-banner','style-split');
  const val = el('layout').value; 
  stage.classList.add('style-'+val);
}

function setEffect(){
  const stage = el('stage'); 
  stage.classList.remove('anim-fade','anim-pop');
  const val = el('effect').value; 
  if(val==='fade') stage.classList.add('anim-fade'); 
  if(val==='pop') stage.classList.add('anim-pop');
  void stage.offsetWidth;
}

function replay(){ 
  console.log('🔄 Replaying animations...');
  setEffect();
  
  const currentTheme = THEMES[el('category').value] || CUSTOM_THEME.custom;
  if (currentTheme) {
    drawSprites(currentTheme);
    console.log('✅ Sprite animations replayed');
  }
  
  if (el('parallax').value === 'on') {
    setupParallax();
  }
}

function setupParallax(){
  const enabled = el('parallax').value==='on';
  const stage = el('stage');
  stage.onmousemove = enabled ? (e=>{
    const r = stage.getBoundingClientRect();
    const px = (e.clientX - r.left)/r.width - .5; 
    const py = (e.clientY - r.top)/r.height - .5;
    el('sprites').style.transform = `translate(${px*-12}px, ${py*-10}px)`;
    el('inner').style.transform = `translate(${px*8}px, ${py*6}px)`;
    el('bg').style.transform = `translate(${px*4}px, ${py*4}px)`;
  }) : null;
  if(!enabled){ 
    el('sprites').style.transform = el('inner').style.transform = el('bg').style.transform = 'none'; 
  }
}

// Collapsible groups functionality
function toggleGroup(header) {
  const content = header.nextElementSibling;
  const icon = header.querySelector('.collapse-icon');
  
  if (content.classList.contains('collapsed')) {
    content.classList.remove('collapsed');
    icon.classList.remove('collapsed');
    icon.textContent = '▼';
    console.log('📂 Group expanded:', header.querySelector('h3').textContent);
  } else {
    content.classList.add('collapsed');
    icon.classList.add('collapsed');
    icon.textContent = '▶';
    console.log('📁 Group collapsed:', header.querySelector('h3').textContent);
  }
}

// Make toggleGroup globally available for HTML onclick attributes
window.toggleGroup = toggleGroup;

// Initialize all groups based on data-collapsed attribute
document.addEventListener('DOMContentLoaded', () => {
  const groupHeaders = document.querySelectorAll('.group-header');
  groupHeaders.forEach(header => {
    const group = header.closest('.group');
    const content = header.nextElementSibling;
    
    if (content && content.classList.contains('group-content')) {
      if (group && group.dataset.collapsed === 'true') {
        header.classList.add('collapsed');
        content.classList.add('collapsed');
        const icon = header.querySelector('.collapse-icon');
        if (icon) {
          icon.classList.add('collapsed');
          icon.textContent = '▶';
        }
      } else {
        content.classList.remove('collapsed');
        const icon = header.querySelector('.collapse-icon');
        if (icon) {
          icon.classList.remove('collapsed');
          icon.textContent = '▼';
        }
      }
    }
  });
  console.log('✅ Collapsible groups initialized with data-collapsed support');
});

// Initialize application
populateFonts(); 
updateText(); 
setTheme('pool'); 
updateSprites(); 
setStockImage(); 
setLayout(); 
setEffect(); 
setupParallax(); 
applyBackground();
loadPartials();

// Export functions for use in other modules
export {
  el,
  state,
  rng,
  globalShadow,
  edgeSettings,
  overlaySettings,
  pdfConfig,
  slideshowInterval,
  slideshowPaused,
  currentInviteIndex,
  savedInvitations,
  populateFonts,
  updateFonts,
  setTheme,
  updateSprites,
  drawSprites,
  textureStyle,
  applyBackground,
  setStockImage,
  updateText,
  swapLayout,
  setLayout,
  setEffect,
  replay,
  setupParallax,
  toggleGroup
};
