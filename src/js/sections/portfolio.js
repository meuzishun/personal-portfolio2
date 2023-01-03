import { tempBlurb } from '../components/temp-main-blurb.js';
import { projectCard } from '../components/project-card.js';

const portfolio = document.createElement('section');
portfolio.classList.add('portfolio');
portfolio.id = 'portfolio';
portfolio.appendChild(projectCard);

export { portfolio };
