import '../sass/style.scss';
import { homeWrapper } from './pages/home';

document.body.appendChild(homeWrapper);

const setHeaderMargin = () => {
  const styleSheet = document.querySelector(':root');
  const navbar = document.querySelector('.navbar');
  const navbarHeight = navbar.getBoundingClientRect().height;
  styleSheet.style.setProperty('--navbar_height', `${navbarHeight}px`);
};

window.addEventListener('load', setHeaderMargin);
window.addEventListener('resize', setHeaderMargin);
