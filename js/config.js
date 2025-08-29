// Configuration file for Event Card Generator
// Contains all constants, themes, and configuration data

/* === THEMES === */
export const THEMES = {
  pool: { 
    gradient: 'linear-gradient(180deg,#b3e5ff 0%, #e6f9ff 100%)', 
    palette: ['#2ec5ff','#ffd166','#06d6a0','#118ab2','#ef476f'], 
    sprites: ['floatie','sunglasses','flipflop'] 
  },
  birthday: { 
    gradient: 'linear-gradient(180deg,#fff5d6 0%, #ffe9ef 100%)', 
    palette: ['#ff6b6b','#ffd166','#4ecdc4','#45b7d1','#c7f464'], 
    sprites: ['balloon','confetti','cake'] 
  },
  baby: { 
    gradient: 'linear-gradient(180deg,#e8f3ff 0%, #f7f7fb 100%)', 
    palette: ['#a3cef1','#bde0fe','#ffc8dd','#ffafcc','#cdb4db'], 
    sprites: ['cloud','star','duck'] 
  },
  graduation: { 
    gradient: 'linear-gradient(180deg,#fff9e6 0%, #f1f5f9 100%)', 
    palette: ['#0f172a','#f59e0b','#334155','#a8a29e','#ef4444'], 
    sprites: ['cap','ribbon','confetti'] 
  },
  holiday: { 
    gradient: 'linear-gradient(180deg,#e5f6ff 0%, #f0fff4 100%)', 
    palette: ['#2563eb','#16a34a','#dc2626','#eab308','#0891b2'], 
    sprites: ['snow','tree','star'] 
  }
};

/* === CUSTOM THEME === */
export const CUSTOM_THEME = {
  custom: { 
    gradient: 'linear-gradient(180deg,#f0f8ff 0%, #e6f3ff 100%)', 
    palette: ['#4a90e2','#f39c12','#e74c3c','#27ae60','#9b59b6'], 
    sprites: ['balloons','flowers','stars'] 
  }
};

/* === EDGE STYLES === */
export const EDGE_STYLES = {
  none: null,
  torn: {
    default: 'M0,0 Q25,5 50,0 T100,0 L100,100 Q75,95 50,100 T0,100 Z',
    rough: 'M0,0 Q20,8 40,2 Q60,-3 80,1 Q90,4 100,0 L100,100 Q80,92 60,98 Q40,103 20,97 Q10,95 0,100 Z',
    smooth: 'M0,0 Q30,3 60,0 Q80,2 100,0 L100,100 Q70,97 40,100 Q20,98 0,100 Z',
    sharp: 'M0,0 L15,5 L30,0 L45,8 L60,2 L75,0 L90,6 L100,0 L100,100 L85,95 L70,100 L55,92 L40,98 L25,100 L10,94 L0,100 Z',
    soft: 'M0,0 Q20,2 40,0 Q60,1 80,0 Q90,1 100,0 L100,100 Q80,98 60,100 Q40,99 20,100 Q10,99 0,100 Z'
  },
  scalloped: {
    default: 'M0,0 Q25,15 50,0 Q75,15 100,0 L100,100 Q75,85 50,100 Q25,85 0,100 Z',
    rough: 'M0,0 Q20,18 40,2 Q60,20 80,0 Q90,12 100,0 L100,100 Q80,82 60,100 Q40,80 20,98 Q10,85 0,100 Z',
    smooth: 'M0,0 Q30,12 60,0 Q80,15 100,0 L100,100 Q70,88 40,100 Q20,85 0,100 Z',
    sharp: 'M0,0 L25,20 L50,0 L75,20 L100,0 L100,100 L75,80 L50,100 L25,80 L0,100 Z',
    soft: 'M0,0 Q25,10 50,0 Q75,10 100,0 L100,100 Q75,90 50,100 Q25,90 0,100 Z'
  },
  zigzag: {
    default: 'M0,0 L25,15 L50,0 L75,15 L100,0 L100,100 L75,85 L50,100 L25,85 L0,100 Z',
    rough: 'M0,0 L20,18 L40,2 L60,20 L80,0 L100,18 L100,100 L80,82 L60,100 L40,80 L20,100 L0,82 Z',
    smooth: 'M0,0 Q25,15 50,0 Q75,15 100,0 L100,100 Q75,85 50,100 Q25,85 0,100 Z',
    sharp: 'M0,0 L25,20 L50,0 L75,20 L100,0 L100,100 L75,80 L50,100 L25,80 L0,100 Z',
    soft: 'M0,0 Q25,12 50,0 Q75,12 100,0 L100,100 Q75,88 50,100 Q25,88 0,100 Z'
  },
  wave: {
    default: 'M0,0 Q25,10 50,0 Q75,10 100,0 L100,100 Q75,90 50,100 Q25,90 0,100 Z',
    rough: 'M0,0 Q20,12 40,0 Q60,15 80,0 Q90,8 100,0 L100,100 Q80,88 60,100 Q40,85 20,100 Q10,92 0,100 Z',
    smooth: 'M0,0 Q30,8 60,0 Q80,12 100,0 L100,100 Q70,92 40,100 Q20,88 0,100 Z',
    sharp: 'M0,0 L25,15 L50,0 L75,15 L100,0 L100,100 L75,85 L50,100 L25,85 L0,100 Z',
    soft: 'M0,0 Q25,6 50,0 Q75,6 100,0 L100,100 Q75,94 50,100 Q25,94 0,100 Z'
  },
  spikes: {
    default: 'M0,0 L25,20 L50,0 L75,20 L100,0 L100,100 L75,80 L50,100 L25,80 L0,100 Z',
    rough: 'M0,0 L20,22 L40,0 L60,25 L80,0 L100,18 L100,100 L80,78 L60,100 L40,75 L20,100 L0,78 Z',
    smooth: 'M0,0 Q25,18 50,0 Q75,18 100,0 L100,100 Q75,82 50,100 Q25,82 0,100 Z',
    sharp: 'M0,0 L25,25 L50,0 L75,25 L100,0 L100,100 L75,75 L50,100 L25,75 L0,100 Z',
    soft: 'M0,0 Q25,15 50,0 Q75,15 100,0 L100,100 Q75,85 50,100 Q25,85 0,100 Z'
  },
  dots: {
    default: 'M0,0 Q25,5 50,0 Q75,5 100,0 L100,100 Q75,95 50,100 Q25,95 0,100 Z',
    rough: 'M0,0 Q20,8 40,0 Q60,10 80,0 Q90,3 100,0 L100,100 Q80,92 60,100 Q40,90 20,100 Q10,97 0,100 Z',
    smooth: 'M0,0 Q30,3 60,0 Q80,8 100,0 L100,100 Q70,97 40,100 Q20,92 0,100 Z',
    sharp: 'M0,0 L25,10 L50,0 L75,10 L100,0 L100,100 L75,90 L50,100 L25,90 L0,100 Z',
    soft: 'M0,0 Q25,4 50,0 Q75,4 100,0 L100,100 Q75,96 50,100 Q25,96 0,100 Z'
  },
  geometric: {
    default: 'M0,0 L25,15 L50,0 L75,15 L100,0 L100,100 L75,85 L50,100 L25,85 L0,100 Z',
    rough: 'M0,0 L20,18 L40,0 L60,20 L80,0 L100,18 L100,100 L80,82 L60,100 L40,80 L20,100 L0,82 Z',
    smooth: 'M0,0 Q25,12 50,0 Q75,12 100,0 L100,100 Q75,88 50,100 Q25,88 0,100 Z',
    sharp: 'M0,0 L25,20 L50,0 L75,20 L100,0 L100,100 L75,80 L50,100 L25,80 L0,100 Z',
    soft: 'M0,0 Q25,10 50,0 Q75,10 100,100 Q75,90 50,100 Q25,90 0,100 Z'
  },
  organic: {
    default: 'M0,0 Q25,8 50,0 Q75,8 100,0 L100,100 Q75,92 50,100 Q25,92 0,100 Z',
    rough: 'M0,0 Q20,12 40,0 Q60,15 80,0 Q90,6 100,0 L100,100 Q80,88 60,100 Q40,85 20,100 Q10,94 0,100 Z',
    smooth: 'M0,0 Q30,6 60,0 Q80,10 100,0 L100,100 Q70,94 40,100 Q20,90 0,100 Z',
    sharp: 'M0,0 L25,18 L50,0 L75,18 L100,0 L100,100 L75,82 L50,100 L25,82 L0,100 Z',
    soft: 'M0,0 Q25,8 50,0 Q75,8 100,0 L100,100 Q75,92 50,100 Q25,92 0,100 Z'
  },
  vintage: {
    default: 'M0,0 Q25,10 50,0 Q75,10 100,0 L100,100 Q75,90 50,100 Q25,90 0,100 Z',
    rough: 'M0,0 Q20,15 40,0 Q60,18 80,0 Q90,8 100,0 L100,100 Q80,85 60,100 Q40,82 20,100 Q10,92 0,100 Z',
    smooth: 'M0,0 Q30,8 60,0 Q80,12 100,0 L100,100 Q70,92 40,100 Q20,88 0,100 Z',
    sharp: 'M0,0 L25,20 L50,0 L75,20 L100,0 L100,100 L75,80 L50,100 L25,80 L0,100 Z',
    soft: 'M0,0 Q25,12 50,0 Q75,12 100,0 L100,100 Q75,88 50,100 Q25,88 0,100 Z'
  }
};

/* === OVERLAY FILES === */
export const OVERLAY_FILES = {
  'frame-elegant': 'elements/overlays/frame-elegant.svg',
  'frame-vintage': 'elements/overlays/frame-vintage.svg',
  'frame-modern': 'elements/overlays/frame-modern.svg',
  'frame-playful': 'elements/overlays/frame-playful.svg',
  'frame-minimal': 'elements/overlays/frame-minimal.svg',
  'frame-ornate': 'elements/overlays/frame-ornate.svg',
  'frame-nature': 'elements/overlays/frame-nature.svg'
};

/* === TEXTURES === */
export const TEXTURES = {
  stripes: s => `repeating-linear-gradient(45deg, rgba(255,255,255,.0) 0, rgba(255,255,255,.0) ${s/2}px, rgba(0,0,0,.06) ${s/2}px, rgba(0,0,0,.06) ${s}px)`,
  dots: s => `radial-gradient(circle at 25% 25%, rgba(0,0,0,.08) 12%, transparent 13%) ${s/2}px ${s/2}px / ${s}px ${s}px repeat`,
  grid: s => `repeating-linear-gradient(0deg, rgba(0,0,0,.06), rgba(0,0,0,.06) 1px, transparent 1px, transparent ${s}px), repeating-linear-gradient(90deg, rgba(0,0,0,.06), rgba(0,0,0,.06) 1px, transparent 1px, transparent ${s}px)`,
  crosshatch: s => `repeating-linear-gradient(45deg, rgba(0,0,0,.05) 0, rgba(0,0,0,.05) 1px, transparent 1px, transparent ${s}px), repeating-linear-gradient(-45deg, rgba(0,0,0,.05) 0, rgba(0,0,0,.05) 1px, transparent 1px, transparent ${s}px)`,
  chevron: s => `repeating-linear-gradient(135deg, rgba(0,0,0,.05) 0, rgba(0,0,0,.05) ${s/4}px, transparent ${s/4}px, transparent ${s/2}px), repeating-linear-gradient(45deg, rgba(0,0,0,.05) 0, rgba(0,0,0,.05) ${s/4}px, transparent ${s/4}px, transparent ${s/2}px)`,
  checker: s => `linear-gradient(45deg, rgba(0,0,0,.04) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.04) 75%), linear-gradient(45deg, rgba(0,0,0,.04) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.04) 75%) ${s/2}px ${s/2}px / ${s}px ${s}px`,
  sprinkles: s => `radial-gradient(circle, rgba(0,0,0,.08) 2px, transparent 2px) 0 0 / ${s}px ${s}px repeat, radial-gradient(circle, rgba(0,0,0,.06) 1px, transparent 1px) ${s/2}px ${s/2}px / ${s}px ${s}px repeat`,
  pluses: s => `repeating-linear-gradient(0deg, transparent 0 ${s-2}px, rgba(0,0,0,.06) ${s-2}px ${s-1}px, transparent ${s-1}px ${s}px), repeating-linear-gradient(90deg, transparent 0 ${s-2}px, rgba(0,0,0,.06) ${s-2}px ${s-1}px, transparent ${s-1}px ${s}px)`,
  waves: s => `radial-gradient(50% 8px at 0 8px, rgba(0,0,0,.06) 50%, transparent 51%) 0 0/ ${s}px ${s}px repeat-x`,
  noise: _ => `url('data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"4\" stitchTiles=\"stitch\"/></filter><rect width=\"100%\" height=\"100%\" filter=\"url(#n)\" opacity=\"0.08\"/></svg>`)}')`
};

/* === STOCK IMAGES === */
export const IMAGES = {
  pool: `url("data:image/svg+xml;base64,${btoa(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 900 1350'><defs><linearGradient id='g' x1='0' y1='0' x2='0' y2='1'><stop offset='0' stop-color='#87e0ff'/><stop offset='1' stop-color='#d8f7ff'/></linearGradient></defs><rect width='900' height='1350' fill='url(#g)'/><g fill='rgba(0,0,0,.05)'><circle cx='120' cy='180' r='80'/><circle cx='240' cy='300' r='60'/><circle cx='420' cy='220' r='70'/><circle cx='700' cy='180' r='90'/></g><g opacity='.6'><path d='M0 900 Q 200 860 320 900 T 640 900 T 900 900 V1350 H0Z' fill='#b3e5ff'/></g></svg>`)}")`,
  confetti: `url("data:image/svg+xml;base64,${btoa(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 900 1350'><rect width='900' height='1350' fill='#fff6f3'/><g><circle cx='120' cy='120' r='10' fill='#ff6b6b'/><rect x='200' y='160' width='12' height='24' fill='#ffd166'/><circle cx='320' cy='240' r='8' fill='#06d6a0'/><rect x='520' y='120' width='14' height='14' fill='#118ab2'/><circle cx='700' cy='200' r='12' fill='#ef476f'/></g><g opacity='.4'><circle cx='140' cy='480' r='10' fill='#ffd166'/><rect x='280' y='520' width='16' height='10' fill='#ef476f'/><circle cx='520' cy='620' r='8' fill='#06d6a0'/></g></svg>`)}")`,
  clouds: `url("data:image/svg+xml;base64,${btoa(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 900 1350'><defs><linearGradient id='s' x1='0' y1='0' x2='0' y2='1'><stop offset='0' stop-color='#e8f1ff'/><stop offset='1' stop-color='#ffffff'/></linearGradient></defs><rect width='900' height='1350' fill='url(#s)'/><g fill='#ffffff'><ellipse cx='200' cy='220' rx='160' ry='70'/><ellipse cx='320' cy='200' rx='120' ry='60'/><ellipse cx='520' cy='240' rx='180' ry='80'/><ellipse cx='720' cy='210' rx='140' ry='70'/></g></svg>`)}")`
};

/* === CUSTOM BACKGROUNDS === */
export const CUSTOM_BACKGROUNDS = {
  'i-1': 'backgrounds/i-1.jpg',
  'i-2': 'backgrounds/i-2.jpg', 
  'i-3': 'backgrounds/i-3.webp',
  'i-4': 'backgrounds/i-4.jpeg',
  'i-5': 'backgrounds/i-5.jpg',
  'i-6': 'backgrounds/i-6.png',
  'i-7': 'backgrounds/i-7.png',
  'i-8': 'backgrounds/i-8.png',
  'beach': 'elements/backgrounds/beach.svg',
  'forest': 'elements/backgrounds/forest.svg',
  'abstract': 'elements/backgrounds/abstract.svg',
  'geometric': 'elements/backgrounds/geometric.svg',
  'space': 'elements/backgrounds/space.svg',
  'watercolor': 'elements/backgrounds/watercolor.svg',
  'tech': 'elements/backgrounds/tech.svg',
  'zen': 'elements/backgrounds/zen.svg',
  'retro': 'elements/backgrounds/retro.svg',
  'neon': 'elements/backgrounds/neon.svg',
  'artistic': 'elements/backgrounds/artistic.svg',
  'nature': 'elements/backgrounds/nature.svg',
  'elegant': 'elements/backgrounds/elegant.svg',
  'playful': 'elements/backgrounds/playful.svg',
  'modern': 'elements/backgrounds/modern.svg',
  'vintage': 'elements/backgrounds/vintage.svg',
  'industrial': 'elements/backgrounds/industrial.svg',
  'festive': 'elements/backgrounds/festive.svg',
  'abstract2': 'elements/backgrounds/abstract2.svg',
  'cosmic': 'elements/backgrounds/cosmic.svg',
  'marble': 'elements/backgrounds/marble.svg',
  'aurora': 'elements/backgrounds/aurora.svg',
  'geometric2': 'elements/backgrounds/geometric2.svg',
  'floral': 'elements/backgrounds/floral.svg',
  'abstract3': 'elements/backgrounds/abstract3.svg',
  'cyberpunk': 'elements/backgrounds/cyberpunk.svg',
  'sunset': 'elements/backgrounds/sunset.svg',
  'abstract4': 'elements/backgrounds/abstract4.svg',
  'watercolor2': 'elements/backgrounds/watercolor2.svg',
  'abstract5': 'elements/backgrounds/abstract5.svg',
  'abstract6': 'elements/backgrounds/abstract6.svg',
  'abstract7': 'elements/backgrounds/abstract7.svg',
  'abstract8': 'elements/backgrounds/abstract8.svg'
};

/* === CUSTOM DECORATIONS === */
export const CUSTOM_DECORATIONS = {
  'balloons': 'elements/decorations/balloons.svg',
  'flowers': 'elements/decorations/flowers.svg', 
  'stars': 'elements/decorations/stars.svg',
  'i-1': 'elements/i-1.webp',
  'i-2': 'elements/i-2.png',
  'i-3': 'elements/i-3.png',
  'i-4': 'elements/i-4.png'
};

/* === FONTS === */
export const FONTS = [
  'Playfair Display', 'Bebas Neue', 'Abril Fatface', 'Poppins', 'Montserrat', 'Raleway', 'Fredoka', 'Nunito', 'Merriweather', 'Pacifico', 'Great Vibes', 'Lobster Two', 'Baloo 2', 'Carter One', 'Righteous', 'Russo One'
];

/* === PAPER SIZES === */
export const PAPER_SIZES = {
  a4: { width: 210, height: 297, name: 'A4' },
  letter: { width: 215.9, height: 279.4, name: 'US Letter' },
  a5: { width: 148, height: 210, name: 'A5' },
  custom: { width: 200, height: 200, name: 'Custom' }
};

/* === QUALITY DPI === */
export const QUALITY_DPI = {
  high: 300,
  medium: 150,
  low: 72
};

/* === MARGIN SIZES === */
export const MARGIN_SIZES = {
  none: 0,
  minimal: 5,
  standard: 10
};

/* === DEFAULT SETTINGS === */
export const DEFAULT_SETTINGS = {
  globalShadow: {
    x: 2,
    y: 2,
    blur: 4,
    color: '#000000',
    opacity: 0.3
  },
  edgeSettings: {
    style: 'none',
    thickness: 3,
    opacity: 0.8,
    color: '#000000',
    variant: 'default'
  },
  overlaySettings: {
    style: 'frame-elegant',
    opacity: 0.8,
    scale: 0.95,
    position: 'center',
    blend: 'normal'
  },
  pdfConfig: {
    paperSize: 'a4',
    orientation: 'portrait',
    quality: 'medium',
    margins: 'minimal',
    includeBackground: true,
    includeShadows: true
  }
};

/* === FRIENDLY NAMES FOR BACKGROUNDS === */
export const BACKGROUND_FRIENDLY_NAMES = {
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
