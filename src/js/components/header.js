import { navbar } from './navbar.js';

const header = document.createElement('header');
header.classList.add('main-header');

const link = document.createElement('a');
link.href = '#top';
const heading1 = document.createElement('h1');
heading1.textContent = 'Andrew Smith';
link.appendChild(heading1);
header.appendChild(link);

header.appendChild(navbar);

export { header };
