const navbar = document.createElement('nav');
navbar.classList.add('navbar');

const links = document.createElement('ul');
links.classList.add('nav-links');
navbar.appendChild(links);

const aboutLink = document.createElement('p');
aboutLink.textContent = 'About';
//TODO this will be a dropdown?
aboutLink.addEventListener('click', () => {
  const about = document.querySelector('.about');
  about.classList.toggle('hidden');
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
