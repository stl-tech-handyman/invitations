// Partial Loader for Event Card Generator
// Loads HTML partials for left and right sidebars

export async function loadPartials() {
  try {
    console.log('🔄 Loading sidebar partials...');
    
    // Load left sidebar
    const leftSidebarResponse = await fetch('partials/left-sidebar.html');
    const leftSidebarHTML = await leftSidebarResponse.text();
    
    // Load right sidebar
    const rightSidebarResponse = await fetch('partials/right-sidebar.html');
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
