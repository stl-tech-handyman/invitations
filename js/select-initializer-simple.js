/**
 * Simple Select Initializer Module
 * 
 * This module provides a clean, simple interface for initializing
 * all select dropdowns in the application. It imports configuration
 * data from select-config.js and focuses on the core initialization logic.
 * 
 * Key Features:
 * - Single responsibility: Only handles select initialization
 * - Clean imports: All data comes from configuration files
 * - Error handling: Graceful fallbacks for missing elements
 * - Performance monitoring: Tracks initialization time
 * - Comprehensive logging: Clear visibility into the process
 */

// Import all configuration data
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
// CORE INITIALIZATION LOGIC
// ============================================================================

/**
 * Configuration map linking select IDs to their data sources and defaults
 * This makes it easy to add new selects or modify existing ones
 */
const SELECT_CONFIGURATIONS = {
  // Edge system
  'edge-style': { data: EDGE_STYLES, default: DEFAULT_VALUES['edge-style'] },
  'edge-variant': { data: EDGE_VARIANTS, default: DEFAULT_VALUES['edge-variant'] },
  
  // Overlay system
  'overlay-style': { data: OVERLAY_STYLES, default: DEFAULT_VALUES['overlay-style'] },
  'overlay-scale': { data: OVERLAY_SCALES, default: DEFAULT_VALUES['overlay-scale'] },
  'overlay-position': { data: OVERLAY_POSITIONS, default: DEFAULT_VALUES['overlay-position'] },
  'overlay-blend': { data: OVERLAY_BLEND_MODES, default: DEFAULT_VALUES['overlay-blend'] },
  
  // Background system
  'bg-mode': { data: BACKGROUND_MODES, default: DEFAULT_VALUES['bg-mode'] },
  'texture': { data: TEXTURE_PRESETS, default: DEFAULT_VALUES['texture'] },
  'stock-image': { 
    data: { ...STOCK_IMAGES, ...SVG_BACKGROUNDS }, 
    default: DEFAULT_VALUES['stock-image'],
    // Add custom background options dynamically
    postProcess: (data) => {
      const customBackgrounds = {};
      for (let i = 1; i <= 8; i++) {
        customBackgrounds[`i-${i}`] = `Background ${i}`;
      }
      return { ...customBackgrounds, ...data };
    }
  },
  
  // Layout and effects
  'layout': { data: LAYOUT_STYLES, default: DEFAULT_VALUES['layout'] },
  'effect': { data: ENTRANCE_EFFECTS, default: DEFAULT_VALUES['effect'] },
  'sprite-anim': { data: SPRITE_ANIMATIONS, default: DEFAULT_VALUES['sprite-anim'] },
  'parallax': { data: PARALLAX_MODES, default: DEFAULT_VALUES['parallax'] },
  
  // Readability checker
  'contrast-sensitivity': { data: CONTRAST_SENSITIVITIES, default: DEFAULT_VALUES['contrast-sensitivity'] },
  'contrast-frequency': { data: CONTRAST_FREQUENCIES, default: DEFAULT_VALUES['contrast-frequency'] },
  'warning-level': { data: WARNING_LEVELS, default: DEFAULT_VALUES['warning-level'] },
  'auto-fix-level': { data: AUTO_FIX_LEVELS, default: DEFAULT_VALUES['auto-fix-level'] },
  
  // PDF export
  'pdf-paper-size': { data: PDF_PAPER_SIZES, default: DEFAULT_VALUES['pdf-paper-size'] },
  'pdf-orientation': { data: PDF_ORIENTATIONS, default: DEFAULT_VALUES['pdf-orientation'] },
  'pdf-quality': { data: PDF_QUALITIES, default: DEFAULT_VALUES['pdf-quality'] },
  'pdf-margins': { data: PDF_MARGINS, default: DEFAULT_VALUES['pdf-margins'] },
  
  // Slideshow
  'slideshow-mode': { data: SLIDESHOW_MODES, default: DEFAULT_VALUES['slideshow-mode'] }
};

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Safely get an element by ID with comprehensive error handling
 * @param {string} id - The element ID to find
 * @returns {HTMLElement|null} The found element or null if not found
 */
function getElement(id) {
  const element = document.getElementById(id);
  if (!element) {
    console.warn(`⚠️ Select element '${id}' not found in DOM`);
    return null;
  }
  
  if (element.tagName !== 'SELECT') {
    console.warn(`⚠️ Element '${id}' is not a select element (found: ${element.tagName})`);
    return null;
  }
  
  return element;
}

/**
 * Populate a select element with options from configuration
 * @param {string} selectId - The ID of the select element to populate
 * @param {Object} config - Configuration object with data and default
 * @returns {boolean} True if successful, false if failed
 */
function populateSelect(selectId, config) {
  const select = getElement(selectId);
  if (!select) return false;
  
  try {
    // Get the data source, applying post-processing if needed
    let dataSource = config.data;
    if (config.postProcess && typeof config.postProcess === 'function') {
      dataSource = config.postProcess(dataSource);
    }
    
    // Clear existing options
    select.innerHTML = '';
    
    // Add options from data source
    Object.entries(dataSource).forEach(([value, label]) => {
      const option = document.createElement('option');
      option.value = value;
      option.textContent = label;
      select.appendChild(option);
    });
    
    // Set default value if specified and valid
    if (config.default && dataSource[config.default]) {
      select.value = config.default;
    }
    
    console.log(`✅ Select '${selectId}' populated with ${Object.keys(dataSource).length} options`);
    return true;
    
  } catch (error) {
    console.error(`❌ Failed to populate select '${selectId}':`, error);
    return false;
  }
}

// ============================================================================
// INITIALIZATION FUNCTIONS
// ============================================================================

/**
 * Initialize a single select dropdown
 * @param {string} selectId - The ID of the select to initialize
 * @returns {boolean} True if successful, false if failed
 */
function initializeSelect(selectId) {
  const config = SELECT_CONFIGURATIONS[selectId];
  if (!config) {
    console.warn(`⚠️ No configuration found for select '${selectId}'`);
    return false;
  }
  
  console.log(`🔄 Initializing select '${selectId}'...`);
  const success = populateSelect(selectId, config);
  
  if (success) {
    console.log(`✅ Select '${selectId}' initialized successfully`);
  } else {
    console.error(`❌ Failed to initialize select '${selectId}'`);
  }
  
  return success;
}

/**
 * Initialize all select dropdowns in the application
 * This is the main entry point for the entire initialization process
 */
function initializeAllSelects() {
  console.log('🚀 Starting comprehensive select initialization...');
  console.log(`📋 Total selects to initialize: ${Object.keys(SELECT_CONFIGURATIONS).length}`);
  
  const startTime = performance.now();
  const results = {
    total: Object.keys(SELECT_CONFIGURATIONS).length,
    successful: 0,
    failed: 0,
    details: {}
  };
  
  try {
    // Initialize each select and track results
    Object.keys(SELECT_CONFIGURATIONS).forEach(selectId => {
      const success = initializeSelect(selectId);
      
      results.details[selectId] = success;
      if (success) {
        results.successful++;
      } else {
        results.failed++;
      }
    });
    
    const endTime = performance.now();
    const duration = Math.round(endTime - startTime);
    
    // Log comprehensive results
    console.log('📊 Select Initialization Results:');
    console.log(`   ✅ Successful: ${results.successful}`);
    console.log(`   ❌ Failed: ${results.failed}`);
    console.log(`   📈 Success Rate: ${Math.round((results.successful / results.total) * 100)}%`);
    console.log(`   ⏱️ Total Time: ${duration}ms`);
    console.log(`   🎯 Process completed in ${duration}ms`);
    
    // Log any failures for debugging
    if (results.failed > 0) {
      console.warn('⚠️ Failed selects:', 
        Object.entries(results.details)
          .filter(([_, success]) => !success)
          .map(([id, _]) => id)
      );
    }
    
    return results;
    
  } catch (error) {
    console.error('❌ Critical error during select initialization:', error);
    throw error;
  }
}

/**
 * Initialize a specific group of selects
 * Useful for partial initialization or testing specific functionality
 * @param {string[]} selectIds - Array of select IDs to initialize
 * @returns {Object} Results object with success/failure counts
 */
function initializeSelectGroup(selectIds) {
  console.log(`🔄 Initializing select group: ${selectIds.join(', ')}`);
  
  const results = {
    total: selectIds.length,
    successful: 0,
    failed: 0,
    details: {}
  };
  
  selectIds.forEach(selectId => {
    const success = initializeSelect(selectId);
    results.details[selectId] = success;
    if (success) {
      results.successful++;
    } else {
      results.failed++;
    }
  });
  
  console.log(`✅ Group initialization completed: ${results.successful}/${results.total} successful`);
  return results;
}

// ============================================================================
// PUBLIC API
// ============================================================================

// Export the main functions for external use
export const SelectInitializer = {
  initializeAllSelects,
  initializeSelectGroup,
  initializeSelect,
  getConfiguration: () => SELECT_CONFIGURATIONS
};

// Make functions available globally for backward compatibility
if (typeof window !== 'undefined') {
  window.SelectInitializer = SelectInitializer;
}

// ============================================================================
// AUTO-INITIALIZATION
// ============================================================================

// Automatically initialize when DOM is ready
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeAllSelects);
  } else {
    // DOM is already ready
    initializeAllSelects();
  }
}
