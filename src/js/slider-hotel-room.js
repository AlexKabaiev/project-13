//--------------------------swiper--------------------------------------

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  centeredSlides: true,
  //

  breakpoints: {
    // адаптив для разрешения экрана
    414: {
      slidesPerView: 1.43,
      spaceBetween: 16
    },
    // when window width is >= 
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    // when window width is >=
    1280: {
      slidesPerView: 2,
      spaceBetween: 40,
    }
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button__room-next1',
    prevEl: '.swiper-button__room-prev1',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});