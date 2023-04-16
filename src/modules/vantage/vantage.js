const vantage = new Swiper('.vnt .swiper-container', {
  speed: 400,
  loop: true,
  slidesPerView: 1,
  autoplay: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  breakpoints: {
    1024: {
      allowTouchMove: true,
    },
  },
  pagination: {
    el: '.vnt__pagination',
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

const target_block = $('.step');
let blockStep = true;

window.addEventListener('scroll', () => {
  // eslint-disable-next-line camelcase
  if (target_block.length) {
    const se = window.pageYOffset > target_block.offset().top - $(window).height() / 2;
    if (se && blockStep) {
      blockStep = false;
      const comma_separator_number_step = $.animateNumber.numberStepFactories.separator('');
      $(target_block).find('.step__numb').each(function () {
        const numb_end = $(this).find('span').data('numb');
        $(this).find('span').animateNumber({
          number: numb_end,
          easing: 'easeInQuad',
          numberStep: comma_separator_number_step,
        },4000);
        setTimeout(() => {
          $(this).find('span').next().fadeIn();
        }, 4500);
      });
    }
  }
})
// window.addEventListener('load', () => {
//   // eslint-disable-next-line camelcase
//   if (target_block.length) {
//     $(target_block).find('[data-numb]').each((index, item) => {
//       if (item.dataset.numb.length == 3){
//         item.style.width = item.dataset.numb.length * 23 + 'px';
//       } else if (item.dataset.numb.length == 4){
//         item.style.width = item.dataset.numb.length * 27 + 'px';
//       } else if (item.dataset.numb.length == 5) {
//         item.style.width = item.dataset.numb.length * 29 + 'px';
//       }
//     })
//   }
// })