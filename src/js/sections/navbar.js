import { about } from '../components/about';

//* Container
const navbar = document.createElement('nav');
navbar.classList.add('navbar');

//* Links
const links = document.createElement('ul');
links.classList.add('nav-links');
navbar.appendChild(links);

//* Home
const homeListItem = document.createElement('li');
const homeLink = document.createElement('a');
homeLink.href = '#top';
homeLink.textContent = 'Home';
homeListItem.appendChild(homeLink);
links.appendChild(homeListItem);

//* About
const aboutListItem = document.createElement('li');
const aboutLink = document.createElement('a');
aboutLink.href = '#top';
aboutLink.textContent = 'About';

const handleAboutOpen = () => {
  about.removeEventListener('animationend', handleAboutOpen);
  about.classList.remove('showing');
  about.classList.add('visible');
};

const handleAboutClose = () => {
  about.removeEventListener('animationend', handleAboutClose);
  about.classList.remove('hiding');
  about.classList.add('hidden');
};

const startAboutOpen = () => {
  about.classList.remove('hidden');
  about.classList.add('showing');
  about.addEventListener('animationend', handleAboutOpen);
};

const startAboutClose = () => {
  about.classList.remove('visible');
  about.classList.add('hiding');
  about.addEventListener('animationend', handleAboutClose);
};

aboutLink.addEventListener('click', () => {
  if (about.classList.contains('hidden')) {
    startAboutOpen(about);
  }
  if (about.classList.contains('visible')) {
    startAboutClose(about);
  }
});

aboutListItem.appendChild(aboutLink);
links.appendChild(aboutListItem);

//* Portfolio
const portfolioListItem = document.createElement('li');
const portfolioLink = document.createElement('a');
portfolioLink.href = '#portfolio';
portfolioLink.textContent = 'Portfolio';
portfolioListItem.appendChild(portfolioLink);
links.appendChild(portfolioListItem);

//* Contact
const contactListItem = document.createElement('li');
const contactLink = document.createElement('a');
contactLink.href = '#contact';
contactLink.textContent = 'Contact';
contactListItem.appendChild(contactLink);
links.appendChild(contactListItem);

[...links.children].forEach((child) => {
  child.addEventListener('click', () => {
    if (about.classList.contains('visible')) {
      startAboutClose(about);
    }
  });
});

export { navbar };
