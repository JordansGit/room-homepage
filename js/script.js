let mobileMenu = document.querySelector('.mobile-menu');
let navCloseBtn = document.querySelector('.nav-close-btn');
let navList = document.querySelector('.nav-list');
let header = document.querySelector('.header');
let nav = document.querySelector('.nav');

mobileMenu.addEventListener('click', function() {
  header.classList.add('nav-open-header');
  nav.classList.add('nav-open-nav');
  navCloseBtn.classList.add('nav-open-close-btn');
  navList.classList.add('nav-open-nav-list');
  document.body.classList.add('nav-open-body');
})

navCloseBtn.addEventListener('click', function() {
  header.classList.remove('nav-open-header');
  nav.classList.remove('nav-open-nav');
  navCloseBtn.classList.remove('nav-open-close-btn');
  navList.classList.remove('nav-open-nav-list');
  document.body.classList.remove('nav-open-body');
})