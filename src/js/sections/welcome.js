import { iconsContainer } from '../components/tech-icons.js';
import { about } from '../components/about.js';

const welcome = document.createElement('section');
welcome.classList.add('welcome');
welcome.id = 'welcome';
welcome.appendChild(iconsContainer);
welcome.appendChild(about);

export { welcome };
