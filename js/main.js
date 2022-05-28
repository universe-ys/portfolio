// 메인 슬라이드
var mainSwiper1 = new Swiper('main .swiper-container', {
  slidesPerView: 1,
  speed: 1500,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: 'main .swiper-pagination',
    clickable: true,
  },
});


let $slides = document.querySelectorAll('.swiper-slide');
for (let i of $slides) {
  i.addEventListener('mouseover', function(){
    mainSwiper1.autoplay.stop();
  });
  i.addEventListener('mouseout', function(){
    mainSwiper1.autoplay.start();
  });
}



// md-prod   
new Swiper('.md-prod .swiper-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 1000,
  loop: true,
  navigation: {
    prevEl: '.md-prod .swiper-button-prev',
    nextEl: '.md-prod .swiper-button-next',
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});



// collection slide 연동
var mainSwiper = new Swiper('.collection .mainSwiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    prevEl: '.collection .swiper-button-prev',
    nextEl: '.collection .swiper-button-next',
  },
  pagination: {
    el: '.mainSwiper .swiper-pagination',
    type: 'fraction',
  },
});


var subSwiper = new Swiper('.collection .subSwiper', {
  effect: 'fade',
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: '.subSwiper .swiper-pagination',
    clickable: true,
  },
});


mainSwiper.controller.control = subSwiper;
subSwiper.controller.control = mainSwiper;



// instagram  
new Swiper('.instagram .swiper-container', {
  slidesPerView: 1.2,
  spaceBetween: 20,
  speed: 2000,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});