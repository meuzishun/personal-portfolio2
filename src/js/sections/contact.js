import { emailContainer } from '../components/email.js';
import { linksContainer } from '../components/contact-icons.js';

const contact = document.createElement('section');
contact.classList.add('contact');
contact.id = 'contact';

const callToAction = document.createElement('div');
callToAction.classList.add('call-to-action');

const heading2 = document.createElement('h2');
heading2.textContent = 'Contact me';
callToAction.appendChild(heading2);

const blurb = document.createElement('p');
blurb.textContent =
  'If you enjoy my work and would like to discuss potentially working together, please feel free to contact me.';
callToAction.appendChild(blurb);

contact.appendChild(callToAction);
contact.appendChild(emailContainer);
contact.appendChild(linksContainer);

export { contact };
