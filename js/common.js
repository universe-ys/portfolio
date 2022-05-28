$(document).ready(function(){



  var windowWidth = window.matchMedia("screen and (min-width: 1200px)");



  // 랩탑
  if (windowWidth.matches) {

  
      
      // nav 열기, 닫기
      $('header a.menu').on('click', function(){
        $('header nav .depth2').stop().slideToggle();
    
        if($(this).hasClass('on')){
          $(this).removeClass('on');
        } else {
          $(this).addClass('on');
          $('.searchzone-container').fadeOut();
        }
      });
      


      // header 노출
      var prevScrollpos = window.pageYOffset;
  
      window.onscroll = function () {
          var currentScrollpos = window.pageYOffset;
  
          if (prevScrollpos > currentScrollpos) {
              document.getElementById("header").style.top = "44px";
          } else {
              document.getElementById("header").style.top = "-100%";
          }
          prevScrollpos = currentScrollpos;
      }
  
  
  
      // main keyword 수직 슬라이드
      new Swiper('.keyword-container .swiper-container', {
        direction: 'vertical',
        autoplay: true,
        loop: true,
      });
  
  
  
  
      // coupon animation
      function random(min, max) {
        return parseFloat((Math.random() * (max - min) + min).toFixed(2))
      }
      function floatingObject(selector, delay, size) {
        gsap.to(
          selector,
          random(.5, 1), 
          { 
            y: size,
            repeat: -1,
            yoyo: true,
            ease: Power1.easeInOut,
            delay: random(0, delay)
          }
        );
      }
      floatingObject('.coupon', 1, 4);
  
  
  
  // 모바일   
  } else {



      // header scroll color 
      var $header = $('header');
       $(window).scroll(function(){
         if($(this).scrollTop()>0){
           $header.addClass('on');
         } else {
           $header.removeClass('on');
         }
       });
      
  

      // nav 열기, 닫기
      $('header a.menu').on('click', function(){
        if($(this).hasClass('on')){
          $(this).removeClass('on');
          $('header nav .gnb_con').stop().animate({'right':'-100%'}, 200);
          $('header nav .gnb_dim-mo').stop().fadeOut(300);
        } else {
          $(this).addClass('on');
          $('.searchzone-container').fadeOut();
          $('header nav .gnb_dim-mo').stop().fadeIn(200);
          $('header nav .gnb_con').stop().animate({'right':'0'}, 300);
        }
      });

      $('header nav .gnb_dim-mo').on('click', function(){
        $('header nav a.menu').removeClass('on');
        $('header nav .gnb_con').stop().animate({'right':'-100%'}, 200);
        $('header nav .gnb_dim-mo').stop().fadeOut(300);
      });
  


      // gnb-mo slide
      new Swiper('.event-mo .swiper-container', {
        effect: 'fade',
        slidesPerView: 1,
        spaceBetween: 20,
        speed: 800,
        loop: true,
        autoplay: {
          disableOnInteraction: false,
        },
      }); 



      // footer address
      $('.f_logo').on('click', function(){
        $(this).toggleClass('on');
        $('.f_bottom address ul').slideToggle('fast');
      });


  
  }
  

  
  // 모바일, 랩탑 COMMON

  // like-icon
  $('.like-icon').on('click', function(){
    if($(this).find('span').hasClass('fill')){
      $(this).find('span').removeClass('fill')
    } else {
      $(this).find('span').addClass('fill')
    }
  
  });
  
  
  
  // search 열기
  $('#openSch').on('click', function(){
    $('.searchzone-container').fadeIn();
    $('header nav a.menu').removeClass('on');
    $('header nav .depth2').slideUp();
    $('header nav .gnb_con').stop().animate({'right':'-100%'}, 200);
    $('header nav .gnb_dim-mo').stop().fadeOut(300);
      
  
    
  // 핫 키워드 
    const fadeEls = document.querySelectorAll('.hot .fade-in');
    fadeEls.forEach(function (fadeEl, index) {
      gsap.to(fadeEl, 1, {
        delay: (index + 1) * .3, 
        opacity: 1
      });
    });
  });
  
  
  
  // search 닫기
  $('#closeSch').on('click', function(){
    $('.searchzone-container').fadeOut();
  });
  
    
 
  // top으로 이동
  const toTopEl = document.querySelector('#to-top');
  
  window.addEventListener('scroll', _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
      gsap.to(toTopEl, .2, {
        x: 0
      });
    } else {
      gsap.to(toTopEl, .2, {
        x: 100
      });
    }
  }, 700));
  
  
  toTopEl.addEventListener('click', function () {
    gsap.to(window, .7, {
      scrollTo: 0
    });
  });
  
  
  
  // AOS.js
  AOS.init({
    once: true,
    duration: 2000,
    easing: 'ease in-out circ',
  });
  
  
  
  // 해상도 변경 시 새로고침
  
  jQuery(function($) {
  
    window.onresize = function(){
      document.location.reload();
    };
  
  });

  

});






 


