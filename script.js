// var swiper = new Swiper(".slide-content", {
//     slidesPreview: 3,
//     spaceBetween: 30,
//     slidesPerGroup:3,
//     loop: true,
//     loopFillGroupWithBlank: true,
//     pagination:{
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
        
//     },

// });


const swiper = new Swiper(".swiper",  {
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    // Default parameters
    slidesPerView: 1,
    loop: true,
    centeredSlides: true,
    
    pagination: {
      el: 'swiper-pagination',
    },
    
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  });

  // let swipeCards = new Swiper('.card__content'),{
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev"
  //   },
  //   loop: true,

  //   pagination: {

  //   }
  // }

