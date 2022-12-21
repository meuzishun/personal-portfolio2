const top = document.createElement('div');
top.classList.add('top');

const heading1 = document.createElement('h1');
heading1.textContent = 'Andrew Smith';
top.appendChild(heading1);

const portfolioLink = document.createElement('a');
portfolioLink.href = '#portfolio';
portfolioLink.classList.add('portfolio-btn');
portfolioLink.textContent = 'Portfolio';
top.appendChild(portfolioLink);

const contactLink = document.createElement('a');
contactLink.href = '#contact';
contactLink.classList.add('contact-btn');
contactLink.textContent = 'Contact';
top.appendChild(contactLink);

export { top };
