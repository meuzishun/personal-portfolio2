import { tempBlurb } from '../components/temp-main-blurb.js';
import { projectCard } from '../components/project-card.js';

const mainContent = document.createElement('main');
mainContent.classList.add('main-content');
mainContent.id = 'portfolio';
mainContent.appendChild(projectCard);

export { mainContent };
