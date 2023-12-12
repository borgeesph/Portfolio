const menuhamburguer = document.querySelector('.menu-hamburguer');
const nav = document.querySelector('.navbar');
const links = document.querySelectorAll('.navbar-links li a');
let swiper;

let header = document.getElementById('header');

function createSwiper(container, pagination, nextButton, prevButton) {
  return new Swiper(container, {
    slidesPerView: handlewidth(),
    spaceBetween: 30,
    pagination: {
      el: pagination,
      clickable: true,
    },
    navigation: {
      nextEl: nextButton,
      prevEl: prevButton,
    },
  });
}

function handlewidth() {
  let getwidth = window.innerWidth || document.documentElement.clientWidth;
  let slideshow = 3;

  if (getwidth < 1001) {
    slideshow = 2;
  }

  if (getwidth < 700) {
    slideshow = 1;
  }

  return slideshow;
}

swiper = createSwiper(
  ".mySwiper",
  ".swiper-pagination",
  ".swiper-button-next",
  ".swiper-button-prev"
);

menuhamburguer.addEventListener('click', () => {
  nav.classList.toggle('active');
});

links.forEach(item => {
  item.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
});

window.addEventListener('resize', () => {
  swiper.params.slidesPerView = handlewidth();
  swiper.update();
});

window.addEventListener('scroll', () => {
  if (window.scrollY >= 200) {
    header.style.background = '#191919';
  } else {
    header.style.background = 'transparent';
  }
});
