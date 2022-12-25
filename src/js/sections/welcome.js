import { iconsContainer } from '../components/tech-icons.js';

const welcomeSection = document.createElement('section');
welcomeSection.classList.add('welcome-section');
welcomeSection.id = 'top';
welcomeSection.appendChild(iconsContainer);

export { welcomeSection };
