/**
 * Lazy Loading - Improves performance by loading images/videos on demand
 * Uses Intersection Observer API for modern browsers
 */

(function() {
  'use strict';

  const config = {
    rootMargin: '50px 0px',
    threshold: 0.01
  };

  function loadMedia(element) {
    if (element.dataset.src) {
      element.src = element.dataset.src;
      element.removeAttribute('data-src');
    }

    if (element.dataset.srcset) {
      element.srcset = element.dataset.srcset;
      element.removeAttribute('data-srcset');
    }

    element.classList.remove('lazy');
    element.classList.add('lazy-loaded');

    const placeholder = element.closest('.lazy-placeholder');
    if (placeholder) {
      placeholder.classList.remove('lazy-placeholder');
    }
  }

  function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        loadMedia(element);
        observer.unobserve(element);
      }
    });
  }

  function initLazyLoad() {
    const lazyElements = document.querySelectorAll('img.lazy, video.lazy, iframe.lazy');

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(handleIntersection, config);

      lazyElements.forEach(element => {
        observer.observe(element);
      });
    } else {
      lazyElements.forEach(element => {
        loadMedia(element);
      });
    }
  }

  function initCarousel() {
    const carousels = document.querySelectorAll('.photo-carousel');

    carousels.forEach(carousel => {
      const slides = carousel.querySelectorAll('.carousel-slide');
      const prevBtn = carousel.querySelector('.carousel-prev');
      const nextBtn = carousel.querySelector('.carousel-next');
      const indicators = carousel.querySelectorAll('.indicator');
      let currentSlide = 0;

      function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));

        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        if (indicators[currentSlide]) {
          indicators[currentSlide].classList.add('active');
        }

        const img = slides[currentSlide].querySelector('img.lazy');
        if (img) {
          loadMedia(img);
        }
      }

      if (prevBtn) {
        prevBtn.addEventListener('click', () => {
          showSlide(currentSlide - 1);
        });
      }

      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          showSlide(currentSlide + 1);
        });
      }

      indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
          showSlide(index);
        });
      });

      showSlide(0);

      const autoPlayInterval = carousel.dataset.autoplay;
      if (autoPlayInterval) {
        setInterval(() => {
          showSlide(currentSlide + 1);
        }, parseInt(autoPlayInterval) * 1000);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initLazyLoad();
      initCarousel();
    });
  } else {
    initLazyLoad();
    initCarousel();
  }
})();
