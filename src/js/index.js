import '../sass/style.scss';
import './components/tech-icons';
import './components/email';
import './components/contact-icons';

import { mainHeader } from './sections/header';

const wrapper = document.querySelector('.wrapper');
wrapper.appendChild(mainHeader);
