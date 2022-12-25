import { navbar } from './navbar.js';
import { about } from './about.js';

const header = document.createElement('header');
header.classList.add('main-header');

header.appendChild(navbar);
header.appendChild(about);

export { header };
