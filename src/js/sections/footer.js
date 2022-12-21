import { emailContainer } from '../components/email.js';
import { linksContainer } from '../components/contact-icons.js';

const mainFooter = document.createElement('footer');
mainFooter.classList.add('main-footer');
mainFooter.id = 'contact';

const callToAction = document.createElement('div');
callToAction.classList.add('call-to-action');

const heading2 = document.createElement('h2');
heading2.textContent = 'Contact me';
callToAction.appendChild(heading2);

const blurb = document.createElement('p');
blurb.classList.add('call-to-action');
blurb.textContent =
  'If you enjoy my work and would like to discuss potentially working together, please feel free to contact me.';
callToAction.appendChild(blurb);

mainFooter.appendChild(callToAction);
mainFooter.appendChild(emailContainer);
mainFooter.appendChild(linksContainer);

export { mainFooter };
