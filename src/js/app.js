import * as flsFunctions from "./modules/functions.js";
import * as menu from "./navbar.js";

flsFunctions.isWebp();
menu.burgerMenu();
window.addEventListener('scroll', menu.fixedNav)


import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    direction: 'horizontal',
    loop: true,

    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets'
    },

});



