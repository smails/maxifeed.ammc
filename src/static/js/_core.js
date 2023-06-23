/* eslint-disable eqeqeq */

$('.js-open-modal').click((e) => {
  e.preventDefault();
  $('.modal').hide();
  const modal = e.target.getAttribute('href') != null ? e.target.getAttribute('href') : e.target.parentElement.getAttribute('href');
  $('body').addClass("hidden");
  $('.header').addClass('over');
  $(`[data-type="${modal}"]`).fadeIn();
});

$(window).click((e) => {
  if (e.target.classList.contains('modal') && e.target.style.display == 'block') {
    $('.modal').fadeOut();
    $('body').removeClass('hidden');
  }
});

$('.modal__close').click((e) => {
  $('.modal').fadeOut();
  $('body').removeClass('hidden');
  $('.header').removeClass('over');
});
$('.success__close').click((e) => {
  $('.modal').fadeOut();
  $('.success').fadeOut();
  $('body').removeClass('hidden');
  $('.header').removeClass('over');
});

$('select').select2({
  minimumResultsForSearch: Infinity,
  width: 'style',
  selectOnClose: true,
});


$('.modal__fl').change(function () {
  $(this).parents('.modal__addfile').addClass('add');
  $('.modal__file-name').text(this.files[0].name)
})
$('.modal__file-change').click(function (e) {
  if ($('.modal__addfile').hasClass('add')) {
    $('.modal__addfile').removeClass('add');
    $('.modal__hidden').val(null);
    $('.modal__file-name').text('Прикрепить файл')
  } else{
    $('.modal__hidden').trigger('click');
  }
})

$('.callback__field, .modal__field').keyup(function () {
  if ($(this).val() == '' || $(this).val() == '+7(___) ___-__-__') {
    $(this).removeClass('val');
  } else{
    $(this).addClass('val');
  }
});

$('.up').click(function () {
  $('html, body').animate({
    scrollTop: 0,
  }, 1000)
})

$(window).on('scroll load', () => {
  const up = document.querySelector('.up');
  if(window.pageYOffset > window.innerHeight / 2){
    up.classList.add('visible');
  } else{
    up.classList.remove('visible');
  }
  if (window.innerWidth < 1600) {
    const raz = window.pageYOffset + $('.footer').outerHeight(true) + (window.innerHeight / 2);
    if (raz > $('.footer').offset().top) {
      up.style.bottom = '25vw';
    } else {
      up.style.bottom = "6vw ";
    }
  }
})

// $('input[type="tel"]').mask('+7(999) 999-99-99', { autoclear: false });

const contentSlider = new Swiper('.content .swiper-container', {
  speed: 400,
  loop: true,
  slidesPerView: 1,
  breakpoints: {
    1024: {
      allowTouchMove: true,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      let numb;
      if(index < 9){
        numb = '0' + (index + 1);
      } else {
        numb = index++;
      }
      return '<span class="' + className + '">' + numb + '</span>';
    },
  },
});

function phone_mask() {
    $.mask.definitions['9'] = '';
    $.mask.definitions['d'] = '[0-9]';
    $("input[type=tel]").mask("+7 ddd ddd-dd-dd");
    var input = document.querySelectorAll("[type=tel]");
    input.forEach(function (item) {
      if (!item.parentElement.classList.contains('iti')) {
        window.intlTelInput(item, {
          autoHideDialCode: false,
          autoPlaceholder: "aggressive",
          placeholderNumberType: "MOBILE",
          preferredCountries: ['ru'],
          utilsScript: "/libs/intl/js/utils.js",
          customPlaceholder: function (selectedCountryPlaceholder, selectedCountryData) {
            if (selectedCountryData.dialCode == 7) {
              return '+ ' + selectedCountryPlaceholder.replace(/[0-9]/g, '_');
            } else {
              return '+' + selectedCountryData.dialCode + ' ' + selectedCountryPlaceholder.replace(/[0-9]/g, '_');
            }
          },
        });
      }
    });
    $('input[type="tel"]').on("close:countrydropdown", function (e, countryData) {
      $(this).val('');
      $(this).mask($(this).attr('placeholder').replace(/[_]/g, 'd'));
    });
  }

phone_mask();


let isValid;
let check;
var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;
	$('input[name="email"]').blur(function () {
		if (!this.value.match(pattern) && this.value != '') {
			this.classList.add('error');
			isValid = false;
		}
	});
$('form').submit(function (e) {
  e.preventDefault();
  const $form = $(this);
  $form.find('.required').each((index, elem) => {
    if (elem.value === '') {
      elem.classList.add('error');
      isValid = false;
    } else {
      isValid = true;
      elem.classList.remove('error')
    }
  });
  if (!$form.find('.callback__hidden, .modal__hidden').prop('checked')) {
    // eslint-disable-next-line no-unused-expressions
    !$form.find('.callback__hidden, .modal__hidden').addClass('error');
    check = false;
  } else {
    $('.callback__hidden, .modal__hidden').removeClass('error');
    check = true;
  }
  if (isValid !== false && check) {
    setTimeout(() => {
      $form.find(('.callback__field, .modal__field')).each((index, elem) => {
        elem.classList.remove('val')
      })
      $('.modal').fadeOut();
      $form.trigger('reset');
      $('body').addClass("hidden");
      $('.header').addClass('over');
      $('.success').fadeIn();
    }, 500);
  }
});
