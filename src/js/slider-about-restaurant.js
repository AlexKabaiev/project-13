const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  breakpoints: {
    // адаптив для разрешения экрана
    414: {
      slidesPerView: 1.29,
      spaceBetween: 20,
      centeredSlides: true,
    },
    // when window width is >=
    1024: {
      slidesPerView: '2',
      spaceBetween: 40,
      centeredSlides: false,
    },
    // when window width is >=
    1280: {
      slidesPerView: '2',
      spaceBetween: 40,
      centeredSlides: false,
    },
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  grabcursor: true,
  watchoverflow: true,

  autoplay: {
    delay: 2000,
  },
});
