$(window).on('scroll load', () => {
  const head = document.querySelector('.header');
  if(window.pageYOffset > 50){
    head.classList.add('fix');
  } else{
    head.classList.remove('fix');
  }
})
window.addEventListener('resize', () => {
  if ($('.burger').hasClass('open')) {
    $('.burger').removeClass('open');
    $('.nav-mobile').slideUp();
    $('body').removeAttr('style')
  }
})
$('.burger').click(function () {
  if (!$('.burger').hasClass('open')) {
    $('.burger').addClass('open');
    $('.nav-mobile').slideDown();
    $('body').css({'height': '100vh', 'overflow': 'hidden'})
  } else {
    $('.burger').removeClass('open');
    $('.nav-mobile').slideUp();
    $('body').removeAttr('style')
  }
})


/* eslint-disable no-plusplus */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
let cx; let cy; let mouseX; let mouseY; let posX; let posY; let clientX; let clientY; let dx; let dy; let tiltx; let tilty; let request; let radius; let degree;
document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');

  cx = window.innerWidth / 2;
  cy = window.innerHeight / 2;

  body.addEventListener('mousemove', (e) => {
    clientX = e.pageX;
    clientY = e.pageY;
    request = requestAnimationFrame(updateMe);
    mouseCoords(e);
    cursor.classList.remove('hidden');
    // follower.classList.remove('hidden');
  });

  function updateMe() {
    dx = clientX - cx;
    dy = clientY - cy;
    tiltx = dy / cy;
    tilty = dx / cx;
    radius = Math.sqrt(tiltx ** 2 + tiltx ** 2);
    degree = radius * 12;
  }


  const cursor = document.getElementById('cursor');
  // const follower = document.getElementById('aura');
  const links = document.getElementsByTagName('a');
  const button = document.getElementsByTagName('button');

  mouseX = 0, mouseY = 0, posX = 0, posY = 0;

  function mouseCoords(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
  }

  gsap.to({}, 0.01, {

    repeat: -1,

    onRepeat: () => {
      posX += (mouseX - posX) / 5;
      posY += (mouseY - posY) / 5;

      gsap.set(cursor, {
        css: {
          left: mouseX,
          top: mouseY,
        },
      });

      // gsap.set(follower, {
      //   css: {
      //     left: posX - 24,
      //     top: posY - 24,
      //   },
      // });
    },

  });

  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('mouseover', () => {
      cursor.classList.add('active');
      // follower.classList.add('active');
    });

    links[i].addEventListener('mouseout', () => {
      cursor.classList.remove('active');
      // follower.classList.remove('active');
    });
  }
  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('mouseover', () => {
      cursor.classList.add('active');
      // follower.classList.add('active');
    });

    button[i].addEventListener('mouseout', () => {
      cursor.classList.remove('active');
      // follower.classList.remove('active');
    });
  }

  body.addEventListener('mouseout', () => {
    cursor.classList.add('hidden');
    // follower.classList.add('hidden');
  });
});
