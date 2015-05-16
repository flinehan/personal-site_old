/**
 * Created by Frank on 12/27/2014.
 */
(function (window) {
  $('a[href^="#"]').on('click', function(event) {
      var target = $( $(this).attr('href') );

      if( target.length ) {
          event.preventDefault();
          $('html, body').animate({
              scrollTop: target.offset().top
          }, 800);
      }
    });
})(window);

$( document ).ready(function() {
    $(".button-collapse").sideNav();

    var background = $('.fr-background');

    var parallax = function() {
      var scrolled = $(window).scrollTop();
      background.css('top', -(scrolled * 0.8) + 'px');
    };

    //this is a greedy function, but we have to fire this each time
    //so that the parallax scrolls nice :)
    $(window).scroll(function(e) {
      parallax();
    });

    if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        //super sub optimal to sniff at the agent like this... ~frank
        $.firefly({
            color: '#fff',
            minPixel: 1,
            maxPixel: 2,
            total : 40,
            on: '.fr-background'
        });
    }


});


