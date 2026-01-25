/**
 * Feed Filter - Instagram-style content filtering
 * Filters feed cards by category/type
 */

(function() {
  'use strict';

  function initFeedFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const feedCards = document.querySelectorAll('.feed-card');

    if (filterButtons.length === 0 || feedCards.length === 0) {
      return;
    }

    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        const filterValue = this.getAttribute('data-filter');

        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        feedCards.forEach(card => {
          const cardType = card.getAttribute('data-type');

          if (filterValue === 'all') {
            card.style.display = '';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 10);
          } else if (cardType === filterValue) {
            card.style.display = '';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 10);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 300);
          }
        });

        checkEmptyState(filterValue);
      });
    });

    function checkEmptyState(filterValue) {
      const visibleCards = Array.from(feedCards).filter(card => {
        const cardType = card.getAttribute('data-type');
        return filterValue === 'all' || cardType === filterValue;
      });

      const feedGrid = document.querySelector('.feed-grid');
      let emptyState = document.querySelector('.feed-empty');

      if (visibleCards.length === 0) {
        if (!emptyState) {
          emptyState = document.createElement('div');
          emptyState.className = 'feed-empty';
          emptyState.innerHTML = `
            <i class="fa fa-inbox"></i>
            <h3>No content found</h3>
            <p>No items match this filter. Try selecting a different category.</p>
          `;
          feedGrid.parentNode.insertBefore(emptyState, feedGrid.nextSibling);
        }
        emptyState.style.display = 'block';
      } else {
        if (emptyState) {
          emptyState.style.display = 'none';
        }
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFeedFilters);
  } else {
    initFeedFilters();
  }
})();
