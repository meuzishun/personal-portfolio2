import { tempBlurb } from '../components/temp-main-blurb.js';

const mainContent = document.createElement('div');
mainContent.classList.add('main-content');
mainContent.appendChild(tempBlurb);

export { mainContent };
