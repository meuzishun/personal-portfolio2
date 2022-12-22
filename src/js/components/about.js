const about = document.createElement('div');
about.classList.add('about');
about.classList.add('hidden');

const heading2 = document.createElement('h2');
heading2.textContent = 'About me';
about.appendChild(heading2);

const blurb = document.createElement('p');
blurb.textContent =
  'I am a well-dress man sitting at a desk. I am signaling with my eye contact and body language that I am engaged and listening closely to the person talking to me. Or maybe I am in deep thought about how to make the company more profitable. Either way, you can trust and rely on me. Plus my tie is a non-threatening cornflower-blue which conveys a relaxed and welcoming demeanor.';
about.appendChild(blurb);

export { about };
