// Partial Loader for Event Card Generator
// Loads HTML partials for left and right sidebars

import { updateFonts, updateText } from './main.js';

export async function loadPartials() {
  try {
    console.log('🔄 Loading sidebar partials...');
    console.log('📍 Current location:', window.location.href);
    console.log('📍 Partial paths:', 'partials/left-sidebar.html', 'partials/right-sidebar.html');
    
    // Load left sidebar
    const leftSidebarResponse = await fetch('partials/left-sidebar.html');
    console.log('📥 Left sidebar response status:', leftSidebarResponse.status);
    if (!leftSidebarResponse.ok) {
      throw new Error(`Left sidebar fetch failed: ${leftSidebarResponse.status} ${leftSidebarResponse.statusText}`);
    }
    const leftSidebarHTML = await leftSidebarResponse.text();
    
    // Load right sidebar
    const rightSidebarResponse = await fetch('partials/right-sidebar.html');
    console.log('📥 Right sidebar response status:', rightSidebarResponse.status);
    if (!rightSidebarResponse.ok) {
      throw new Error(`Right sidebar fetch failed: ${rightSidebarResponse.status} ${rightSidebarResponse.statusText}`);
    }
    const rightSidebarHTML = await rightSidebarResponse.text();
    
    // Insert left sidebar
    const leftPanelContainer = document.getElementById('left-panel-container');
    if (leftPanelContainer) {
      leftPanelContainer.innerHTML = leftSidebarHTML;
      console.log('✅ Left sidebar loaded');
    }
    
    // Insert right sidebar
    const rightPanelContainer = document.getElementById('right-panel-container');
    if (rightPanelContainer) {
      rightPanelContainer.innerHTML = rightSidebarHTML;
      console.log('✅ Right sidebar loaded');
    }
    
    // Initialize collapsible groups after loading
    initializeCollapsibleGroups();
    
    // Set up font change event listeners after partials are loaded
    setupFontChangeEvents();
    
    console.log('✅ All partials loaded successfully');
    
  } catch (error) {
    console.error('❌ Error loading partials:', error);
    
    // Fallback: show error message
    const leftPanelContainer = document.getElementById('left-panel-container');
    const rightPanelContainer = document.getElementById('right-panel-container');
    
    if (leftPanelContainer) {
      leftPanelContainer.innerHTML = '<div class="error">❌ Failed to load left sidebar</div>';
    }
    if (rightPanelContainer) {
      rightPanelContainer.innerHTML = '<div class="error">❌ Failed to load right sidebar</div>';
    }
  }
}

// Initialize collapsible groups after partials are loaded
function initializeCollapsibleGroups() {
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
  console.log('✅ Collapsible groups initialized');
}

// Set up font change event listeners after partials are loaded
function setupFontChangeEvents() {
  console.log('🔤 Setting up font change event listeners...');
  
  // Get font selectors
  const fontTitle = document.getElementById('font-title');
  const fontNames = document.getElementById('font-names');
  const fontBody = document.getElementById('font-body');
  
  if (fontTitle) {
    fontTitle.addEventListener('change', () => {
      console.log('🔤 Title font changed to:', fontTitle.value);
      updateFonts();
      updateText();
    });
    console.log('✅ Title font event listener added');
  }
  
  if (fontNames) {
    fontNames.addEventListener('change', () => {
      console.log('🔤 Names font changed to:', fontNames.value);
      updateFonts();
      updateText();
    });
    console.log('✅ Names font event listener added');
  }
  
  if (fontBody) {
    fontBody.addEventListener('change', () => {
      console.log('🔤 Body font changed to:', fontBody.value);
      updateFonts();
      updateText();
    });
    console.log('✅ Body font event listener added');
  }
  
  console.log('✅ Font change event listeners set up');
}
