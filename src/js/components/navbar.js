const navbar = document.createElement('nav');
navbar.classList.add('navbar');

const link = document.createElement('a');
link.href = '#top';
navbar.appendChild(link);

const heading1 = document.createElement('h1');
heading1.textContent = 'Andrew Smith';
link.appendChild(heading1);

const links = document.createElement('ul');
links.classList.add('nav-links');
navbar.appendChild(links);

const homeLink = document.createElement('a');
homeLink.href = '#top';
homeLink.textContent = 'Home';
links.appendChild(homeLink);

const aboutLink = document.createElement('p');
aboutLink.textContent = 'About';

const handleOpen = (e) => {
  const about = e.target;
  about.removeEventListener('animationend', handleOpen);
  about.classList.remove('showing');
  about.classList.add('visible');
};

const handleClose = (e) => {
  const about = e.target;
  about.removeEventListener('animationend', handleClose);
  about.classList.remove('hiding');
  about.classList.add('hidden');
};

aboutLink.addEventListener('click', () => {
  const about = document.querySelector('.about');
  if (about.classList.contains('hidden')) {
    about.classList.remove('hidden');
    about.classList.add('showing');
    about.addEventListener('animationend', handleOpen);
  }
  if (about.classList.contains('visible')) {
    about.classList.remove('visible');
    about.classList.add('hiding');
    about.addEventListener('animationend', handleClose);
  }
});
links.appendChild(aboutLink);

const portfolioLink = document.createElement('a');
portfolioLink.href = '#portfolio';
portfolioLink.textContent = 'Portfolio';
links.appendChild(portfolioLink);

const contactLink = document.createElement('a');
contactLink.href = '#contact';
contactLink.textContent = 'Contact';
links.appendChild(contactLink);

export { navbar };
