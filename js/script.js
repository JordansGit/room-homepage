let mobileMenu = document.querySelector('.mobile-menu');
let navCloseBtn = document.querySelector('.nav-close-btn');
let navList = document.querySelector('.nav-list');
let header = document.querySelector('.header');
let nav = document.querySelector('.nav');

// Mobile Menu 

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

// Image slider 

let heroImagesDesktop = document.getElementsByClassName("hero-img-desktop");
let heroImagesMobile = document.getElementsByClassName("hero-img-mobile");

let slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let slideImages;
  let slideText = document.getElementsByClassName("slide-text");
  if(window.matchMedia("(min-width: 800px)").matches) {
    slideImages = heroImagesDesktop;
  } else {
    slideImages = heroImagesMobile;
  }

  if (n > slideImages.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slideImages.length}

  for (let i = 0; i < slideImages.length; i++) {
    slideImages[i].style.display = "none"; 
  }
  for (let i = 0; i < slideText.length; i++) {
    slideText[i].style.display = "none"; 
  }
  slideImages[slideIndex-1].style.display = "block";  
  slideText[slideIndex-1].style.display = "block";  
}

/* Notes / To do: 

It messes up when I resize from mobile to desktop. 
I have to refresh the page in order to get it working properly again. 

I haven't implemented adding being able to use keyboard left and right for image slider buttons. 
*/ 