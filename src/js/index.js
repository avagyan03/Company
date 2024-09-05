import Fullburger from 'fullburger';
import 'fullburger/style';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'

const fullBurger = new Fullburger('header');

// core version + navigation, pagination modules:

// init Swiper:
const swiper = new Swiper('.block__swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const svg = document.querySelector('svg');
const video = document.querySelector('video');
const photo = document.querySelector('photo');

svg.addEventListener('click', function () {
 videoToggle(true);
})

video.addEventListener("pause", (event) => {
    videoToggle(false);
    
});
function videoToggle(toggle) {
  
    if (toggle) {
        svg.style.display = 'none';
        video.play();  
    
    } else {
        svg.style.display = 'none';
        video.pause();
      
    }
}


