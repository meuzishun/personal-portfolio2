import { emailContainer } from '../components/email.js';
import { linksContainer } from '../components/contact-icons.js';

const mainFooter = document.createElement('footer');
mainFooter.classList.add('main-footer');

const heading2 = document.createElement('h2');
heading2.textContent = 'Contact me';

const callToAction = document.createElement('p');
callToAction.classList.add('call-to-action');
callToAction.textContent =
  'If you enjoy my work and would like to discuss potentially working together, please feel free to contact me.';

mainFooter.appendChild(heading2);
mainFooter.appendChild(callToAction);
mainFooter.appendChild(emailContainer);
mainFooter.appendChild(linksContainer);

export { mainFooter };
