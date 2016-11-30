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
  $('.navigation__toggle').on('click', function() {
    $('.navigation').toggleClass('navigation--show');
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
    $('.image__toggle--iceland').toggleClass('image__toggle--show');
  });
});
$(function() {
  $('.button--netherlands').on('click', function() {
    $('.image__toggle--netherlands').toggleClass('image__toggle--show');
  });
});
$(function() {
  $('.button--belgium').on('click', function() {
    $('.image__toggle--belgium').toggleClass('image__toggle--show');
  });
});
$(function() {
  $('.button--germany').on('click', function() {
    $('.image__toggle--germany').toggleClass('image__toggle--show');
  });
});
$(function() {
  $('.button--denmark').on('click', function() {
    $('.image__toggle--denmark').toggleClass('image__toggle--show');
  });
});
$(function() {
  $('.button--sweden').on('click', function() {
    $('.image__toggle--sweden').toggleClass('image__toggle--show');
  });
});
$(function() {
  $('.button--finland').on('click', function() {
    $('.image__toggle--finland').toggleClass('image__toggle--show');
  });
});
$(function() {
  $('.button--norway').on('click', function() {
    $('.image__toggle--norway').toggleClass('image__toggle--show');
  });
});
$(function() {
  $('.button--thailand').on('click', function() {
    $('.image__toggle--thailand').toggleClass('image__toggle--show');
  });
});
$(function() {
  $('.button--cambodia').on('click', function() {
    $('.image__toggle--cambodia').toggleClass('image__toggle--show');
  });
});
$(function() {
  $('.button--vietnam').on('click', function() {
    $('.image__toggle--vietnam').toggleClass('image__toggle--show');
  });
});
$(function() {
  $('.button--singapore').on('click', function() {
    $('.image__toggle--singapore').toggleClass('image__toggle--show');
  });
});
$(function() {
  $('.button--indonesia').on('click', function() {
    $('.image__toggle--indonesia').toggleClass('image__toggle--show');
  });
});
$(function() {
  $('.button--australia').on('click', function() {
    $('.image__toggle--australia').toggleClass('image__toggle--show');
  });
});
$(function() {
  $('.button--hawaii').on('click', function() {
    $('.image__toggle--hawaii').toggleClass('image__toggle--show');
  });
});
$(function() {
  $('.button--canada').on('click', function() {
    $('.image__toggle--canada').toggleClass('image__toggle--show');
  });
});
$(function() {
  $('.button--usa').on('click', function() {
    $('.image__toggle--usa').toggleClass('image__toggle--show');
  });
});
$(function() {
  $('.button--puerto-rico').on('click', function() {
    $('.image__toggle--puerto-rico').toggleClass('image__toggle--show');
  });
});
