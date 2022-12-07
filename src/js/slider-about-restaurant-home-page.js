const swiper = new Swiper('.swiper-about-restaurant', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  
  //

  breakpoints: {
    // адаптив для разрешения экрана
    414: {
      slidesPerView: 'auto',
          spaceBetween: 20
    },
    // when window width is >= 
    1024: {
      slidesPerView: 'auto',
      spaceBetween: 40
    },
    // when window width is >=
    1280: {
      slidesPerView: 'auto',
      spaceBetween: 40
    }
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination'
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-start',
    prevEl: '.swiper-button-finish'
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar'
  },
});