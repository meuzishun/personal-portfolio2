import pianoImage from '../assets/images/piano.gif';
import battleshipImage from '../assets/images/battleship.jpg';
import socialMediaImage from '../assets/images/social-media.jpg';

const projectsData = [
  {
    title: 'Player Piano',
    imageFile: pianoImage,
    description:
      'A music training application that plays musical gestures of various lengths for the user to play back. Helpful with music theory and aural skills.',
    link: 'https://dev.meuzishun.com/',
    repository: 'https://github.com/meuzishun',
  },
  {
    title: 'Battleship',
    imageFile: battleshipImage,
    description:
      'A take on the classic board game of the same name. Created for partially fulfillment of the curriculum of The Odin Project.',
    link: 'https://meuzishun.github.io/battleship/',
    repository: 'https://github.com/meuzishun/battleship',
  },
  {
    title: 'Social Media App',
    imageFile: socialMediaImage,
    description:
      'A replication of Twitter/Facebook/any generic social media app. Created for partially fulfillment of the curriculum of The Odin Project.',
    link: 'https://meuzishun.github.io/login',
    repository: 'https://github.com/meuzishun/social-media-app',
  },
];

export { projectsData };
