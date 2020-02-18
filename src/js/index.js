import Menu from './classes/Menu';
import Header from './classes/Header';
import FullHeightFix from './classes/FullHeightFix';

const menu = new Menu('.nav');
const header = new Header('.header');
const heightFix = new FullHeightFix('.first');

const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 800,
  speedAsDuration: true,
  header: '.header'
});