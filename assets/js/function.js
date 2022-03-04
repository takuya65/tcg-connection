  (function($) {
    var $btn = $('.toggle_btn');
    var $inner = $('.inner');
    var $mask = $('#mask');

    //.btnをクリックしたらnavメニューの表示＋maskの表示
    $btn.on('click',function() {
      if ( ! $inner.hasClass('open')) {
        $inner.addClass('open');
        $btn.addClass('open');
        $mask.addClass('open');
        $('body').addClass('open');
      } else {
        $inner.removeClass('open');
        $btn.removeClass('open');
        $mask.removeClass('open');
        $('body').removeClass('open');
      }
    });
    //maskをクリックした際の処理
    $mask.on('click',function() {
      $inner.removeClass('open');
      $btn.removeClass('open');
      $mask.removeClass('open');
      $('body').removeClass('open');
    });
  })(jQuery);