const header = document.createElement('header');
header.classList.add('header');

const topLink = document.createElement('a');
topLink.href = '#top';
const heading1 = document.createElement('h1');
heading1.textContent = 'Andrew Smith';
topLink.appendChild(heading1);
header.appendChild(topLink);

export { header };
