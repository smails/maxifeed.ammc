const brands = new Swiper('.brands__slider .swiper-container', {
  speed: 400,
  loop: true,
  slidesPerView: 6,
  slidesOffsetAfter: 0,
  slidesPerGroup: 3,
  centeredSlides: true,
  breakpoints: {
    575: {
      slidesPerView: 'auto',
      spaceBetween: 20,
    },
    1023: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
    },
    1600: {
      slidesPerView: 5,
    },
  }
});