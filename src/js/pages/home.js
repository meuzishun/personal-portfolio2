import { header } from '../sections/header';
import { navbar } from '../sections/navbar';
import { welcome } from '../sections/welcome';
import { portfolio } from '../sections/portfolio';
import { contact } from '../sections/contact';

const homeWrapper = document.createElement('div');
homeWrapper.classList.add('home-wrapper');
homeWrapper.appendChild(header);
homeWrapper.appendChild(navbar);

const mainContainer = document.createElement('main');
mainContainer.classList.add('main-container');
homeWrapper.appendChild(mainContainer);

mainContainer.appendChild(welcome);
mainContainer.appendChild(portfolio);
mainContainer.appendChild(contact);

export { homeWrapper };
