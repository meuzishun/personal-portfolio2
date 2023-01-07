import { iconsContainer } from './tech-icons.js';

const about = document.createElement('div');
about.classList.add('about');
about.classList.add('hidden');

const heading2 = document.createElement('h2');
heading2.textContent = 'About me';
about.appendChild(heading2);

const blurb = document.createElement('p');
// blurb.textContent =
// 'I am a well-dress man sitting at a desk. I am signaling with my eye contact and body language that I am engaged and listening closely to the person talking to me. Or maybe I am in deep thought about how to make the company more profitable. Either way, you can trust and rely on me. Plus my tie is a non-threatening cornflower-blue which conveys a relaxed and welcoming demeanor.';
blurb.textContent =
  'I have a background in higher education, teaching music. I started learning programming to help my students gain proficiency in certain skills and found a whole new endeavor to pursue. I am constantly learning and striving to improve my skills, and I am eager to use my knowledge and creativity to build innovative and engaging websites.';
about.appendChild(blurb);
about.appendChild(iconsContainer);

export { about };
