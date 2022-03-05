  (function($) {
    var $btn = $('.toggle_btn');
    var $inner = $('.inner');
    var $mask = $('#mask');
    open = ('open');

    //.btnをクリックしたらnavメニューの表示＋maskの表示
    $btn.on("click",function() {
      $(this).toggleClass(open);
      $inner.toggleClass(open);
      $mask.toggleClass(open);
    });
    //maskをクリックした際の処理
    $mask.on('click',function() {
      $(this).removeClass(open);
      $inner.removeClass(open);
      $btn.removeClass(open);
    });
  })(jQuery);