// import { tempBlurb } from '../components/temp-main-blurb.js';
// import { projectCard } from '../components/project-card.js';
import { createProjectCard } from '../components/create-project-card.js';
import pianoImage from '../../assets/images/piano.gif';
import battleshipImage from '../../assets/images/battleship.jpg';

const portfolio = document.createElement('section');
portfolio.classList.add('portfolio');
portfolio.id = 'portfolio';

const pianoProj = createProjectCard({
  title: 'Player Piano',
  imageFile: pianoImage,
  description:
    'A music training application that plays musical gestures of various lengths for the user to play back. Helpful with music theory and aural skills.',
  link: 'https://dev.meuzishun.com/',
  repository: 'https://github.com/meuzishun',
});
portfolio.appendChild(pianoProj);

const battleshipProj = createProjectCard({
  title: 'Battleship',
  imageFile: battleshipImage,
  description:
    'A take on the classic board game. Created for partially fulfillment of the curriculum of The Odin Project.',
  link: 'https://meuzishun.github.io/battleship/',
  repository: 'https://github.com/meuzishun/battleship',
});
portfolio.appendChild(battleshipProj);

export { portfolio };
