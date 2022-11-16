const abTitleTop = $('.about-top__title');
const abTitle = $('.about__title');
let abTitleTopStatus = true;
let abTitleStatus = true;

function loadAbTitleTop() {
  if (abTitleTop.length) {
    const se = window.pageYOffset > abTitleTop.offset().top - $(window).height() + 200;
    if (se && abTitleTopStatus) {
      abTitleTopStatus = false;
      $(abTitleTop).find('p').each(function (index) {
        setTimeout(() => {
          $(this).addClass('visible');
        }, index * 200);
      });
      setTimeout(() => {
        $(abTitleTop).find('span').each(function (index) {
          setTimeout(() => {
            $(this).addClass('loading');
          }, index * 2000);
        })
      }, 1500);
    }
  }
}

function loadabTitle() {
  if (abTitle.length) {
    const se = window.pageYOffset > abTitle.offset().top - $(window).height() + 200;
    if (se && abTitleStatus) {
      abTitleStatus = false;
      $(abTitle).find('p').each(function (index) {
        setTimeout(() => {
          $(this).addClass('visible');
        }, index * 200);
      });
      setTimeout(() => {
        $(abTitle).find('span').each(function (index) {
          setTimeout(() => {
            $(this).addClass('loading');
          }, index * 2000);
        })
      }, 1500);
    }
  }
}

window.addEventListener('DOMContentLoaded', () =>{
  loadAbTitleTop()
  loadabTitle()
})
window.addEventListener('scroll', () =>{
  loadAbTitleTop()
  loadabTitle()
})