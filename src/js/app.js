
import * as flsFunctions from "./modules/functions.js";
import * as menu from "./navbar.js";

flsFunctions.isWebp();
menu.burgerMenu();
window.addEventListener('scroll', menu.fixedNav)


import Swiper, { Pagination, Scrollbar, Navigation } from 'swiper';
const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination, Scrollbar],
    direction: 'horizontal',
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"> ' + '0' + (index + 1) + ' </span> '
        }
    },

});