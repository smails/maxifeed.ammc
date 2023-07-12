const prodIconAnim = $('.products-line__icon-big');
let prodIconAnimStatus = true;

function loadprodIconAnim() {
  if (prodIconAnim.length) {
    const se = window.pageYOffset > prodIconAnim.offset().top - $(window).height() + 200;
    if (se && prodIconAnimStatus) {
      prodIconAnimStatus = false;
      $(prodIconAnim).find('.op').each(function (index, item) {
        $(item).addClass('view')
      });
    }
  }
}

window.addEventListener('DOMContentLoaded', () => {
  loadprodIconAnim()
})
window.addEventListener('scroll', () => {
  loadprodIconAnim()
})