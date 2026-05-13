/* ============================================
   navbar.js — Scroll Effects & Active Links
   ============================================ */

(function () {
  const navbar   = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  function onScroll() {
    // Add shadow when scrolled
    navbar.classList.toggle('scrolled', window.scrollY > 40);

    // Highlight active nav link based on scroll position
    let current = '';
    sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - 120) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  }

  window.addEventListener('scroll', onScroll);
  onScroll(); // Run once on load
})();
