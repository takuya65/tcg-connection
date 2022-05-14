$(function() {
    setTimeout(function(){
        $('.start__txt').fadeIn(1000);
    },500);
    setTimeout(function(){
        $('.start').fadeOut(500);
    },3000);
});

jQuery(function ($) {
    var fadeIn = $('.fade-in');
    $(window).scroll(function () {
      $(fadeIn).each(function () {
        var offset = $(this).offset().top;
        var scroll = $(window).scrollTop(); 
        var windowHeight = $(window).height();
        if (scroll > offset - windowHeight + 200) {
          $(this).addClass("scroll-in");
        }
      });
    });
  });