const header = document.createElement('header');
header.classList.add('header');

const topLink = document.createElement('a');
topLink.href = '#top';
header.appendChild(topLink);

const title = document.createElement('h1');
title.classList.add('heading1');
title.textContent = 'Andrew Smith, Web Developer';
topLink.appendChild(title);

export { header };
