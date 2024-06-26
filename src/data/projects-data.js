function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}

const images = importAll(
  require.context('../assets/images/projects/', false, /\.(png|jpe?g|svg|gif)$/)
);

const projectsData = [
  {
    title: 'Player Piano',
    imageFile: images['playerPiano.jpg'],
    description:
      'A music training application that plays musical gestures of various lengths for the user to play back. Helpful with music theory and aural skills.',
    link: 'https://dev.meuzishun.com/',
    repository: 'https://github.com/meuzishun',
  },
  {
    title: "You're Gonna Make Me Blog",
    imageFile: images['blog-image.jpg'],
    description:
      'A full-stack blogging app. Created for partially fulfillment of the curriculum of The Odin Project.',
    link: 'https://meuzishun.github.io/blog-client/',
    repository: 'https://github.com/meuzishun/blog-client',
  },
  {
    title: 'Battleship',
    imageFile: images['battleship.jpg'],
    description:
      'A take on the classic board game of the same name. Created for partially fulfillment of the curriculum of The Odin Project.',
    link: 'https://meuzishun.github.io/battleship/',
    repository: 'https://github.com/meuzishun/battleship',
  },
  {
    title: 'Social Media App',
    imageFile: images['socialMedia.jpg'],
    description:
      'A replication of Twitter/Facebook/any generic social media app. Created for partially fulfillment of the curriculum of The Odin Project.',
    link: 'https://meuzishun.github.io/social-media-app/',
    repository: 'https://github.com/meuzishun/social-media-app',
  },
  {
    title: "Where's Waldo",
    imageFile: images['waldo.jpg'],
    description:
      "A digital version of the popular children's book series. The app keeps track of the player's time and potentially ranking them on a leader-board",
    link: 'https://whereswaldo-ea81f.web.app/',
    repository: 'https://github.com/meuzishun/wheres-waldo',
  },
  {
    title: 'Weather App',
    imageFile: images['weather.jpg'],
    description:
      'A basic weather app which uses the open weather api and allows users to view weather conditions for a specific location as well as choosing the units of measurement.',
    link: 'https://meuzishun.github.io/weather-app2/',
    repository: 'https://github.com/meuzishun/weather-app2',
  },
  {
    title: 'Restaurant Landing Page',
    imageFile: images['restaurant.jpg'],
    description: 'A slightly satirical landing page for a restaurant.',
    link: 'https://meuzishun.github.io/restaurant-page/',
    repository: 'https://github.com/meuzishun/restaurant-page',
  },
  {
    title: 'Tic-Tac-Toe',
    imageFile: images['tictactoe.jpg'],
    description:
      'A digital version of the classic game. The app allows two players to play against each other as well as the user plays against an AI opponent.',
    link: 'https://meuzishun.github.io/tic-tac-toe/',
    repository: 'https://github.com/meuzishun/tic-tac-toe',
  },
  {
    title: 'Shopping Cart',
    imageFile: images['shopping.jpg'],
    description:
      'A simple shopping cart application which uses React JS and react-router-dom.',
    link: 'https://meuzishun.github.io/shopping-cart/',
    repository: 'https://github.com/meuzishun/shopping-cart',
  },
  {
    title: 'Memory Card',
    imageFile: images['cardGame.jpg'],
    description:
      'A card game in which the player tries to choose as many unique cards as he can without repeating.',
    link: 'https://meuzishun.github.io/memory_card/',
    repository: 'https://github.com/meuzishun/memory_card',
  },
  {
    title: 'CV Creator',
    imageFile: images['cv.jpg'],
    description:
      'A basic app which allows the user to create their own CV using a template',
    link: 'https://meuzishun.github.io/cv-project/',
    repository: 'https://github.com/meuzishun/cv-project',
  },
  // {
  //   title: '',
  //   imageFile: null,
  //   description: '',
  //   link: '',
  //   repository: '',
  // },
  // {
  //   title: '',
  //   imageFile: null,
  //   description: '',
  //   link: '',
  //   repository: '',
  // },
];

export { projectsData };
