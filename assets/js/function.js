$(function(){
    $('.toggle_btn').on('click', function() {
      $(this).toggleClass('open');
      $('.inner').toggleClass('open');
      return false;
    });
  });