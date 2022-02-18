import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';

// Now you can use Swiper
export const swiperTest = new Swiper('.swiper', {
    // Install modules
    modules: [Navigation, Pagination, Scrollbar],
    speed: 500,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});