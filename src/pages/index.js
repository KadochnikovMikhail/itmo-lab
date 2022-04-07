import 'normalize.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './index.css'


import "../utils/importImages"

import Swiper, { Navigation, Pagination } from 'swiper';
  // import Swiper and modules styles
  

  // init Swiper:
  const swiper = new Swiper('.swiper', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
    slidesPerView: 2,
    spaceBetween: 8,
    pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
  });
