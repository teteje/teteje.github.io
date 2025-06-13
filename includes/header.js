// /includes/header.js

document.addEventListener("DOMContentLoaded", () => {
  // Highlight active menu link
  const current = location.pathname.split("/").pop();
  document.querySelectorAll(".menu-link").forEach(link => {
    if (link.getAttribute("href") === current) {
      link.classList.add("active");
    }
  });

  // Hamburger menu toggle
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.main-nav');

  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      const expanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', !expanded);
      nav.classList.toggle('open');
      hamburger.classList.toggle('open');
    });
  }

  // Submenu toggle on mobile
  document.querySelectorAll('.menu > li > a').forEach(link => {
    link.addEventListener('click', (e) => {
      const li = link.parentElement;
      if (window.innerWidth <= 768 && li.querySelector('.submenu')) {
        e.preventDefault();
        li.classList.toggle('open');
      }
    });
  });

  // Smooth scroll for arrow-down
  const scrollArrow = document.querySelector('.scroll-down');
  if (scrollArrow) {
    scrollArrow.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector('#main-content');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});
