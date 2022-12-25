// import { header } from '../components/header.js';
// import { about } from '../components/about.js';
import { iconsContainer } from '../components/tech-icons.js';

const welcomeSection = document.createElement('section');
welcomeSection.classList.add('welcome-section');
welcomeSection.id = 'top';
// welcomeSection.appendChild(header);
// welcomeSection.appendChild(about);
welcomeSection.appendChild(iconsContainer);

export { welcomeSection };
