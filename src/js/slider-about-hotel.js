//--------------------------swiper--------------------------------------

const swiper = new Swiper('.swiper2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  // centeredSlides: true,
  
  //

  breakpoints: {
    // адаптив для разрешения экрана
    414: {
      slidesPerView: 1.29,
      spaceBetween: 20,
      centeredSlides: true
    },
    // when window width is >= 
    1024: {
      slidesPerView: '2',
      spaceBetween: 40,
      centeredSlides: false,
    //  autoHeight: true
    },
    // when window width is >=
    1280: {
      slidesPerView: '2',
      spaceBetween: 40,
      centeredSlides: false
    }
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination2',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next2',
    prevEl: '.swiper-button-prev2',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar2',
  },
  grabcursor: true,
  watchoverflow: true,

  autoplay: {
    delay: 2000,
    //disableOnInteraction: false
  }
});