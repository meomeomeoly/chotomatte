// ============================================
// main.js — Chotomate shared scripts
// ============================================

// Mobile hamburger menu toggle
function toggleMenu() {
  const menu = document.getElementById('nav-menu');
  const hamburger = document.getElementById('hamburger');
  if (!menu || !hamburger) return;
  menu.classList.toggle('open');
  hamburger.classList.toggle('open');
}

// Close menu when a nav link is clicked
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('#nav-menu a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const menu = document.getElementById('nav-menu');
      const hamburger = document.getElementById('hamburger');
      if (menu) menu.classList.remove('open');
      if (hamburger) hamburger.classList.remove('open');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function (e) {
    const nav = document.getElementById('navigationbar');
    const hamburger = document.getElementById('hamburger');
    if (nav && hamburger && !nav.contains(e.target)) {
      document.getElementById('nav-menu')?.classList.remove('open');
      hamburger.classList.remove('open');
    }
  });

  // Sticky header shadow on scroll
  const header = document.getElementById('header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 20) {
        header.style.boxShadow = '0 4px 20px rgba(209,140,224,0.2)';
      } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.08)';
      }
    });
  }
});
