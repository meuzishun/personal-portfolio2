import emailIconFile from '../../assets/icons/contact/email-outline.svg';

const emailContainer = document.querySelector('.email-container');

const link = document.createElement('a');
link.href = 'mailto:meuzishun@gmail.com';

const emailIcon = document.createElement('object');
emailIcon.classList.add('svg');
emailIcon.type = 'image/svg+xml';
emailIcon.data = emailIconFile;

const emailText = document.createElement('p');
emailText.textContent = 'meuzishun@gmail.com';

link.appendChild(emailIcon);
link.appendChild(emailText);
emailContainer.appendChild(link);
