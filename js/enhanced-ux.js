// Dark Mode Toggle
class DarkModeToggle {
  constructor() {
    this.darkMode = localStorage.getItem('darkMode') === 'true';
    this.init();
  }

  init() {
    this.createToggleButton();
    this.applyTheme();
    this.bindEvents();
  }

  createToggleButton() {
    const toggleHtml = `
      <div class="theme-toggle">
        <button id="theme-toggle-btn" class="btn btn-outline-secondary btn-sm" title="Toggle dark/light mode">
          <i id="theme-icon" class="fas fa-${this.darkMode ? 'sun' : 'moon'}"></i>
        </button>
      </div>
    `;
    
    // Add to header
    const header = document.querySelector('#my-menu .pages');
    if (header) {
      const toggleLi = document.createElement('li');
      toggleLi.innerHTML = toggleHtml;
      header.appendChild(toggleLi);
    }
  }

  bindEvents() {
    const toggleBtn = document.getElementById('theme-toggle-btn');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => this.toggleTheme());
    }
  }

  toggleTheme() {
    this.darkMode = !this.darkMode;
    localStorage.setItem('darkMode', this.darkMode);
    this.applyTheme();
    this.updateIcon();
  }

  applyTheme() {
    document.documentElement.setAttribute('data-theme', this.darkMode ? 'dark' : 'light');
  }

  updateIcon() {
    const icon = document.getElementById('theme-icon');
    if (icon) {
      icon.className = `fas fa-${this.darkMode ? 'sun' : 'moon'}`;
    }
  }
}

// Enhanced Search with Filters
class EnhancedSearch {
  constructor() {
    this.currentFilter = 'all';
    this.allResults = [];
    this.init();
  }

  init() {
    this.bindFilterEvents();
    this.enhanceSearchDisplay();
  }

  bindFilterEvents() {
    const filters = document.querySelectorAll('input[name="searchFilter"]');
    filters.forEach(filter => {
      filter.addEventListener('change', (e) => {
        this.currentFilter = e.target.value;
        this.applyFilter();
      });
    });
  }

  enhanceSearchDisplay() {
    // Override the original search result template
    if (typeof SimpleJekyllSearch !== 'undefined') {
      const originalInit = SimpleJekyllSearch.init;
      const self = this;
      
      SimpleJekyllSearch.init = function(options) {
        const enhancedOptions = {
          ...options,
          searchResultTemplate: self.getSearchTemplate(),
          templateMiddleware: function(prop, value, template) {
            if (prop === 'date') {
              return new Date(value).toLocaleDateString();
            }
            return value;
          },
          success: function(data) {
            self.allResults = data;
            self.updateSearchStats(data.length);
          }
        };
        
        return originalInit.call(this, enhancedOptions);
      };
    }
  }

  getSearchTemplate() {
    return `
      <div class="search-result-item mb-3 p-3 border rounded">
        <h5><a href="{url}" class="text-decoration-none">{title}</a></h5>
        <p class="text-muted mb-2">{summary}</p>
        <div class="search-meta">
          <small class="text-muted">
            <i class="fas fa-calendar"></i> {date}
            {tags}
          </small>
        </div>
      </div>
    `;
  }

  applyFilter() {
    // This would filter results based on categories
    console.log(`Filtering by: ${this.currentFilter}`);
  }

  updateSearchStats(count) {
    const statsEl = document.getElementById('search-stats');
    if (statsEl) {
      statsEl.innerHTML = count > 0 ? `<small class="text-muted">${count} results found</small>` : '';
    }
  }
}

// Smooth Scrolling for anchor links
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Loading animations
function showLoadingSpinner(element) {
  element.innerHTML = '<div class="text-center"><i class="fas fa-spinner fa-spin fa-2x"></i></div>';
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  new DarkModeToggle();
  new EnhancedSearch();
  initSmoothScrolling();
  
  // Add loading states for better UX
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    let searchTimeout;
    searchInput.addEventListener('input', function() {
      clearTimeout(searchTimeout);
      const resultsContainer = document.getElementById('results-container');
      
      if (this.value.length > 0) {
        showLoadingSpinner(resultsContainer);
        searchTimeout = setTimeout(() => {
          // The actual search will be handled by SimpleJekyllSearch
        }, 300);
      }
    });
  }
});
