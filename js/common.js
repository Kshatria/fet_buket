$(document).ready(function(){
  $(".menu__navigation").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 500);
  });

  // nav-menu
  $('.menu__button').on('click', function () {
    $('.menu__button').toggleClass('closed');
    $('.menu__list').toggleClass('active');
  })
});

//PARALLAX INIT
if (window.innerWidth > 992) {
  var scene = document.getElementById('scene-1');
  var parallaxInstance = new Parallax(scene);
}

//SLIDER INIT
var homeSlider = new Swiper('.home__slider', {
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 3000,
  },
  speed: 1500
});

var bouquet = new Swiper('.bouquet__container', {
    effect: 'flip',
    grabCursor: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    loop: true,
    speed: 1000,
});

var pavlova = new Swiper('.js-pavlova-container', {
  slidesPerView: 3,
  spaceBetween: 20,
});

var roll = new Swiper('.js-roll-container', {
  slidesPerView: 3,
  spaceBetween: 20,
});

var swiper = new Swiper('.cake__container', {
  direction: 'vertical',
  slidesPerView: 3,
  spaceBetween: 20,
  centeredSlides: true,
  pagination: {
    el: '.cake__pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.cake__swiper-button-next',
    prevEl: '.cake__swiper-button-prev',
  },
});

(function () {
  let getSliderLastElement = function (sliderId) {
    let i = sliderId.querySelectorAll('.swiper-slide')
    let lastElement = i.length
    return lastElement
  }
 
  cakeDesc.on('transitionEnd', function() {
    let slideIndex = cakeDesc.realIndex
    let cakeDescSlider = document.querySelector('#cakeDesc')
    console.log(slideIndex)
    getSliderLastElement(cakeDescSlider) == slideIndex + 1
    ? document.querySelector('.cake__button-next').setAttribute('style', 'display:none;')
    : document.querySelector('.cake__button-next').setAttribute('style', 'display:block;')
    slideIndex == 0
    ? document.querySelector('.cake__button-prev').setAttribute('style', 'display:none;')
    : document.querySelector('.cake__button-prev').setAttribute('style', 'display:block;')
  })
})

// feedback forms
$(document).ready(function () {
  $('input[name="phone"]').mask('+7 (000)-000-00-00');
  $("#f_contact").submit(function(event) {
    var postForm = {
      'name': $('#name').val(),
      'phone': $('#phone').val(),
    };
    $.ajax({
      type: 'POST',
      url: 'feedback.php',
      data: postForm,
      dataType: 'json',
      success: function(data) {
        if (!data.success) {
          if (data.errors.name) {
            $('.throw_error').fadeIn(1000).html(data.errors.name);
          }
        } else {
          $.fancybox.close();
          $.fancybox.open('<div class="success-message text-center">' + data.posted + '</div>');
          $('form input[type="text"]').val('')
          $('form input[type="phone"]').val('')
        }
      }
    });
    event.preventDefault();
  });

  $("#feedback-footer_form").submit(function(event) {
    var postForm = {
      'name': $('#feedback-footer_name').val(),
      'phone': $('#feedback-footer_phone').val(),
    };
    $.ajax({
      type: 'POST',
      url: 'feedback.php',
      data: postForm,
      dataType: 'json',
      success: function(data) {
        if (!data.success) {
          if (data.errors.name) {
            $('.throw_error').fadeIn(1000).html(data.errors.name);
          }
        } else {
          $.fancybox.close();
          $.fancybox.open('<div class="success-message text-center">' + data.posted + '</div>');
          $('form input[type="text"]').val('')
          $('form input[type="phone"]').val('')
        }
      }
    });
    event.preventDefault();
  });

  $("#tubes_condensed_milk_form").submit(function(event) {
    var postForm = {
      'name': $('#tubes_condensed_milk_name').val(),
      'phone': $('#tubes_condensed_milk_phone').val(),
    };
    $.ajax({
      type: 'POST',
      url: 'feedback.php',
      data: postForm,
      dataType: 'json',
      success: function(data) {
        if (!data.success) {
          if (data.errors.name) {
            $('.throw_error').fadeIn(1000).html(data.errors.name);
          }
        } else {
          $.fancybox.close();
          $.fancybox.open('<div class="success-message text-center">' + data.posted + '</div>');
          $('form input[type="text"]').val('')
          $('form input[type="phone"]').val('')
        }
      }
    });
    event.preventDefault();
  });

  $("#tubes_cream_cheese_form").submit(function(event) {
    var postForm = {
      'name': $('#tubes_condensed_milk_name').val(),
      'phone': $('#tubes_condensed_milk_phone').val(),
    };
    $.ajax({
      type: 'POST',
      url: 'feedback.php',
      data: postForm,
      dataType: 'json',
      success: function(data) {
        if (!data.success) {
          if (data.errors.name) {
            $('.throw_error').fadeIn(1000).html(data.errors.name);
          }
        } else {
          $.fancybox.close();
          $.fancybox.open('<div class="success-message text-center">' + data.posted + '</div>');
          $('form input[type="text"]').val('')
          $('form input[type="phone"]').val('')
        }
      }
    });
    event.preventDefault();
  });

  $("#tubes_coconut_cream_form").submit(function(event) {
    var postForm = {
      'name': $('#tubes_coconut_cream_name').val(),
      'phone': $('#tubes_coconut_cream_phone').val(),
    };
    $.ajax({
      type: 'POST',
      url: 'feedback.php',
      data: postForm,
      dataType: 'json',
      success: function(data) {
        if (!data.success) {
          if (data.errors.name) {
            $('.throw_error').fadeIn(1000).html(data.errors.name);
          }
        } else {
          $.fancybox.close();
          $.fancybox.open('<div class="success-message text-center">' + data.posted + '</div>');
          $('form input[type="text"]').val('')
          $('form input[type="phone"]').val('')
        }
      }
    });
    event.preventDefault();
  });

  $("#tubes_chocolate_form").submit(function(event) {
    var postForm = {
      'name': $('#tubes_chocolate_name').val(),
      'phone': $('#tubes_chocolate_phone').val(),
    };
    $.ajax({
      type: 'POST',
      url: 'feedback.php',
      data: postForm,
      dataType: 'json',
      success: function(data) {
        if (!data.success) {
          if (data.errors.name) {
            $('.throw_error').fadeIn(1000).html(data.errors.name);
          }
        } else {
          $.fancybox.close();
          $.fancybox.open('<div class="success-message text-center">' + data.posted + '</div>');
          $('form input[type="text"]').val('')
          $('form input[type="phone"]').val('')
        }
      }
    });
    event.preventDefault();
  });

  $("#tubes_lemon_form").submit(function(event) {
    var postForm = {
      'name': $('#tubes_lemon_name').val(),
      'phone': $('#tubes_lemon_phone').val(),
    };
    $.ajax({
      type: 'POST',
      url: 'feedback.php',
      data: postForm,
      dataType: 'json',
      success: function(data) {
        if (!data.success) {
          if (data.errors.name) {
            $('.throw_error').fadeIn(1000).html(data.errors.name);
          }
        } else {
          $.fancybox.close();
          $.fancybox.open('<div class="success-message text-center">' + data.posted + '</div>');
          $('form input[type="text"]').val('')
          $('form input[type="phone"]').val('')
        }
      }
    });
    event.preventDefault();
  });

  $("#tubes_empty_form").submit(function(event) {
    var postForm = {
      'name': $('#tubes_empty_name').val(),
      'phone': $('#tubes_empty_phone').val(),
    };
    $.ajax({
      type: 'POST',
      url: 'feedback.php',
      data: postForm,
      dataType: 'json',
      success: function(data) {
        if (!data.success) {
          if (data.errors.name) {
            $('.throw_error').fadeIn(1000).html(data.errors.name);
          }
        } else {
          $.fancybox.close();
          $.fancybox.open('<div class="success-message text-center">' + data.posted + '</div>');
          $('form input[type="text"]').val('')
          $('form input[type="phone"]').val('')
        }
      }
    });
    event.preventDefault();
  });
})
