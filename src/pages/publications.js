import Swiper, { Navigation, Pagination, Grid } from 'swiper';
Swiper.use([Navigation, Pagination, Grid]);
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';

const publications = [{
  img: 'publication-Ensemble-for-Online-Advertising-Generation.png',
  title: 'Topic-driven Ensemble for Online Advertising Generation',
  author: 'Egor Nevezhin, Nikolay Butakov, Maria Khodorchenko, Maxim Petrov, Denis Nasonov',
  preview: `Online advertising is one of the most widespread ways to reach and increase a target audience for those selling products. Usually having a form of a banner,
   advertising engages users into visiting a corresponding webpage. 
  Professional generation of banners requires creative and writing skills and a basiSOMETEXT SOMETEXT SOMETEXTSOMETEXTSOMETEXT SOMETEXT SOMETEXTSOMETEXTSOMETEXT SOMETEXT SOMETEXTSOMETEXT`
},
{
  img: 'publication_Convolutional-neural-networks.png',
  title: 'Convolutional neural networks with hierarchical context transfeSOMETEXT SOMETEXT SOMETEXTSOMETEXT',
  author: 'Ksenia D Mukhina, Alexander A Visheratin, Denis Nasonov',
  preview: `In this work, we consider a problem of predicting the next state of a given area using retrospective information. 
  The proposed concept of hierarchical context transfer (HCT) operates on several spatial levels of the input data to overcome major issues of next state 
  prediction problems - density variability, a sigSOMETEXT SOMETEXT SOMETEXTSOMETEXTSOMETEXT SOMETEXT SOMETEXTSOMETEXTSOMETEXT SOMETEXT SOMETEXTSOMETEXTSOMETEXT SOMETEXT SOMETEXTSOMETEXT`
},
{
  img: 'publication_Spatiotemporal-Filtering-Pipeline.png',
  title: 'Spatiotemporal Filtering Pipeline for Efficient Social Networks DatSOMETEXT SOMETEXT SOMETEXTSOMETEXTSOMETEXT SOMETEXT SOMETEXTSOMETEXTSOMETEXT SOMETEXT SOMETEXTSOMETEXT',
  author: 'Ksenia Mukhina, Alexander Visheratin, Denis Nasonov',
  preview: `One of the areas that gathers momentum is the investigation of location-based social networks (LBSNs) because the understanding of citizens
  behavior on various scales can help to improve quality of living, enhance urban management, 
  and advance the development of smart cities. But it is widely known that theSOMETEXT SOMETEXT SOMETEXTSOMETEXTSOMETEXT SOMETEXT SOMETEXTSOMETEXTSOMETEXT SOMETEXT SOMETEXTSOMETEXT`
},{
  img: 'publication-Ensemble-for-Online-Advertising-Generation.png',
  title: 'Topic-driven Ensemble for Online Advertising Generation',
  author: 'Egor Nevezhin, Nikolay Butakov, Maria Khodorchenko, Maxim Petrov, Denis Nasonov',
  preview: `Online advertising is one of the most widespread ways to reach and increase a target audience for those selling products. Usually having a form of a banner,
   advertising engages users into visiting a corresponding webpage. 
  Professional generation of banners requires creative and writing skills and a basiSOMETEXT SOMETEXT SOMETEXTSOMETEXTSOMETEXT SOMETEXT SOMETEXTSOMETEXTSOMETEXT SOMETEXT SOMETEXTSOMETEXT`
},
{
  img: 'publication_Convolutional-neural-networks.png',
  title: 'Convolutional neural networks with hierarchical context transfeSOMETEXT SOMETEXT SOMETEXTSOMETEXTSOMETEXT SOMETEXT SOMETEXTSOMETEXT',
  author: 'Ksenia D Mukhina, Alexander A Visheratin, Denis Nasonov',
  preview: `In this work, we consider a problem of predicting the next state of a given area using retrospective information. 
  The proposed concept of hierarchical context transfer (HCT) operates on several spatial levels of the input data to overcome major issues of next state 
  prediction problems - density variability, a sigSOMETEXT SOMETEXT SOMETEXTSOMETEXTSOMETEXT SOMETEXT SOMETEXTSOMETEXT`
},
{
  img: 'publication_Spatiotemporal-Filtering-Pipeline.png',
  title: 'Spatiotemporal Filtering Pipeline for Efficient Social Networks DatSOMETEXT SOMETEXT SOMETEXTSOMETEXTSOMETEXT SOMETEXT SOMETEXTSOMETEXT',
  author: 'Ksenia Mukhina, Alexander Visheratin, Denis Nasonov',
  preview: `One of the areas that gathers momentum is the investigation of location-based social networks (LBSNs) because the understanding of citizens’ 
  behavior on various scales can help to improve quality of living, enhance urban management, 
  and advance the development of smart cities. But it is widely known that theSOMETEXT SOMETEXT SOMETEXTSOMETEXTSOMETEXT SOMETEXT SOMETEXTSOMETEXT`
},{
  img: 'publication-Ensemble-for-Online-Advertising-Generation.png',
  title: 'Topic-driven Ensemble for Online Advertising Generation',
  author: 'Egor Nevezhin, Nikolay Butakov, Maria Khodorchenko, Maxim Petrov, Denis Nasonov',
  preview: `Online advertising is one of the most widespread ways to reach and increase a target audience for those selling products. Usually having a form of a banner,
   advertising engages users into visiting a corresponding webpage. 
  Professional generation of banners requires creative and writing skills and a basiSOMETEXT SOMETEXT SOMETEXTSOMETEXTSOMETEXT SOMETEXT SOMETEXTSOMETEXTSOMETEXT SOMETEXT SOMETEXTSOMETEXT`
},
{
  img: 'publication_Convolutional-neural-networks.png',
  title: 'Convolutional neural networks with hierarchical context transfeSOMETEXT SOMETEXT SOMETEXTSOMETEXTSOMETEXT SOMETEXT SOMETEXTSOMETEXT',
  author: 'Ksenia D Mukhina, Alexander A Visheratin, Denis Nasonov',
  preview: `In this work, we consider a problem of predicting the next state of a given area using retrospective information. 
  The proposed concept of hierarchical context transfer (HCT) operates on several spatial levels of the input data to overcome major issues of next state 
  prediction problems - density variability, a sigSOMETEXT SOMETEXT SOMETEXTSOMETEXTSOMETEXT SOMETEXT SOMETEXTSOMETEXT`
},
{
  img: 'publication_Spatiotemporal-Filtering-Pipeline.png',
  title: 'Spatiotemporal Filtering Pipeline for Efficient Social Networks DatSOMETEXT SOMETEXT SOMETEXTSOMETEXTSOMETEXT SOMETEXT SOMETEXTSOMETEXT',
  author: 'Ksenia Mukhina, Alexander Visheratin, Denis Nasonov',
  preview: `One of the areas that gathers momentum is the investigation of location-based social networks (LBSNs) because the understanding of citizens’ 
  behavior on various scales can help to improve quality of living, enhance urban management, 
  and advance the development of smart cities. But it is widely known that theSOMETEXT SOMETEXT SOMETEXTSOMETEXTSOMETEXT SOMETEXT SOMETEXTSOMETEXT`
}]

const publicationsSwiper = new Swiper(".publications__swiper", {
  breakpoints: {
    100: {
      slidesPerView: 1.1,
      spaceBetween: 8,
      centeredSlides: true,
    },
    500: {
      slidesPerView: 2,
      grid: {
        rows: 2,
        fill: 'row'
      },
      spaceBetween: 30,
    },
    900: {
      slidesPerView: 3,
      grid: {
        rows: 2,
        fill: 'row'
      },
      spaceBetween: 30,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    }
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const publicationsSection = document.querySelector('.publications');
const publicationsList = publicationsSection.querySelector('.publications__list');
const publicationTemplate = document.querySelector('#publication-template').content;
const clientWidth = document.documentElement.clientWidth;

function showShareIcons(e) {
  const linkHolder = e.target.closest('.link-holder');
  const shareIconsList = linkHolder.querySelector('.share-icons-list')
  if (e.target.classList.contains('link-holder__share_inactive')) {
    shareIconsList.style.display = 'flex'
    e.target.classList.remove('link-holder__share_inactive')
  } else {
    shareIconsList.style.display = 'none'
    e.target.classList.add('link-holder__share_inactive')
  }
}

function createPublicationEl(item) {
  const publicationElement = publicationTemplate.querySelector('.publication').cloneNode(true);
  const publicationImg = publicationElement.querySelector('.publication__img');
  const publicationTitle = publicationElement.querySelector('.publication__title');
  const publicationAuthor = publicationElement.querySelector('.publication__author');
  const publicationPreview = publicationElement.querySelector('.publication__preview');

  publicationImg.src = require(`../images/Publication/${item.img}`);
  publicationTitle.textContent = item.title;
  publicationAuthor.textContent = item.author
  publicationPreview.textContent = item.preview

  const publicationShareBtn = publicationElement.querySelector('.link-holder__share');
  publicationShareBtn.addEventListener('click', showShareIcons)

  if (clientWidth < 900) {
    const linkHolder = publicationElement.querySelector('.link-holder');
    linkHolder.style.display = 'flex';
  }

  return publicationElement;
}

function addPublication(publication) {
  const publicationElement = createPublicationEl(publication);
  publicationsList.append(publicationElement);
}

publications.forEach(publication => addPublication(publication));
if (clientWidth < 900) {
  const publicationsNavigation = publicationsSection.querySelector('.publications__navigation');
  publicationsNavigation.style.display = 'none'
}