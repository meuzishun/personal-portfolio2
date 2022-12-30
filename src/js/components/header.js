import { navbar } from './navbar.js';

const header = document.createElement('header');
header.classList.add('main-header');

header.appendChild(navbar);

export { header };
