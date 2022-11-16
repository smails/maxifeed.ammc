if (window.innerWidth > 1200) {
  $('.news-index__line').mouseenter(function () {
    $(this).addClass('active').siblings().removeClass('active');
    $('.news-index__pic').css('display', 'none');
    $('.news-index__pic').eq($(this).index()).fadeIn(200);
  })
} else{
  $('.news-index__line').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    $('.news-index__pic').css('display', 'none');
    $('.news-index__pic').eq($(this).index()).fadeIn(200);
    if (window.innerWidth < 575) {
      $('.news-index__content').animate({
        scrollLeft: ($(this).width() + 25) * $(this).index(),
      }, 500)
    }
  })
}

const newsSlider = new Swiper('.news-page .swiper-container', {
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