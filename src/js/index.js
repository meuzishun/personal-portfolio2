import '../sass/style.scss';
import { homeWrapper } from './pages/home';

document.body.appendChild(homeWrapper);

const setHeaderMargin = () => {
  const styleSheet = document.querySelector(':root');
  const navbar = document.querySelector('.navbar');
  const navbarHeight = navbar.getBoundingClientRect().height;
  styleSheet.style.setProperty('--navbar_height', `${navbarHeight}px`);
};

const setMobileHeight = () => {
  const styleSheet = document.querySelector(':root');
  let vh = window.innerHeight * 0.01;
  styleSheet.style.setProperty('--vh', `${vh}px`);
};

// window.addEventListener('load', setHeaderMargin);
// window.addEventListener('resize', setHeaderMargin);
window.addEventListener('load', setMobileHeight);
window.addEventListener('resize', setMobileHeight);
