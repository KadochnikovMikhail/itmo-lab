import './index.scss'
import 'normalize.css'

import "../utils/importImages"
import Swiper, { Navigation, Pagination } from 'swiper'

const burgerButton = document.querySelector('.header__burger-menu-button');
const menu = document.querySelector('.menu');
const closeMenuButton = menu.querySelector('.menu__close');






const menuContainers = menu.querySelectorAll('.menu__subitem-container');

menuContainers.forEach(item => {
    const subitems = item.querySelectorAll('.menu__subitem');
    item.addEventListener('click', ()=>{
        subitems.forEach(subitem => {
            
            subitem.classList.toggle('menu__subitem_active');
        })
    })
})







burgerButton.addEventListener('click',switchMenu);
closeMenuButton.addEventListener('click',switchMenu);

function switchMenu(){
    menu.classList.toggle('menu_open');
}

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

