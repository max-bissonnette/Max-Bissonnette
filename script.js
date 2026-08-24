// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const siteNav = document.getElementById('site-nav');

navToggle.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

siteNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Mark the tab for the current page as "open"
const currentFile = location.pathname.split('/').pop() || 'index.html';
siteNav.querySelectorAll('a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentFile) {
    link.classList.add('is-current');
    link.setAttribute('aria-current', 'page');
  }
});

// Portfolio category toggle (Music / Writing)
const toggleButtons = document.querySelectorAll('.toggle-btn');
const workCards = document.querySelectorAll('.work-card');

toggleButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const cat = btn.dataset.cat;

    toggleButtons.forEach(b => {
      b.classList.toggle('is-active', b === btn);
      b.setAttribute('aria-selected', String(b === btn));
    });

    workCards.forEach(card => {
      card.hidden = card.dataset.cat !== cat;
    });
  });
});
