(function ($) {
  "use strict";

  $('.noticias_slider').owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
      responsiveClass:true,
    nav:false,
    dots: true,
    autoplayHoverPause: false,
      responsive:{
          0:{
              items:1,
          },
          600:{
              items:2,
          },
          1000:{
              items:2,
          }
      }
  })
  $('.tarjetas_slider').owlCarousel({
    loop:true,
    margin:10,
    numVisible:3,
    autoplay: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
      responsiveClass:true,
    nav:true,
    dots: true,
    autoplayHoverPause: false,
      responsive:{
          0:{
              items:1,
          },
          600:{
              items:2,
          },
          1000:{
              items:3,
          },
          2000:{
              items:4,
          }
      }
  })
    $('.quienes_somos_slider').owlCarousel({
        loop:true,
        margin:10,
        numVisible:4,
        autoplay: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        responsiveClass:true,
        nav:true,
        dots: true,
        autoplayHoverPause: false,
        responsive:{
            0:{
                items:1,
            },
            530:{
                items:2,
            },
            700:{
                items:3,
            },
            1000:{
                items:4,
            },
            2000:{
                items:4,
            }
        }
    })
  $('.bancos_slider').owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
      responsiveClass:true,
    nav:true,
    dots: true,
    autoplayHoverPause: false,
      responsive:{
          0:{
              items:1,
          },
          600:{
              items:2,
          },
          1000:{
              items:3,
          },
          2000:{
              items:4,
          }
      }
  })

  var cajeros = $('.cajeros_slider');
  if (cajeros.length) {
    cajeros.owlCarousel({
      items: 1,
      loop: true,
      dots: true,
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 5000,
      nav: true,
      dots: true,
      responsive: {
        0: {
          nav: true,
        },
        768: {
          nav: true
        },
        991: {
          nav: true
        }
      }
    });
  }

  //jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInQuint');
        event.preventDefault();
    });


  // menu fixed js code
  if ($(window).width()>991) {
    $(window).scroll(function () {
      var window_top = $(window).scrollTop() + 1;
      if (window_top > 600) {
        $('.main_menu').addClass('menu_fixed animated fadeInDown');
      } else {
        $('.main_menu').removeClass('menu_fixed animated fadeInDown');
      }
    });
  }else{
    $('.main_menu').addClass('menu_fixed');
  }

  // Scroll to top
  $('.scrollup').click(function() {
      $('html, body').animate({
          scrollTop: 0
      }, 1800);
      return false;
  });

  $(window).scroll(function() {
      var altura = $(document).height();
      if($(window).scrollTop() == 0) {
          $('.scrollup').hide();
      }else{
          $('.scrollup').show();
      }
  });

  // Search Toggle
  $("#search_input_box").hide();
  $("#search_1").on("click", function () {
    $("#search_input_box").slideToggle();
    $("#search_input").focus();
  });
  $("#close_search").on("click", function () {
    $('#search_input_box').slideUp(500);
  });// Search Toggle
  $("#search_input_box2").hide();
  $("#search_2").on("click", function () {
    $("#search_input_box2").slideToggle();
    $("#search_input2").focus();
  });
  $("#close_search2").on("click", function () {
    $('#search_input_box2').slideUp(500);
  });

  //Rating start select
  $('.rating > span').click(function(e) {
        $('.rating > span').removeClass('select');        
        $(this).addClass('select');
        $('.valorenos .btn').addClass('active');
        $('.valorenos .btn').removeAttr('disabled');
        e.stopPropagation();
        
  });
  $('html').click(function() {
        $('.rating > span').removeClass('select');   
        $('.valorenos .btn').removeClass('active');         
        $('.valorenos .btn').attr('disabled','true');
        
  });

}(jQuery));