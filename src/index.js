import '@babel/polyfill';
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'formdata-polyfill';
import 'fetch-polyfill';
import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill(window);
import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import scroll from './modules/scroll';
import tabs from './modules/tabs';
import slider from './modules/slider';
import valid from './modules/valid';
import team from './modules/team';
import calc from './modules/calc';
import sendMenu from './modules/sendMenu';

//таймер
countTimer();
setInterval(countTimer, 1000, '8 March 2020');
//меню
toggleMenu();
//popup
togglePopup();
//scroll
scroll();
//tabs
tabs();
//slider
slider();
// validator
valid();
// team
team();
// calc
calc(100);
//отправка
sendMenu();
