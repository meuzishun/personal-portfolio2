import { header } from '../sections/header';
import { navbar } from '../sections/navbar';
import { welcome } from '../sections/welcome';
import { portfolio } from '../sections/portfolio';
import { contact } from '../sections/contact';

const homeWrapper = document.createElement('div');
homeWrapper.classList.add('home-wrapper');
homeWrapper.appendChild(header);
homeWrapper.appendChild(navbar);
homeWrapper.appendChild(welcome);
homeWrapper.appendChild(portfolio);
homeWrapper.appendChild(contact);

export { homeWrapper };
