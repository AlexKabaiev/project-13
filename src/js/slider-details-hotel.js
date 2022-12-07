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
      slidesPerView: 1.29,
      spaceBetween: 20
    },
    // when window width is >= 
    1024: {
      slidesPerView: '2',
      spaceBetween: 34,
    },
    // when window width is >=
    1280: {
      slidesPerView: '2.3',
      spaceBetween: 86
    }
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next1',
    prevEl: '.swiper-button-prev1',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});