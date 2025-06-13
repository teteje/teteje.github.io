// /includes/header.js

// Highlight active page in menu
document.addEventListener("DOMContentLoaded", () => {
  const current = location.pathname.split("/").pop();

  document.querySelectorAll(".menu-link").forEach(link => {
    if (link.getAttribute("href") === current) {
      link.classList.add("active");
    }
  });

  // Smooth scroll on arrow-down click
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

// Hamburger menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.createElement('div');
  hamburger.classList.add('hamburger');
  hamburger.innerHTML = '<div></div><div></div><div></div>';

  const headerContent = document.querySelector('.header-content');
  headerContent.insertBefore(hamburger, headerContent.querySelector('.main-nav'));

  const nav = document.querySelector('.main-nav');

  hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
    hamburger.classList.toggle('open');
  });

  // Toggle submenu on mobile (click on parent li)
  document.querySelectorAll('.menu > li > a').forEach(link => {
    link.addEventListener('click', (e) => {
      const li = link.parentElement;
      if (window.innerWidth <= 768 && li.querySelector('.submenu')) {
        e.preventDefault();
        li.classList.toggle('open');
      }
    });
  });
});
