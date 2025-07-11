// Elegant scroll animations utility
export const initScrollAnimations = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  // Observe all elements with scroll-fade-in class
  document.querySelectorAll('.scroll-fade-in').forEach((el) => {
    observer.observe(el);
  });

  return observer;
};

// Initialize on DOM content loaded
export const setupScrollAnimations = () => {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollAnimations);
  } else {
    initScrollAnimations();
  }
};