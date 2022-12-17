import { top } from '../components/top.js';
import { about } from '../components/about.js';
import { iconsContainer } from '../components/tech-icons.js';

const mainHeader = document.createElement('header');
mainHeader.classList.add('main-header');
mainHeader.appendChild(top);
mainHeader.appendChild(about);
mainHeader.appendChild(iconsContainer);

export { mainHeader };
