import '../sass/style.scss';
import { header } from './components/header';
// import { about } from './components/about';
import { welcomeSection } from './sections/welcome';
import { mainContent } from './sections/main';
import { mainFooter } from './sections/footer';

const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
wrapper.appendChild(header);
// wrapper.appendChild(about);
wrapper.appendChild(welcomeSection);
wrapper.appendChild(mainContent);
wrapper.appendChild(mainFooter);

document.body.appendChild(wrapper);
