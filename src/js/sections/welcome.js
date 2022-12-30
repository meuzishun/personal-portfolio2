import { iconsContainer } from '../components/tech-icons.js';
import { about } from '../components/about.js';

const welcomeSection = document.createElement('section');
welcomeSection.classList.add('welcome-section');
welcomeSection.id = 'top';
welcomeSection.appendChild(iconsContainer);
welcomeSection.appendChild(about);

export { welcomeSection };
