/* ============================================
   Portfolio — Vanilla JS
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // ---- Mobile Nav Toggle ----
  const toggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    navLinks.classList.toggle('open');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  });

  // Close mobile nav when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('open');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // ---- Sticky Nav Background on Scroll ----
  const nav = document.getElementById('mainNav');
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ---- Active Nav Link Based on Scroll Position ----
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = navLinks.querySelectorAll('a[href^="#"]');

  const updateActive = () => {
    const scrollPos = window.scrollY + 120;
    let current = '';

    sections.forEach(section => {
      if (section.offsetTop <= scrollPos) {
        current = section.id;
      }
    });

    navAnchors.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
    });
  };

  window.addEventListener('scroll', updateActive, { passive: true });
  updateActive();

  // ---- Intersection Observer for Reveal Animations ----
  const reveals = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.02, rootMargin: '0px 0px -20px 0px' }
    );

    reveals.forEach(el => observer.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('visible'));
  }

  // ---- Typed Effect for Hero Greeting ----
  const typedEl = document.getElementById('typedGreeting');
  if (typedEl) {
    const text = typedEl.getAttribute('data-text');
    typedEl.textContent = '';
    let i = 0;
    const type = () => {
      if (i < text.length) {
        typedEl.textContent += text.charAt(i);
        i++;
        setTimeout(type, 45);
      }
    };
    // Start typing after a brief delay
    setTimeout(type, 600);
  }
});
