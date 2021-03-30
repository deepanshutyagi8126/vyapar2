jQuery("#carousel").owlCarousel({
  autoplay: true,
  lazyLoad: true,
  loop: true,
  margin:0,
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 6000,
  smartSpeed: 1000,
  nav: false,
  dots:false,
  responsive: {
    0: {
      items: 1
    }
  }
});
jQuery("#carouselicon").owlCarousel({
  autoplay: true,
  lazyLoad: true,
  loop: true,
  margin:0,
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 6000,
  smartSpeed: 1000,
  nav: false,
  dots:false,
  responsive: {
    0: {
      items: 4
    }
  }
});
jQuery("#carousel2").owlCarousel({
  items: 1,
  loop: true,
  nav: true,
  autoplay: true,
  autoplayTimeout: 5000,
  smartSpeed: 1000,
  animateOut: 'fadeOut',
       animateIn: 'fadeIn',
       navText: [' <img src="imgs/left-arrow.svg">', '<img src="imgs/right-arrow.svg">'],
});

  $(window).scroll(function () {
if ($(window).scrollTop() >= 1) {
    $('.header').addClass('fixedHeader');
} else {
    $('.header').removeClass('fixedHeader');
}
});

jQuery("#carousel3").owlCarousel({
  autoplay: true,
  lazyLoad: true,
  loop: true,
  margin:0,
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 4000,
  smartSpeed: 800,
  nav: false,
  dots:true,
  responsive: {
    0: {
      items: 2
    }
  }
});

  $(window).scroll(function () {
if ($(window).scrollTop() >= 1) {
    $('.header').addClass('fixedHeader');
} else {
    $('.header').removeClass('fixedHeader');
}
});

$.fn.jQuerySimpleCounter = function( options ) {
  var settings = $.extend({
      start:  0,
      end:    100,
      easing: 'swing',
      duration: 4000,
      complete: ''
  }, options );

  var thisElement = $(this);

  $({count: settings.start}).animate({count: settings.end}, {
  duration: settings.duration,
  easing: settings.easing,
  step: function() {
    var mathCount = Math.ceil(this.count);
    thisElement.text(mathCount);
  },
  complete: settings.complete
});
};


$('#number1').jQuerySimpleCounter({end: 120,duration: 10000});
$('#number2').jQuerySimpleCounter({end: 200,duration: 10000});
$('#number3').jQuerySimpleCounter({end: 359,duration: 10000});
$('#number4').jQuerySimpleCounter({end: 246,duration: 10000});

