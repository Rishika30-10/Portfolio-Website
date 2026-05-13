/* ============================================
   backtop.js — Back to Top Button
   ============================================ */

(function () {
  const backTopBtn = document.getElementById('backTop');

  window.addEventListener('scroll', () => {
    backTopBtn.classList.toggle('show', window.scrollY > 400);
  });

  backTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();
