//  Classes
import Menu from './classes/Menu';
import Header from './classes/Header';
import FullHeightFix from './classes/FullHeightFix';
import Preloader from './classes/Preloader';
import AOS from 'aos';
import SmoothScroll from 'smooth-scroll';
//  Helpers
import setYear from './helpers/setYear';
import showBtnGoTop  from './helpers/showBtnGoTop';
import loadMap  from './helpers/loadMap';

//  Smooth Scroll https://github.com/cferdinandi/smooth-scroll
const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 800,
  speedAsDuration: true,
  header: '.header',
  updateURL: false,
});

// Swiper slider https://github.com/nolimits4web/swiper
const slider = new Swiper ('.swiper-container', {
  pagination: {
    el: '.slider__pagination',
    modifierClass: 'slider__pagination-',
    bulletClass: 'slider__pagination-bullet',
    bulletActiveClass: 'slider__pagination-bullet_active',
    clickableClass: 'slider__pagination-bullet_clickable',
    clickable: true,
  },
  navigation: {
    nextEl: '.slider__button-next',
    prevEl: '.slider__button-prev',
    disabledClass: 'slider__button_disabled',
  },
  preloadImages: false,
  lazy: true,
});

//  Animate on scroll(AOS) scroll https://github.com/michalsnik/aos
AOS.init({
  once: true,
  delay: 0,
  duration: 800,
  startEvent: 'load',
  anchorPlacement: 'center-bottom',
});

document.addEventListener('DOMContentLoaded', ()  => {
  document.querySelector('.first').style.backgroundImage = "url('./image/first/first_background.jpg')";
});
window.addEventListener('load', () => {
  setTimeout(() => {
    loadMap();
  }, 1000);
});

setYear('.footer__dateYear');

const menu = new Menu('.nav');
const header = new Header('.header');
const heightFix = new FullHeightFix('.first');
const btnGoTop = showBtnGoTop('.arrow-go-top');
const preloader = new Preloader('.preloader');
