// smooth scroll

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000); // scroll speed in milliseconds
        return false;
      }
    }
  });
});

// navigation toggle

$(function() {
  $('.button--iceland').on('click', function() {
    $('.image-grid--iceland').toggleClass('image-grid__toggle--show');
  });
});

// button toggle

$(function() {
  $('.button--toggle').on('click', function() {
    $(this).toggleClass('button--less');
  });
});

// image toggle
