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
  $('').on('click', function() {
    $('').toggleClass('__toggle--show');
  });
});

// button toggle

$(function() {
  $('.button--toggle').on('click', function() {
    $(this).toggleClass('button--less');
  });
});

// image toggle

$(function() {
  $('.button--iceland').on('click', function() {
    $('.image-grid--iceland').toggleClass('image-grid__toggle--show');
  });
});
$(function() {
  $('.button--netherlands').on('click', function() {
    $('.image-grid--netherlands').toggleClass('image-grid__toggle--show');
  });
});
$(function() {
  $('.button--belgium').on('click', function() {
    $('.image-grid--belgium').toggleClass('image-grid__toggle--show');
  });
});
$(function() {
  $('.button--germany').on('click', function() {
    $('.image-grid--germany').toggleClass('image-grid__toggle--show');
  });
});
$(function() {
  $('.button--denmark').on('click', function() {
    $('.image-grid--denmark').toggleClass('image-grid__toggle--show');
  });
});
$(function() {
  $('.button--sweden').on('click', function() {
    $('.image-grid--sweden').toggleClass('image-grid__toggle--show');
  });
});
$(function() {
  $('.button--finland').on('click', function() {
    $('.image-grid--finland').toggleClass('image-grid__toggle--show');
  });
});
$(function() {
  $('.button--norway').on('click', function() {
    $('.image-grid--norway').toggleClass('image-grid__toggle--show');
  });
});
$(function() {
  $('.button--thailand').on('click', function() {
    $('.image-grid--thailand').toggleClass('image-grid__toggle--show');
  });
});
$(function() {
  $('.button--cambodia').on('click', function() {
    $('.image-grid--cambodia').toggleClass('image-grid__toggle--show');
  });
});
$(function() {
  $('.button--vietnam').on('click', function() {
    $('.image-grid--vietnam').toggleClass('image-grid__toggle--show');
  });
});
$(function() {
  $('.button--singapore').on('click', function() {
    $('.image-grid--singapore').toggleClass('image-grid__toggle--show');
  });
});
$(function() {
  $('.button--indonesia').on('click', function() {
    $('.image-grid--indonesia').toggleClass('image-grid__toggle--show');
  });
});
$(function() {
  $('.button--australia').on('click', function() {
    $('.image-grid--australia').toggleClass('image-grid__toggle--show');
  });
});
$(function() {
  $('.button--hawaii').on('click', function() {
    $('.image-grid--hawaii').toggleClass('image-grid__toggle--show');
  });
});
$(function() {
  $('.button--canada').on('click', function() {
    $('.image-grid--canada').toggleClass('image-grid__toggle--show');
  });
});
$(function() {
  $('.button--usa').on('click', function() {
    $('.image-grid--usa').toggleClass('image-grid__toggle--show');
  });
});
$(function() {
  $('.button--puerto-rico').on('click', function() {
    $('.image-grid--puerto-rico').toggleClass('image-grid__toggle--show');
  });
});
