import './index.scss'
import 'normalize.css'

import "../utils/importImages"
import Swiper, { Navigation, Pagination } from 'swiper'

Swiper.use([Navigation, Pagination]);

new Swiper('.about-us__swiper',{
        pagination: {
            el: '.about-us__swiper-pagination',
            clickable: true,
            bulletClass: 'about-us__swiper-pagination-bullet',
            bulletActiveClass: 'about-us__swiper-pagination-bullet_active',
        },
        spaceBetween: 10,
        centeredSlides: true,
        loop: true,
        setWrapperSize: true,
        slidesPerView: 1.1,

    }
);
