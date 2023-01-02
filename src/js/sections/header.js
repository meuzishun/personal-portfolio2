const header = document.createElement('header');
header.classList.add('header');

const topLink = document.createElement('a');
topLink.href = '#top';
header.appendChild(topLink);

const heading1 = document.createElement('h1');
heading1.textContent = 'Andrew Smith ';
topLink.appendChild(heading1);

const title = document.createElement('span');
title.classList.add('title');
title.textContent = '(Noob Web Dev)';
heading1.appendChild(title);

export { header };
