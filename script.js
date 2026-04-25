// =============================================
// YIC LANDING PAGE — script.js
// Toggle EN/ES + filtro por categoría
// =============================================

(function () {
  let currentLang = 'es';

  // ---- LANGUAGE TOGGLE ----
  const langToggle = document.getElementById('langToggle');
  const langES = document.getElementById('langES');
  const langEN = document.getElementById('langEN');

  function setLanguage(lang) {
    currentLang = lang;

    // Update active state on buttons
    langES.classList.toggle('active', lang === 'es');
    langEN.classList.toggle('active', lang === 'en');

    // Update all elements with data-es / data-en
    document.querySelectorAll('[data-es]').forEach(el => {
      const text = lang === 'es' ? el.getAttribute('data-es') : el.getAttribute('data-en');
      if (text) {
        if (el.tagName === 'H1' || el.innerHTML.includes('<br>')) {
          el.innerHTML = text;
        } else {
          el.textContent = text;
        }
      }
    });

    // Update html lang attribute
    document.documentElement.lang = lang;
  }

  langToggle.addEventListener('click', function () {
    setLanguage(currentLang === 'es' ? 'en' : 'es');
  });

  // Initialize
  langES.classList.add('active');

  // ---- CATEGORY FILTER ----
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      const filter = this.getAttribute('data-filter');

      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      // Show/hide cards
      cards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

})();
