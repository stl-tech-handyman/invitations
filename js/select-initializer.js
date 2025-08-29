/**
 * Comprehensive Select Initializer Module
 * 
 * This module provides a self-contained initialization system that imports
 * all configuration data from select-config.js. It follows the Single 
 * Responsibility Principle by focusing solely on select initialization logic.
 * 
 * This version is useful when you want a single file that handles everything
 * but still maintains clean separation of concerns.
 */

// Import all configuration data from the centralized config module
import {
  EDGE_STYLES, EDGE_VARIANTS,
  OVERLAY_STYLES, OVERLAY_SCALES, OVERLAY_POSITIONS, OVERLAY_BLEND_MODES,
  BACKGROUND_MODES, TEXTURE_PRESETS, STOCK_IMAGES, SVG_BACKGROUNDS,
  LAYOUT_STYLES, ENTRANCE_EFFECTS, SPRITE_ANIMATIONS, PARALLAX_MODES,
  CONTRAST_SENSITIVITIES, CONTRAST_FREQUENCIES, WARNING_LEVELS, AUTO_FIX_LEVELS,
  PDF_PAPER_SIZES, PDF_ORIENTATIONS, PDF_QUALITIES, PDF_MARGINS,
  SLIDESHOW_MODES, DEFAULT_VALUES
} from './select-config.js';

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Safely get an element by ID with error handling
 * @param {string} id - The element ID to find
 * @returns {HTMLElement|null} The found element or null if not found
 */
function getElement(id) {
  const element = document.getElementById(id);
  if (!element) {
    console.warn(`⚠️ Element with ID '${id}' not found during select initialization`);
  }
  return element;
}

/**
 * Populate a select element with options from a data source
 * @param {string} selectId - The ID of the select element to populate
 * @param {Object} dataSource - Object containing value-label pairs
 * @param {string} defaultOption - Optional default option to select
 * @returns {boolean} True if successful, false if failed
 */
function populateSelect(selectId, dataSource, defaultOption = null) {
  const select = getElement(selectId);
  if (!select) return false;
  
  try {
    // Clear existing options
    select.innerHTML = '';
    
    // Add options from data source
    Object.entries(dataSource).forEach(([value, label]) => {
      const option = document.createElement('option');
      option.value = value;
      option.textContent = label;
      select.appendChild(option);
    });
    
    // Set default option if specified
    if (defaultOption && dataSource[defaultOption]) {
      select.value = defaultOption;
    }
    
    console.log(`✅ Select '${selectId}' populated with ${Object.keys(dataSource).length} options`);
    return true;
    
  } catch (error) {
    console.error(`❌ Failed to populate select '${selectId}':`, error);
    return false;
  }
}

// ============================================================================
// INDIVIDUAL SELECT INITIALIZATION FUNCTIONS
// ============================================================================

/**
 * Initialize edge style select dropdown
 * Populates the edge style selector with available edge effect options
 */
function initializeEdgeStyleSelect() {
  console.log('🔄 Initializing edge style select...');
  const success = populateSelect('edge-style', EDGE_STYLES, DEFAULT_VALUES['edge-style']);
  
  if (success) {
    console.log('✅ Edge style select initialized successfully');
  } else {
    console.error('❌ Failed to initialize edge style select');
  }
}

/**
 * Initialize edge variant select dropdown
 * Populates the edge variant selector with texture and finish options
 */
function initializeEdgeVariantSelect() {
  console.log('🔄 Initializing edge variant select...');
  const success = populateSelect('edge-variant', EDGE_VARIANTS, DEFAULT_VALUES['edge-variant']);
  
  if (success) {
    console.log('✅ Edge variant select initialized successfully');
  } else {
    console.error('❌ Failed to initialize edge variant select');
  }
}

/**
 * Initialize overlay style select dropdown
 * Populates the overlay style selector with available frame options
 */
function initializeOverlayStyleSelect() {
  console.log('🔄 Initializing overlay style select...');
  const success = populateSelect('overlay-style', OVERLAY_STYLES, DEFAULT_VALUES['overlay-style']);
  
  if (success) {
    console.log('✅ Overlay style select initialized successfully');
  } else {
    console.error('❌ Failed to initialize overlay style select');
  }
}

/**
 * Initialize overlay scale select dropdown
 * Populates the overlay scale selector with size percentage options
 */
function initializeOverlayScaleSelect() {
  console.log('🔄 Initializing overlay scale select...');
  const success = populateSelect('overlay-scale', OVERLAY_SCALES, DEFAULT_VALUES['overlay-scale']);
  
  if (success) {
    console.log('✅ Overlay scale select initialized successfully');
  } else {
    console.error('❌ Failed to initialize overlay scale select');
  }
}

/**
 * Initialize overlay position select dropdown
 * Populates the overlay position selector with placement options
 */
function initializeOverlayPositionSelect() {
  console.log('🔄 Initializing overlay position select...');
  const success = populateSelect('overlay-position', OVERLAY_POSITIONS, DEFAULT_VALUES['overlay-position']);
  
  if (success) {
    console.log('✅ Overlay position select initialized successfully');
  } else {
    console.error('❌ Failed to initialize overlay position select');
  }
}

/**
 * Initialize overlay blend mode select dropdown
 * Populates the overlay blend mode selector with visual effect options
 */
function initializeOverlayBlendSelect() {
  console.log('🔄 Initializing overlay blend mode select...');
  const success = populateSelect('overlay-blend', OVERLAY_BLEND_MODES, DEFAULT_VALUES['overlay-blend']);
  
  if (success) {
    console.log('✅ Overlay blend mode select initialized successfully');
  } else {
    console.error('❌ Failed to initialize overlay blend mode select');
  }
}

/**
 * Initialize background mode select dropdown
 * Populates the background mode selector with background type options
 */
function initializeBackgroundModeSelect() {
  console.log('🔄 Initializing background mode select...');
  const success = populateSelect('bg-mode', BACKGROUND_MODES, DEFAULT_VALUES['bg-mode']);
  
  if (success) {
    console.log('✅ Background mode select initialized successfully');
  } else {
    console.error('❌ Failed to initialize background mode select');
  }
}

/**
 * Initialize texture preset select dropdown
 * Populates the texture selector with available pattern options
 */
function initializeTextureSelect() {
  console.log('🔄 Initializing texture preset select...');
  const success = populateSelect('texture', TEXTURE_PRESETS, DEFAULT_VALUES['texture']);
  
  if (success) {
    console.log('✅ Texture preset select initialized successfully');
  } else {
    console.error('❌ Failed to initialize texture preset select');
  }
}

/**
 * Initialize stock image select dropdown
 * Populates the stock image selector with predefined background images
 */
function initializeStockImageSelect() {
  console.log('🔄 Initializing stock image select...');
  
  // Combine stock images and custom backgrounds
  const allImages = { ...STOCK_IMAGES };
  
  // Add custom background options
  for (let i = 1; i <= 8; i++) {
    allImages[`i-${i}`] = `Background ${i}`;
  }
  
  // Add SVG backgrounds
  Object.assign(allImages, SVG_BACKGROUNDS);
  
  const success = populateSelect('stock-image', allImages, DEFAULT_VALUES['stock-image']);
  
  if (success) {
    console.log('✅ Stock image select initialized successfully');
  } else {
    console.error('❌ Failed to initialize stock image select');
  }
}

/**
 * Initialize layout style select dropdown
 * Populates the layout selector with content arrangement options
 */
function initializeLayoutSelect() {
  console.log('🔄 Initializing layout style select...');
  const success = populateSelect('layout', LAYOUT_STYLES, DEFAULT_VALUES['layout']);
  
  if (success) {
    console.log('✅ Layout style select initialized successfully');
  } else {
    console.error('❌ Failed to initialize layout style select');
  }
}

/**
 * Initialize entrance effect select dropdown
 * Populates the effect selector with animation options
 */
function initializeEffectSelect() {
  console.log('🔄 Initializing entrance effect select...');
  const success = populateSelect('effect', ENTRANCE_EFFECTS, DEFAULT_VALUES['effect']);
  
  if (success) {
    console.log('✅ Entrance effect select initialized successfully');
  } else {
    console.error('❌ Failed to initialize entrance effect select');
  }
}

/**
 * Initialize sprite animation select dropdown
 * Populates the sprite animation selector with movement options
 */
function initializeSpriteAnimationSelect() {
  console.log('🔄 Initializing sprite animation select...');
  const success = populateSelect('sprite-anim', SPRITE_ANIMATIONS, DEFAULT_VALUES['sprite-anim']);
  
  if (success) {
    console.log('✅ Sprite animation select initialized successfully');
  } else {
    console.error('❌ Failed to initialize sprite animation select');
  }
}

/**
 * Initialize parallax mode select dropdown
 * Populates the parallax selector with movement effect options
 */
function initializeParallaxSelect() {
  console.log('🔄 Initializing parallax mode select...');
  const success = populateSelect('parallax', PARALLAX_MODES, DEFAULT_VALUES['parallax']);
  
  if (success) {
    console.log('✅ Parallax mode select initialized successfully');
  } else {
    console.error('❌ Failed to initialize parallax mode select');
  }
}

/**
 * Initialize contrast sensitivity select dropdown
 * Populates the contrast sensitivity selector with accessibility options
 */
function initializeContrastSensitivitySelect() {
  console.log('🔄 Initializing contrast sensitivity select...');
  const success = populateSelect('contrast-sensitivity', CONTRAST_SENSITIVITIES, DEFAULT_VALUES['contrast-sensitivity']);
  
  if (success) {
    console.log('✅ Contrast sensitivity select initialized successfully');
  } else {
    console.error('❌ Failed to initialize contrast sensitivity select');
  }
}

/**
 * Initialize contrast frequency select dropdown
 * Populates the contrast frequency selector with checking schedule options
 */
function initializeContrastFrequencySelect() {
  console.log('🔄 Initializing contrast frequency select...');
  const success = populateSelect('contrast-frequency', CONTRAST_FREQUENCIES, DEFAULT_VALUES['contrast-frequency']);
  
  if (success) {
    console.log('✅ Contrast frequency select initialized successfully');
  } else {
    console.error('❌ Failed to initialize contrast frequency select');
  }
}

/**
 * Initialize warning level select dropdown
 * Populates the warning level selector with issue reporting options
 */
function initializeWarningLevelSelect() {
  console.log('🔄 Initializing warning level select...');
  const success = populateSelect('warning-level', WARNING_LEVELS, DEFAULT_VALUES['warning-level']);
  
  if (success) {
    console.log('✅ Warning level select initialized successfully');
  } else {
    console.error('❌ Failed to initialize warning level select');
  }
}

/**
 * Initialize auto-fix level select dropdown
 * Populates the auto-fix level selector with correction aggressiveness options
 */
function initializeAutoFixLevelSelect() {
  console.log('🔄 Initializing auto-fix level select...');
  const success = populateSelect('auto-fix-level', AUTO_FIX_LEVELS, DEFAULT_VALUES['auto-fix-level']);
  
  if (success) {
    console.log('✅ Auto-fix level select initialized successfully');
  } else {
    console.error('❌ Failed to initialize auto-fix level select');
  }
}

/**
 * Initialize PDF paper size select dropdown
 * Populates the PDF paper size selector with dimension options
 */
function initializePDFPaperSizeSelect() {
  console.log('🔄 Initializing PDF paper size select...');
  const success = populateSelect('pdf-paper-size', PDF_PAPER_SIZES, DEFAULT_VALUES['pdf-paper-size']);
  
  if (success) {
    console.log('✅ PDF paper size select initialized successfully');
  } else {
    console.error('❌ Failed to initialize PDF paper size select');
  }
}

/**
 * Initialize PDF orientation select dropdown
 * Populates the PDF orientation selector with direction options
 */
function initializePDFOrientationSelect() {
  console.log('🔄 Initializing PDF orientation select...');
  const success = populateSelect('pdf-orientation', PDF_ORIENTATIONS, DEFAULT_VALUES['pdf-orientation']);
  
  if (success) {
    console.log('✅ PDF orientation select initialized successfully');
  } else {
    console.error('❌ Failed to initialize PDF orientation select');
  }
}

/**
 * Initialize PDF quality select dropdown
 * Populates the PDF quality selector with resolution options
 */
function initializePDFQualitySelect() {
  console.log('🔄 Initializing PDF quality select...');
  const success = populateSelect('pdf-quality', PDF_QUALITIES, DEFAULT_VALUES['pdf-quality']);
  
  if (success) {
    console.log('✅ PDF quality select initialized successfully');
  } else {
    console.error('❌ Failed to initialize PDF quality select');
  }
}

/**
 * Initialize PDF margins select dropdown
 * Populates the PDF margins selector with spacing options
 */
function initializePDFMarginsSelect() {
  console.log('🔄 Initializing PDF margins select...');
  const success = populateSelect('pdf-margins', PDF_MARGINS, DEFAULT_VALUES['pdf-margins']);
  
  if (success) {
    console.log('✅ PDF margins select initialized successfully');
  } else {
    console.error('❌ Failed to initialize PDF margins select');
  }
}

/**
 * Initialize slideshow mode select dropdown
 * Populates the slideshow mode selector with display options
 */
function initializeSlideshowModeSelect() {
  console.log('🔄 Initializing slideshow mode select...');
  const success = populateSelect('slideshow-mode', SLIDESHOW_MODES, DEFAULT_VALUES['slideshow-mode']);
  
  if (success) {
    console.log('✅ Slideshow mode select initialized successfully');
  } else {
    console.error('❌ Failed to initialize slideshow mode select');
  }
}

// ============================================================================
// MAIN INITIALIZATION FUNCTION
// ============================================================================

/**
 * Initialize all select dropdowns in the application
 * This is the main entry point that calls all individual initialization functions
 */
function initializeAllSelects() {
  console.log('🚀 Starting comprehensive select initialization...');
  console.log('📋 Total selects to initialize: 25');
  
  const startTime = performance.now();
  
  try {
    // Edge system selects
    initializeEdgeStyleSelect();
    initializeEdgeVariantSelect();
    
    // Overlay system selects
    initializeOverlayStyleSelect();
    initializeOverlayScaleSelect();
    initializeOverlayPositionSelect();
    initializeOverlayBlendSelect();
    
    // Background system selects
    initializeBackgroundModeSelect();
    initializeTextureSelect();
    initializeStockImageSelect();
    
    // Layout and effects selects
    initializeLayoutSelect();
    initializeEffectSelect();
    initializeSpriteAnimationSelect();
    initializeParallaxSelect();
    
    // Readability checker selects
    initializeContrastSensitivitySelect();
    initializeContrastFrequencySelect();
    initializeWarningLevelSelect();
    initializeAutoFixLevelSelect();
    
    // PDF export selects
    initializePDFPaperSizeSelect();
    initializePDFOrientationSelect();
    initializePDFQualitySelect();
    initializePDFMarginsSelect();
    
    // Slideshow selects
    initializeSlideshowModeSelect();
    
    const endTime = performance.now();
    const duration = Math.round(endTime - startTime);
    
    console.log(`✅ All select dropdowns initialized successfully in ${duration}ms`);
    console.log('🎯 Select initialization process completed');
    
  } catch (error) {
    console.error('❌ Critical error during select initialization:', error);
    throw error;
  }
}

// ============================================================================
// EXPORT FOR EXTERNAL USE
// ============================================================================

// Make functions available globally for use in other modules
window.SelectInitializer = {
  initializeAllSelects,
  initializeEdgeStyleSelect,
  initializeEdgeVariantSelect,
  initializeOverlayStyleSelect,
  initializeOverlayScaleSelect,
  initializeOverlayPositionSelect,
  initializeOverlayBlendSelect,
  initializeBackgroundModeSelect,
  initializeTextureSelect,
  initializeStockImageSelect,
  initializeLayoutSelect,
  initializeEffectSelect,
  initializeSpriteAnimationSelect,
  initializeParallaxSelect,
  initializeContrastSensitivitySelect,
  initializeContrastFrequencySelect,
  initializeWarningLevelSelect,
  initializeAutoFixLevelSelect,
  initializePDFPaperSizeSelect,
  initializePDFOrientationSelect,
  initializePDFQualitySelect,
  initializePDFMarginsSelect,
  initializeSlideshowModeSelect
};

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeAllSelects);
} else {
  // DOM is already ready
  initializeAllSelects();
}
