import { tempBlurb } from '../components/temp-main-blurb.js';

const portfolio = document.createElement('section');
portfolio.classList.add('portfolio');
portfolio.id = 'portfolio';
portfolio.appendChild(tempBlurb);

export { portfolio };
