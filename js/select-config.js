/**
 * Select Configuration Module
 * 
 * This module contains all the data sources for select dropdowns.
 * It follows the Single Responsibility Principle by focusing solely on
 * configuration data, making it easy to modify options without
 * touching the main initialization logic.
 * 
 * To add new options or modify existing ones, simply update the
 * appropriate constant in this file.
 */

// ============================================================================
// EDGE SYSTEM CONFIGURATION
// ============================================================================

/**
 * Edge style options for invitation borders
 * These are predefined visual effects that can be applied to invitation edges
 */
export const EDGE_STYLES = {
  none: 'None',
  torn: 'Torn Paper',
  scalloped: 'Scalloped',
  zigzag: 'Zigzag',
  wave: 'Wavy',
  spikes: 'Spikes',
  dots: 'Dotted',
  geometric: 'Geometric',
  organic: 'Organic',
  vintage: 'Vintage'
};

/**
 * Edge variant options for fine-tuning edge appearance
 * These provide different textures and finishes for the selected edge style
 */
export const EDGE_VARIANTS = {
  default: 'Default',
  rough: 'Rough',
  smooth: 'Smooth',
  sharp: 'Sharp',
  soft: 'Soft'
};

// ============================================================================
// OVERLAY SYSTEM CONFIGURATION
// ============================================================================

/**
 * Overlay style options for invitation frames
 * These are SVG-based decorative overlays that can be applied to invitations
 */
export const OVERLAY_STYLES = {
  none: 'None',
  'frame-elegant': 'Elegant Frame',
  'frame-vintage': 'Vintage Frame',
  'frame-modern': 'Modern Frame',
  'frame-playful': 'Playful Frame',
  'frame-minimal': 'Minimal Frame',
  'frame-ornate': 'Ornate Frame',
  'frame-nature': 'Nature Frame'
};

/**
 * Overlay scale options for adjusting frame size
 * These percentages control how large the overlay appears relative to the invitation
 */
export const OVERLAY_SCALES = {
  '0.9': '90%',
  '0.95': '95%',
  '1.0': '100%',
  '1.05': '105%',
  '1.1': '110%'
};

/**
 * Overlay position options for frame placement
 * These control where the overlay is positioned relative to the invitation
 */
export const OVERLAY_POSITIONS = {
  center: 'Center',
  top: 'Top',
  bottom: 'Bottom',
  left: 'Left',
  right: 'Right'
};

/**
 * Overlay blend mode options for visual effects
 * These control how the overlay interacts with the background
 */
export const OVERLAY_BLEND_MODES = {
  normal: 'Normal',
  multiply: 'Multiply',
  screen: 'Screen',
  overlay: 'Overlay',
  'soft-light': 'Soft Light'
};

// ============================================================================
// BACKGROUND SYSTEM CONFIGURATION
// ============================================================================

/**
 * Background mode options for invitation backgrounds
 * These control the type of background applied to invitations
 */
export const BACKGROUND_MODES = {
  gradient: 'Theme Gradient',
  texture: 'Texture',
  image: 'Image',
  'grad+tex': 'Gradient + Texture',
  'img+tex': 'Image + Texture'
};

/**
 * Texture preset options for background patterns
 * These are CSS-based patterns that can be applied to invitation backgrounds
 */
export const TEXTURE_PRESETS = {
  stripes: 'Diagonal Stripes',
  dots: 'Polka Dots',
  grid: 'Grid Paper',
  crosshatch: 'Crosshatch',
  chevron: 'Chevron',
  checker: 'Checkerboard',
  sprinkles: 'Sprinkles',
  pluses: 'Plus Signs',
  waves: 'Subtle Waves',
  noise: 'Film Noise'
};

/**
 * Stock image options for background images
 * These are predefined background images available in the application
 */
export const STOCK_IMAGES = {
  pool: 'Tropical Pool',
  confetti: 'Party Confetti',
  clouds: 'Pastel Clouds'
};

/**
 * SVG background options for vector-based backgrounds
 * These are scalable vector backgrounds available in the elements/backgrounds folder
 */
export const SVG_BACKGROUNDS = {
  beach: 'Beach Scene',
  forest: 'Forest Scene',
  abstract: 'Abstract Geometric',
  geometric: 'Modern Geometric',
  space: 'Space & Stars',
  watercolor: 'Watercolor Art',
  tech: 'Tech & Digital',
  zen: 'Zen & Minimal',
  retro: 'Retro & Vintage',
  neon: 'Neon & Cyberpunk',
  artistic: 'Artistic & Painterly',
  nature: 'Nature & Organic',
  elegant: 'Elegant & Refined',
  playful: 'Playful & Fun',
  modern: 'Modern & Clean',
  vintage: 'Vintage & Classic',
  industrial: 'Industrial & Mechanical',
  festive: 'Festive & Celebration',
  abstract2: 'Abstract Curves',
  cosmic: 'Cosmic Space',
  marble: 'Elegant Marble',
  aurora: 'Aurora Borealis',
  geometric2: 'Geometric Patterns',
  floral: 'Delicate Floral',
  abstract3: 'Abstract Curves',
  cyberpunk: 'Cyberpunk Grid',
  sunset: 'Warm Sunset',
  abstract4: 'Abstract Triangles',
  watercolor2: 'Watercolor Blobs',
  abstract5: 'Organic Shapes',
  abstract6: 'Wave Patterns',
  abstract7: 'Dot Matrix',
  abstract8: 'Hexagonal Grid'
};

// ============================================================================
// LAYOUT & EFFECTS CONFIGURATION
// ============================================================================

/**
 * Layout style options for invitation content arrangement
 * These control how text and elements are positioned on the invitation
 */
export const LAYOUT_STYLES = {
  centered: 'Centered',
  banner: 'Banner Top',
  split: 'Split Stripe'
};

/**
 * Entrance effect options for invitation animations
 * These control how the invitation appears when loaded
 */
export const ENTRANCE_EFFECTS = {
  none: 'None',
  fade: 'Fade Up',
  pop: 'Pop'
};

/**
 * Sprite animation options for background decoration movement
 * These control how decorative elements move in the background
 */
export const SPRITE_ANIMATIONS = {
  off: 'Off',
  gentle: 'Gentle Float',
  lively: 'Lively Float'
};

/**
 * Parallax options for background movement effects
 * These control whether background elements move with mouse movement
 */
export const PARALLAX_MODES = {
  off: 'Off',
  on: 'On'
};

// ============================================================================
// READABILITY CHECKER CONFIGURATION
// ============================================================================

/**
 * Contrast sensitivity options for accessibility checking
 * These control how strict the contrast checking is
 */
export const CONTRAST_SENSITIVITIES = {
  strict: 'Strict (WCAG AAA)',
  normal: 'Normal (WCAG AA)',
  relaxed: 'Relaxed (WCAG A)',
  custom: 'Custom Threshold'
};

/**
 * Contrast check frequency options
 * These control when contrast checking occurs
 */
export const CONTRAST_FREQUENCIES = {
  manual: 'Manual Only',
  'on-change': 'On Text Change',
  'real-time': 'Real-time'
};

/**
 * Warning level options for contrast checking
 * These control which contrast issues are reported
 */
export const WARNING_LEVELS = {
  critical: 'Critical Only',
  moderate: 'Moderate + Critical',
  all: 'All Issues'
};

/**
 * Auto-fix level options for contrast correction
 * These control how aggressively the system fixes contrast issues
 */
export const AUTO_FIX_LEVELS = {
  none: 'None',
  conservative: 'Conservative',
  aggressive: 'Aggressive'
};

// ============================================================================
// PDF EXPORT CONFIGURATION
// ============================================================================

/**
 * PDF paper size options for export
 * These control the dimensions of exported PDFs
 */
export const PDF_PAPER_SIZES = {
  a4: 'A4 (210×297mm)',
  letter: 'US Letter (8.5×11in)',
  a5: 'A5 (148×210mm)',
  custom: 'Custom'
};

/**
 * PDF orientation options for export
 * These control whether PDFs are portrait or landscape
 */
export const PDF_ORIENTATIONS = {
  portrait: 'Portrait',
  landscape: 'Landscape'
};

/**
 * PDF quality options for export
 * These control the resolution of exported PDFs
 */
export const PDF_QUALITIES = {
  high: 'High (300 DPI)',
  medium: 'Medium (150 DPI)',
  low: 'Low (72 DPI)'
};

/**
 * PDF margin options for export
 * These control the margins around exported PDFs
 */
export const PDF_MARGINS = {
  none: 'No Margins',
  minimal: 'Minimal (5mm)',
  standard: 'Standard (10mm)'
};

// ============================================================================
// SLIDESHOW CONFIGURATION
// ============================================================================

/**
 * Slideshow mode options for invitation display
 * These control how invitations cycle through in slideshow mode
 */
export const SLIDESHOW_MODES = {
  sequential: 'Sequential',
  random: 'Random'
};

// ============================================================================
// DEFAULT VALUES CONFIGURATION
// ============================================================================

/**
 * Default values for each select dropdown
 * These are the values that will be selected when the page loads
 */
export const DEFAULT_VALUES = {
  'edge-style': 'none',
  'edge-variant': 'default',
  'overlay-style': 'frame-elegant',
  'overlay-scale': '0.95',
  'overlay-position': 'center',
  'overlay-blend': 'normal',
  'bg-mode': 'gradient',
  'texture': 'stripes',
  'stock-image': 'pool',
  'layout': 'centered',
  'effect': 'none',
  'sprite-anim': 'gentle',
  'parallax': 'on',
  'contrast-sensitivity': 'normal',
  'contrast-frequency': 'on-change',
  'warning-level': 'moderate',
  'auto-fix-level': 'conservative',
  'pdf-paper-size': 'a4',
  'pdf-orientation': 'portrait',
  'pdf-quality': 'medium',
  'pdf-margins': 'minimal',
  'slideshow-mode': 'sequential'
};

// ============================================================================
// CONFIGURATION VALIDATION
// ============================================================================

/**
 * Validate that all configuration objects have the required structure
 * This ensures data integrity and helps catch configuration errors early
 */
export function validateConfiguration() {
  const configs = [
    { name: 'EDGE_STYLES', data: EDGE_STYLES },
    { name: 'EDGE_VARIANTS', data: EDGE_VARIANTS },
    { name: 'OVERLAY_STYLES', data: OVERLAY_STYLES },
    { name: 'OVERLAY_SCALES', data: OVERLAY_SCALES },
    { name: 'OVERLAY_POSITIONS', data: OVERLAY_POSITIONS },
    { name: 'OVERLAY_BLEND_MODES', data: OVERLAY_BLEND_MODES },
    { name: 'BACKGROUND_MODES', data: BACKGROUND_MODES },
    { name: 'TEXTURE_PRESETS', data: TEXTURE_PRESETS },
    { name: 'STOCK_IMAGES', data: STOCK_IMAGES },
    { name: 'SVG_BACKGROUNDS', data: SVG_BACKGROUNDS },
    { name: 'LAYOUT_STYLES', data: LAYOUT_STYLES },
    { name: 'ENTRANCE_EFFECTS', data: ENTRANCE_EFFECTS },
    { name: 'SPRITE_ANIMATIONS', data: SPRITE_ANIMATIONS },
    { name: 'PARALLAX_MODES', data: PARALLAX_MODES },
    { name: 'CONTRAST_SENSITIVITIES', data: CONTRAST_SENSITIVITIES },
    { name: 'CONTRAST_FREQUENCIES', data: CONTRAST_FREQUENCIES },
    { name: 'WARNING_LEVELS', data: WARNING_LEVELS },
    { name: 'AUTO_FIX_LEVELS', data: AUTO_FIX_LEVELS },
    { name: 'PDF_PAPER_SIZES', data: PDF_PAPER_SIZES },
    { name: 'PDF_ORIENTATIONS', data: PDF_ORIENTATIONS },
    { name: 'PDF_QUALITIES', data: PDF_QUALITIES },
    { name: 'PDF_MARGINS', data: PDF_MARGINS },
    { name: 'SLIDESHOW_MODES', data: SLIDESHOW_MODES }
  ];

  const errors = [];

  configs.forEach(({ name, data }) => {
    if (!data || typeof data !== 'object') {
      errors.push(`${name} is not a valid object`);
      return;
    }

    if (Object.keys(data).length === 0) {
      errors.push(`${name} is empty`);
      return;
    }

    // Check that all values are strings
    Object.entries(data).forEach(([key, value]) => {
      if (typeof value !== 'string') {
        errors.push(`${name}[${key}] is not a string (${typeof value})`);
      }
    });
  });

  // Validate default values
  Object.entries(DEFAULT_VALUES).forEach(([selectId, defaultValue]) => {
    // Find which config this select belongs to
    const config = configs.find(({ name, data }) => {
      return Object.values(data).some(label => 
        label.toLowerCase().includes(selectId.replace('-', ' ').split(' ')[0])
      );
    });

    if (config && !Object.values(config.data).some(label => 
      label.toLowerCase().includes(defaultValue.toString().toLowerCase())
    )) {
      errors.push(`Default value '${defaultValue}' for '${selectId}' may not be valid`);
    }
  });

  if (errors.length > 0) {
    console.error('❌ Configuration validation failed:', errors);
    return false;
  }

  console.log('✅ All configuration objects validated successfully');
  return true;
}

// ============================================================================
// CONFIGURATION STATISTICS
// ============================================================================

/**
 * Get statistics about the configuration
 * This provides useful information for debugging and monitoring
 */
export function getConfigurationStats() {
  const configs = [
    EDGE_STYLES, EDGE_VARIANTS, OVERLAY_STYLES, OVERLAY_SCALES,
    OVERLAY_POSITIONS, OVERLAY_BLEND_MODES, BACKGROUND_MODES,
    TEXTURE_PRESETS, STOCK_IMAGES, SVG_BACKGROUNDS, LAYOUT_STYLES,
    ENTRANCE_EFFECTS, SPRITE_ANIMATIONS, PARALLAX_MODES,
    CONTRAST_SENSITIVITIES, CONTRAST_FREQUENCIES, WARNING_LEVELS,
    AUTO_FIX_LEVELS, PDF_PAPER_SIZES, PDF_ORIENTATIONS,
    PDF_QUALITIES, PDF_MARGINS, SLIDESHOW_MODES
  ];

  const totalOptions = configs.reduce((sum, config) => sum + Object.keys(config).length, 0);
  const totalSelects = Object.keys(DEFAULT_VALUES).length;

  return {
    totalSelects,
    totalOptions,
    averageOptionsPerSelect: Math.round(totalOptions / totalSelects * 100) / 100,
    configs: configs.map(config => ({
      name: config.constructor.name || 'Unknown',
      options: Object.keys(config).length
    }))
  };
}

// Auto-validate configuration when module loads
if (typeof window !== 'undefined') {
  // Browser environment
  setTimeout(() => {
    validateConfiguration();
    console.log('📊 Configuration statistics:', getConfigurationStats());
  }, 100);
}
