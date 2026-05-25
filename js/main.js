// RSU PRINCE2 — vertikāli ritināma prezentācija
// Dot-nav aktīvā stāvokļa izsekošana + tastatūras navigācija.
(function () {
  const deck = document.querySelector('.deck');
  const slides = Array.from(document.querySelectorAll('.slide'));
  const dots = Array.from(document.querySelectorAll('.dot-nav .dot'));

  if (!deck || !slides.length) return;

  // ---------- Active dot via IntersectionObserver ----------
  if (dots.length === slides.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && e.intersectionRatio >= 0.55) {
            const idx = slides.indexOf(e.target);
            if (idx >= 0) {
              dots.forEach((d, i) => d.classList.toggle('active', i === idx));
            }
          }
        });
      },
      { root: deck, threshold: [0.55, 0.75] }
    );
    slides.forEach((s) => io.observe(s));
  }

  // ---------- Keyboard: arrows / PgUp / PgDn / Home / End ----------
  function currentIndex() {
    const scrollTop = deck.scrollTop;
    const h = window.innerHeight;
    return Math.min(slides.length - 1, Math.round(scrollTop / h));
  }
  function goTo(i) {
    const target = slides[Math.max(0, Math.min(slides.length - 1, i))];
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    switch (e.key) {
      case 'ArrowDown':
      case 'PageDown':
      case ' ':
        e.preventDefault();
        goTo(currentIndex() + 1);
        break;
      case 'ArrowUp':
      case 'PageUp':
        e.preventDefault();
        goTo(currentIndex() - 1);
        break;
      case 'Home':
        e.preventDefault();
        goTo(0);
        break;
      case 'End':
        e.preventDefault();
        goTo(slides.length - 1);
        break;
    }
  });

  // ---------- Initial active dot from hash ----------
  if (location.hash) {
    const target = document.querySelector(location.hash);
    if (target) requestAnimationFrame(() => target.scrollIntoView({ behavior: 'auto', block: 'start' }));
  } else {
    dots[0]?.classList.add('active');
  }
})();
