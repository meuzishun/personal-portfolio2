import '../sass/style.scss';
import './components/tech-icons';
import './components/email';
import './components/contact-icons';

import { mainHeader } from './sections/header';
import { mainContent } from './sections/main';
import { mainFooter } from './sections/footer';

const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
wrapper.appendChild(mainHeader);
wrapper.appendChild(mainContent);
wrapper.appendChild(mainFooter);

document.body.appendChild(wrapper);
