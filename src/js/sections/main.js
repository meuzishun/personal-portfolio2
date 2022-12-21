import { tempBlurb } from '../components/temp-main-blurb.js';

const mainContent = document.createElement('main');
mainContent.classList.add('main-content');
mainContent.id = 'portfolio';
mainContent.appendChild(tempBlurb);

export { mainContent };
