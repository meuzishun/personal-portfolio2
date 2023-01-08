/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/data/projects-data.js":
/*!***********************************!*\
  !*** ./src/data/projects-data.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectsData": () => (/* binding */ projectsData)
/* harmony export */ });
function importAll(r) {
  var images = {};
  r.keys().map(function (item, index) {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}
var images = importAll(__webpack_require__("./src/assets/images/projects sync \\.(png%7Cjpe?g%7Csvg%7Cgif)$"));
var projectsData = [{
  title: 'Player Piano',
  imageFile: images['playerPiano.jpg'],
  description: 'A music training application that plays musical gestures of various lengths for the user to play back. Helpful with music theory and aural skills.',
  link: 'https://dev.meuzishun.com/',
  repository: 'https://github.com/meuzishun'
}, {
  title: 'Battleship',
  imageFile: images['battleship.jpg'],
  description: 'A take on the classic board game of the same name. Created for partially fulfillment of the curriculum of The Odin Project.',
  link: 'https://meuzishun.github.io/battleship/',
  repository: 'https://github.com/meuzishun/battleship'
}, {
  title: 'Social Media App',
  imageFile: images['socialMedia.jpg'],
  description: 'A replication of Twitter/Facebook/any generic social media app. Created for partially fulfillment of the curriculum of The Odin Project.',
  link: 'https://meuzishun.github.io/social-media-app/',
  repository: 'https://github.com/meuzishun/social-media-app'
}, {
  title: "Where's Waldo",
  imageFile: images['waldo.jpg'],
  description: "A digital version of the popular children's book series. The app keeps track of the player's time and potentially ranking them on a leader-board",
  link: 'https://whereswaldo-ea81f.web.app/',
  repository: 'https://github.com/meuzishun/wheres-waldo'
}, {
  title: 'Weather App',
  imageFile: images['weather.jpg'],
  description: 'A basic weather app which uses the open weather api and allows users to view weather conditions for a specific location as well as choosing the units of measurement.',
  link: 'https://meuzishun.github.io/weather-app2/',
  repository: 'https://github.com/meuzishun/weather-app2'
}, {
  title: 'Restaurant Landing Page',
  imageFile: images['restaurant.jpg'],
  description: 'A slightly satirical landing page for a restaurant.',
  link: 'https://meuzishun.github.io/restaurant-page/',
  repository: 'https://github.com/meuzishun/restaurant-page'
}, {
  title: 'Tic-Tac-Toe',
  imageFile: images['tictactoe.jpg'],
  description: 'A digital version of the classic game. The app allows two players to play against each other as well as the user plays against an AI opponent.',
  link: 'https://meuzishun.github.io/tic-tac-toe/',
  repository: 'https://github.com/meuzishun/tic-tac-toe'
}, {
  title: 'Shopping Cart',
  imageFile: images['shopping.jpg'],
  description: 'A simple shopping cart application which uses React JS and react-router-dom.',
  link: 'https://meuzishun.github.io/shopping-cart/',
  repository: 'https://github.com/meuzishun/shopping-cart'
}, {
  title: 'Memory Card',
  imageFile: images['cardGame.jpg'],
  description: 'A card game in which the player tries to choose as many unique cards as he can without repeating.',
  link: 'https://meuzishun.github.io/memory_card/',
  repository: 'https://github.com/meuzishun/memory_card'
}, {
  title: 'CV Creator',
  imageFile: images['cv.jpg'],
  description: 'A basic app which allows the user to create their own CV using a template',
  link: 'https://meuzishun.github.io/cv-project/',
  repository: 'https://github.com/meuzishun/cv-project'
}
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



/***/ }),

/***/ "./src/js/components/about.js":
/*!************************************!*\
  !*** ./src/js/components/about.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "about": () => (/* binding */ about)
/* harmony export */ });
/* harmony import */ var _tech_icons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tech-icons.js */ "./src/js/components/tech-icons.js");

var about = document.createElement('div');
about.classList.add('about');
about.classList.add('hidden');
var heading2 = document.createElement('h2');
heading2.textContent = 'About me';
about.appendChild(heading2);
var blurb = document.createElement('p');
// blurb.textContent =
// 'I am a well-dress man sitting at a desk. I am signaling with my eye contact and body language that I am engaged and listening closely to the person talking to me. Or maybe I am in deep thought about how to make the company more profitable. Either way, you can trust and rely on me. Plus my tie is a non-threatening cornflower-blue which conveys a relaxed and welcoming demeanor.';
blurb.textContent = 'I have a background in higher education, teaching music. I started learning programming to help my students gain proficiency in certain skills and found a whole new endeavor to pursue. I am constantly learning and striving to improve my skills, and I am eager to use my knowledge and creativity to build innovative and engaging websites.';
about.appendChild(blurb);
about.appendChild(_tech_icons_js__WEBPACK_IMPORTED_MODULE_0__.iconsContainer);


/***/ }),

/***/ "./src/js/components/contact-icons.js":
/*!********************************************!*\
  !*** ./src/js/components/contact-icons.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "linksContainer": () => (/* binding */ linksContainer)
/* harmony export */ });
/* harmony import */ var _assets_icons_contact_github_original_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/icons/contact/github-original.svg */ "./src/assets/icons/contact/github-original.svg");
/* harmony import */ var _assets_icons_contact_linkedin_original_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/icons/contact/linkedin-original.svg */ "./src/assets/icons/contact/linkedin-original.svg");
/* harmony import */ var _assets_icons_contact_twitter_original_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/icons/contact/twitter-original.svg */ "./src/assets/icons/contact/twitter-original.svg");



var contactIconFiles = [_assets_icons_contact_github_original_svg__WEBPACK_IMPORTED_MODULE_0__, _assets_icons_contact_linkedin_original_svg__WEBPACK_IMPORTED_MODULE_1__, _assets_icons_contact_twitter_original_svg__WEBPACK_IMPORTED_MODULE_2__];
var hyperlinks = ['https://github.com/meuzishun', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'];
var linksContainer = document.createElement('div');
linksContainer.classList.add('links');
var contactIcons = contactIconFiles.map(function (file, index) {
  var link = document.createElement('a');
  link.href = hyperlinks[index];
  var icon = document.createElement('object');
  icon.classList.add('icon');
  icon.type = 'image/svg+xml';
  icon.data = file;
  link.appendChild(icon);
  return link;
});
contactIcons.forEach(function (icon) {
  linksContainer.appendChild(icon);
});


/***/ }),

/***/ "./src/js/components/create-project-card.js":
/*!**************************************************!*\
  !*** ./src/js/components/create-project-card.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProjectCard": () => (/* binding */ createProjectCard)
/* harmony export */ });
function createProjectCard(_ref) {
  var title = _ref.title,
    imageFile = _ref.imageFile,
    description = _ref.description,
    link = _ref.link,
    repository = _ref.repository;
  var projectCard = document.createElement('div');
  projectCard.classList.add('project-card');
  var projectTitle = document.createElement('h3');
  projectTitle.classList.add('project-title');
  projectTitle.textContent = title;
  projectCard.appendChild(projectTitle);
  var projectImage = document.createElement('img');
  projectImage.classList.add('project-image');
  projectImage.src = imageFile;
  projectCard.appendChild(projectImage);
  var projectDescription = document.createElement('p');
  projectDescription.classList.add('project-description');
  projectDescription.textContent = description;
  projectCard.appendChild(projectDescription);
  var projectLinks = document.createElement('div');
  projectLinks.classList.add('project-links');
  projectCard.appendChild(projectLinks);
  var projectLiveLink = document.createElement('a');
  projectLiveLink.classList.add('project-live-link');
  projectLiveLink.href = link;
  projectLiveLink.target = '_blank';
  projectLiveLink.textContent = 'Live Site';
  projectLinks.appendChild(projectLiveLink);
  var projectRepoLink = document.createElement('a');
  projectRepoLink.classList.add('project-repo-link');
  projectRepoLink.href = repository;
  projectRepoLink.textContent = 'Repo';
  projectRepoLink.target = '_blank';
  projectLinks.appendChild(projectRepoLink);
  return projectCard;
}


/***/ }),

/***/ "./src/js/components/email.js":
/*!************************************!*\
  !*** ./src/js/components/email.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "emailContainer": () => (/* binding */ emailContainer)
/* harmony export */ });
/* harmony import */ var _assets_icons_contact_email_outline_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/icons/contact/email-outline.svg */ "./src/assets/icons/contact/email-outline.svg");

var emailContainer = document.createElement('div');
emailContainer.classList.add('email-container');
var link = document.createElement('a');
link.href = 'mailto:meuzishun@gmail.com';
var emailIcon = document.createElement('object');
emailIcon.classList.add('svg');
emailIcon.type = 'image/svg+xml';
emailIcon.data = _assets_icons_contact_email_outline_svg__WEBPACK_IMPORTED_MODULE_0__;
var emailText = document.createElement('p');
emailText.textContent = 'meuzishun@gmail.com';
link.appendChild(emailIcon);
link.appendChild(emailText);
emailContainer.appendChild(link);


/***/ }),

/***/ "./src/js/components/tech-icons.js":
/*!*****************************************!*\
  !*** ./src/js/components/tech-icons.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "iconsContainer": () => (/* binding */ iconsContainer)
/* harmony export */ });
/* harmony import */ var _assets_icons_tech_html5_original_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/icons/tech/html5-original.svg */ "./src/assets/icons/tech/html5-original.svg");
/* harmony import */ var _assets_icons_tech_css3_original_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/icons/tech/css3-original.svg */ "./src/assets/icons/tech/css3-original.svg");
/* harmony import */ var _assets_icons_tech_javascript_original_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/icons/tech/javascript-original.svg */ "./src/assets/icons/tech/javascript-original.svg");
/* harmony import */ var _assets_icons_tech_git_original_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/icons/tech/git-original.svg */ "./src/assets/icons/tech/git-original.svg");
/* harmony import */ var _assets_icons_tech_npm_original_wordmark_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/icons/tech/npm-original-wordmark.svg */ "./src/assets/icons/tech/npm-original-wordmark.svg");
/* harmony import */ var _assets_icons_tech_sass_original_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/icons/tech/sass-original.svg */ "./src/assets/icons/tech/sass-original.svg");
/* harmony import */ var _assets_icons_tech_react_original_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/icons/tech/react-original.svg */ "./src/assets/icons/tech/react-original.svg");
/* harmony import */ var _assets_icons_tech_nodejs_original_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/icons/tech/nodejs-original.svg */ "./src/assets/icons/tech/nodejs-original.svg");
/* harmony import */ var _assets_icons_tech_jest_plain_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/icons/tech/jest-plain.svg */ "./src/assets/icons/tech/jest-plain.svg");
/* harmony import */ var _assets_icons_tech_webpack_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/icons/tech/webpack.svg */ "./src/assets/icons/tech/webpack.svg");
/* harmony import */ var _assets_icons_tech_firebase_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/icons/tech/firebase.svg */ "./src/assets/icons/tech/firebase.svg");











var techIconsFile = [_assets_icons_tech_html5_original_svg__WEBPACK_IMPORTED_MODULE_0__, _assets_icons_tech_css3_original_svg__WEBPACK_IMPORTED_MODULE_1__, _assets_icons_tech_javascript_original_svg__WEBPACK_IMPORTED_MODULE_2__, _assets_icons_tech_git_original_svg__WEBPACK_IMPORTED_MODULE_3__, _assets_icons_tech_npm_original_wordmark_svg__WEBPACK_IMPORTED_MODULE_4__, _assets_icons_tech_sass_original_svg__WEBPACK_IMPORTED_MODULE_5__, _assets_icons_tech_react_original_svg__WEBPACK_IMPORTED_MODULE_6__, _assets_icons_tech_nodejs_original_svg__WEBPACK_IMPORTED_MODULE_7__, _assets_icons_tech_jest_plain_svg__WEBPACK_IMPORTED_MODULE_8__, _assets_icons_tech_webpack_svg__WEBPACK_IMPORTED_MODULE_9__, _assets_icons_tech_firebase_svg__WEBPACK_IMPORTED_MODULE_10__];
var iconsContainer = document.createElement('div');
iconsContainer.classList.add('icons-container');
var icons = document.createElement('div');
icons.classList.add('tech-icons');
iconsContainer.appendChild(icons);
for (var i = 0, l = techIconsFile.length * 2; i < l; i++) {
  var icon = document.createElement('object');
  icon.classList.add('icon');
  icon.type = 'image/svg+xml';
  icon.data = techIconsFile[i % techIconsFile.length];
  icons.appendChild(icon);
}


/***/ }),

/***/ "./src/js/pages/home.js":
/*!******************************!*\
  !*** ./src/js/pages/home.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homeWrapper": () => (/* binding */ homeWrapper)
/* harmony export */ });
/* harmony import */ var _sections_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sections/header */ "./src/js/sections/header.js");
/* harmony import */ var _sections_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sections/navbar */ "./src/js/sections/navbar.js");
/* harmony import */ var _sections_welcome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sections/welcome */ "./src/js/sections/welcome.js");
/* harmony import */ var _sections_portfolio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sections/portfolio */ "./src/js/sections/portfolio.js");
/* harmony import */ var _sections_contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sections/contact */ "./src/js/sections/contact.js");





var homeWrapper = document.createElement('div');
homeWrapper.classList.add('home-wrapper');
homeWrapper.appendChild(_sections_header__WEBPACK_IMPORTED_MODULE_0__.header);
homeWrapper.appendChild(_sections_navbar__WEBPACK_IMPORTED_MODULE_1__.navbar);
var mainContainer = document.createElement('main');
mainContainer.classList.add('main-container');
homeWrapper.appendChild(mainContainer);
mainContainer.appendChild(_sections_welcome__WEBPACK_IMPORTED_MODULE_2__.welcome);
mainContainer.appendChild(_sections_portfolio__WEBPACK_IMPORTED_MODULE_3__.portfolio);
mainContainer.appendChild(_sections_contact__WEBPACK_IMPORTED_MODULE_4__.contact);


/***/ }),

/***/ "./src/js/sections/contact.js":
/*!************************************!*\
  !*** ./src/js/sections/contact.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contact": () => (/* binding */ contact)
/* harmony export */ });
/* harmony import */ var _components_email_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/email.js */ "./src/js/components/email.js");
/* harmony import */ var _components_contact_icons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/contact-icons.js */ "./src/js/components/contact-icons.js");


var contact = document.createElement('section');
contact.classList.add('contact');
contact.id = 'contact';
var callToAction = document.createElement('div');
callToAction.classList.add('call-to-action');
var heading2 = document.createElement('h2');
heading2.textContent = 'Contact me';
callToAction.appendChild(heading2);
var blurb = document.createElement('p');
blurb.textContent = 'If you enjoy my work and would like to discuss potentially working together, please feel free to contact me.';
callToAction.appendChild(blurb);
contact.appendChild(callToAction);
contact.appendChild(_components_email_js__WEBPACK_IMPORTED_MODULE_0__.emailContainer);
contact.appendChild(_components_contact_icons_js__WEBPACK_IMPORTED_MODULE_1__.linksContainer);


/***/ }),

/***/ "./src/js/sections/header.js":
/*!***********************************!*\
  !*** ./src/js/sections/header.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "header": () => (/* binding */ header)
/* harmony export */ });
var header = document.createElement('header');
header.classList.add('header');
var topLink = document.createElement('a');
topLink.href = '#top';
header.appendChild(topLink);
var title = document.createElement('h1');
title.classList.add('heading1');
title.textContent = 'Andrew Smith, Web Developer';
topLink.appendChild(title);


/***/ }),

/***/ "./src/js/sections/navbar.js":
/*!***********************************!*\
  !*** ./src/js/sections/navbar.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navbar": () => (/* binding */ navbar)
/* harmony export */ });
/* harmony import */ var _components_about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/about */ "./src/js/components/about.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


//* Container
var navbar = document.createElement('nav');
navbar.classList.add('navbar');

//* Links
var links = document.createElement('ul');
links.classList.add('nav-links');
navbar.appendChild(links);

//* Home
var homeListItem = document.createElement('li');
var homeLink = document.createElement('a');
homeLink.href = '#welcome';
homeLink.textContent = 'Home';
homeListItem.appendChild(homeLink);
links.appendChild(homeListItem);

//* About
var aboutListItem = document.createElement('li');
var aboutLink = document.createElement('a');
aboutLink.href = '#welcome';
aboutLink.textContent = 'About';
var handleAboutOpen = function handleAboutOpen() {
  _components_about__WEBPACK_IMPORTED_MODULE_0__.about.removeEventListener('animationend', handleAboutOpen);
  _components_about__WEBPACK_IMPORTED_MODULE_0__.about.classList.remove('showing');
  _components_about__WEBPACK_IMPORTED_MODULE_0__.about.classList.add('visible');
};
var handleAboutClose = function handleAboutClose() {
  _components_about__WEBPACK_IMPORTED_MODULE_0__.about.removeEventListener('animationend', handleAboutClose);
  _components_about__WEBPACK_IMPORTED_MODULE_0__.about.classList.remove('hiding');
  _components_about__WEBPACK_IMPORTED_MODULE_0__.about.classList.add('hidden');
};
var startAboutOpen = function startAboutOpen() {
  _components_about__WEBPACK_IMPORTED_MODULE_0__.about.classList.remove('hidden');
  _components_about__WEBPACK_IMPORTED_MODULE_0__.about.classList.add('showing');
  _components_about__WEBPACK_IMPORTED_MODULE_0__.about.addEventListener('animationend', handleAboutOpen);
};
var startAboutClose = function startAboutClose() {
  _components_about__WEBPACK_IMPORTED_MODULE_0__.about.classList.remove('visible');
  _components_about__WEBPACK_IMPORTED_MODULE_0__.about.classList.add('hiding');
  _components_about__WEBPACK_IMPORTED_MODULE_0__.about.addEventListener('animationend', handleAboutClose);
};
aboutLink.addEventListener('click', function () {
  if (_components_about__WEBPACK_IMPORTED_MODULE_0__.about.classList.contains('hidden')) {
    startAboutOpen(_components_about__WEBPACK_IMPORTED_MODULE_0__.about);
  }
  if (_components_about__WEBPACK_IMPORTED_MODULE_0__.about.classList.contains('visible')) {
    startAboutClose(_components_about__WEBPACK_IMPORTED_MODULE_0__.about);
  }
});
aboutListItem.appendChild(aboutLink);
links.appendChild(aboutListItem);

//* Portfolio
var portfolioListItem = document.createElement('li');
var portfolioLink = document.createElement('a');
portfolioLink.href = '#portfolio';
portfolioLink.textContent = 'Portfolio';
portfolioListItem.appendChild(portfolioLink);
links.appendChild(portfolioListItem);

//* Contact
var contactListItem = document.createElement('li');
var contactLink = document.createElement('a');
contactLink.href = '#contact';
contactLink.textContent = 'Contact';
contactListItem.appendChild(contactLink);
links.appendChild(contactListItem);
_toConsumableArray(links.children).forEach(function (child) {
  child.addEventListener('click', function () {
    if (_components_about__WEBPACK_IMPORTED_MODULE_0__.about.classList.contains('visible')) {
      startAboutClose(_components_about__WEBPACK_IMPORTED_MODULE_0__.about);
    }
  });
});


/***/ }),

/***/ "./src/js/sections/portfolio.js":
/*!**************************************!*\
  !*** ./src/js/sections/portfolio.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "portfolio": () => (/* binding */ portfolio)
/* harmony export */ });
/* harmony import */ var _components_create_project_card_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/create-project-card.js */ "./src/js/components/create-project-card.js");
/* harmony import */ var _data_projects_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/projects-data.js */ "./src/data/projects-data.js");


var portfolio = document.createElement('section');
portfolio.classList.add('portfolio');
portfolio.id = 'portfolio';
_data_projects_data_js__WEBPACK_IMPORTED_MODULE_1__.projectsData.forEach(function (project) {
  var projectCard = (0,_components_create_project_card_js__WEBPACK_IMPORTED_MODULE_0__.createProjectCard)(project);
  portfolio.appendChild(projectCard);
});


/***/ }),

/***/ "./src/js/sections/welcome.js":
/*!************************************!*\
  !*** ./src/js/sections/welcome.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "welcome": () => (/* binding */ welcome)
/* harmony export */ });
/* harmony import */ var _components_about_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/about.js */ "./src/js/components/about.js");
// import { iconsContainer } from '../components/tech-icons.js';

var welcome = document.createElement('section');
welcome.classList.add('welcome');
welcome.id = 'welcome';
// welcome.appendChild(iconsContainer);
welcome.appendChild(_components_about_js__WEBPACK_IMPORTED_MODULE_0__.about);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/desk-image.jpg */ "./src/assets/images/desk-image.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/card.jpg */ "./src/assets/images/card.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lato:wght@100;300&family=Roboto:wght@300;500&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nol,\nul {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n  cursor: pointer;\n}\n\nh1 {\n  font-family: \"Roboto\", \"Arial\", sans-serif;\n  font-weight: 300;\n  color: inherit;\n  font-size: clamp(1.75rem, 4vw, 3rem);\n}\n\nh2 {\n  font-family: \"Roboto\", \"Arial\", sans-serif;\n  font-weight: 300;\n  color: inherit;\n  font-size: clamp(1.5rem, 3vw, 2.5rem);\n}\n\nh3 {\n  font-family: \"Roboto\", \"Arial\", sans-serif;\n  font-weight: 300;\n  color: inherit;\n  font-size: clamp(1.5rem, 2vw, 2rem);\n}\n\np {\n  font-family: \"Lato\", \"Helvetica\", sans-serif;\n  font-weight: 300;\n  color: inherit;\n  font-size: clamp(1rem, 1.75vw, 1.25rem);\n}\n\na {\n  font-family: \"Lato\", \"Helvetica\", sans-serif;\n  font-weight: 300;\n  color: inherit;\n  font-size: clamp(1.2rem, 2vw, 1.5rem);\n  user-select: none;\n  cursor: pointer;\n  border: 1px solid rgba(0, 0, 0, 0);\n}\na:hover {\n  border-bottom: 1px solid #fff;\n}\n\n.small {\n  font-family: \"Lato\", \"Helvetica\", sans-serif;\n  font-weight: 300;\n  color: inherit;\n  font-size: clamp(0.8rem, 1.25vw, 1.15rem);\n}\n\n.icon {\n  height: clamp(2rem, 4vw, 5rem);\n}\n\n.icons-container .tech-icons .icon {\n  height: clamp(0.25rem, 5vw, 3rem);\n}\n\nobject {\n  pointer-events: none;\n}\n\n.about {\n  padding: 0 3rem;\n  background-image: linear-gradient(rgb(0, 0, 0), rgba(0, 0, 0, 0.25));\n  width: 100%;\n  z-index: 1;\n}\n.about .icons-container {\n  overflow: hidden;\n  position: relative;\n  padding: 1rem 0;\n}\n.about .icons-container .tech-icons {\n  width: 200%;\n  display: flex;\n  justify-content: space-around;\n  animation: icon-carousel 30s linear infinite;\n}\n@keyframes icon-carousel {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(-50%);\n  }\n}\n\n@keyframes showAbout {\n  0% {\n    opacity: 0;\n    transform: translateY(-100%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0%);\n  }\n}\n.showing {\n  animation: showAbout 500ms ease-in-out 0ms 1 forwards;\n}\n\n.visible {\n  display: block;\n  transform: translateY(0%);\n}\n\n.hiding {\n  animation: showAbout 500ms ease-in-out 0ms 1 reverse;\n}\n\n.hidden {\n  transform: translateY(-100%);\n}\n\n:root {\n  --page_width: 1440px;\n}\n\nbody {\n  font-size: 16px;\n  background-color: rgb(0, 0, 0);\n  color: rgb(255, 255, 255);\n}\nbody svg path {\n  fill: rgb(255, 255, 255);\n}\nbody svg path + path {\n  fill: rgb(0, 0, 0);\n}\n\n.home-wrapper {\n  height: 100vh;\n  max-width: var(--page_width);\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: auto 1fr auto;\n  grid-template-areas: \"header\" \"main\" \"navbar\";\n}\n.home-wrapper .header {\n  grid-area: header;\n}\n.home-wrapper .navbar {\n  grid-area: navbar;\n}\n.home-wrapper .main-container {\n  grid-area: main;\n  scroll-behavior: smooth;\n  scroll-snap-type: y mandatory;\n  overflow-y: scroll;\n  display: grid;\n  grid-template-rows: repeat(3, 100%);\n  grid-template-areas: \"welcome\" \"portfolio\" \"contact\";\n}\n.home-wrapper .main-container section {\n  scroll-snap-align: start;\n}\n\n@media (min-width: 620px) {\n  .home-wrapper {\n    grid-template-columns: 1fr auto;\n    justify-content: space-between;\n    grid-template-areas: \"header navbar\" \"main main\";\n  }\n  .home-wrapper .main-container {\n    scroll-snap-type: none;\n    grid-template-rows: 100% auto 100%;\n  }\n  .home-wrapper .main-container section {\n    scroll-snap-align: none;\n  }\n}\n.project-card {\n  height: 100%;\n  display: grid;\n  grid-gap: 1vh;\n  grid-template-columns: 1fr;\n  grid-template-rows: auto auto 1fr auto;\n  border-radius: 0.5rem;\n  padding: 2rem;\n  background-color: rgb(45, 45, 45);\n  color: rgb(255, 255, 255);\n}\n.project-card svg path {\n  fill: rgb(255, 255, 255);\n}\n.project-card svg path + path {\n  fill: rgb(45, 45, 45);\n}\n.project-card .project-image {\n  object-fit: cover;\n  width: 100%;\n  border-radius: 0.25rem;\n}\n.project-card .project-links {\n  display: flex;\n  justify-content: space-evenly;\n}\n.project-card .project-links a {\n  background-color: rgba(0, 132, 255, 0.811);\n  color: rgb(255, 255, 255);\n  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.55);\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n  margin: 1.5rem 0;\n  padding: 0.5rem 1rem;\n  border-radius: 5000px;\n  border: none;\n  align-self: center;\n  transition: all 200ms ease-in-out;\n}\n.project-card .project-links a svg path {\n  fill: rgb(255, 255, 255);\n}\n.project-card .project-links a svg path + path {\n  fill: rgba(0, 132, 255, 0.811);\n}\n.project-card .project-links a:hover {\n  transform: scale(1.025);\n  box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.45);\n}\n.project-card .project-links a:active {\n  transform: scale(0.975);\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.85);\n}\n\n@media (min-width: 620px) {\n  .project-card .project-image {\n    object-fit: cover;\n    object-position: center center;\n  }\n  .project-card .project-links a {\n    font-size: 1rem;\n  }\n}\n.header {\n  padding: 0 1rem;\n  text-align: center;\n}\n\n@media (min-width: 620px) {\n  .header {\n    text-align: left;\n    margin-left: 1rem;\n    padding: 0;\n  }\n}\n.navbar {\n  align-self: center;\n}\n.navbar .nav-links {\n  width: 100%;\n  padding: 2rem 1rem;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-around;\n  gap: 1rem;\n}\n.navbar .nav-links li {\n  border-bottom: 1px solid rgba(255, 255, 255, 0);\n}\n.navbar .nav-links li:hover {\n  border-bottom: 1px solid #fff;\n}\n\n@media (min-width: 620px) {\n  .navbar {\n    margin-right: 2rem;\n  }\n}\n.welcome {\n  max-width: 100vw;\n  grid-area: welcome;\n  background-image: radial-gradient(rgba(0, 0, 0, 0.25), rgb(0, 0, 0)), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: 46% 80%;\n}\n\n.portfolio {\n  grid-area: portfolio;\n  overflow-x: scroll;\n  scroll-snap-type: x mandatory;\n  display: grid;\n  grid-gap: 1rem;\n  grid-auto-columns: 100vw;\n  grid-auto-flow: column;\n}\n.portfolio .project-card {\n  scroll-snap-align: start;\n}\n\n@media (min-width: 620px) {\n  .portfolio {\n    padding: 1rem;\n    scroll-snap-type: none;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    grid-auto-columns: initial;\n    grid-auto-flow: row;\n    grid-auto-rows: 500px;\n    overflow-x: initial;\n  }\n  .portfolio .project-card {\n    scroll-snap-align: none;\n  }\n}\n.contact {\n  grid-area: contact;\n  background-image: radial-gradient(circle at center, rgba(117, 117, 117, 0.9), rgba(37, 37, 37, 0.75), rgba(0, 0, 0, 0.4)), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: cover;\n  background-position: 40% 50%;\n  background-repeat: no-repeat;\n  display: flex;\n  flex-direction: column;\n  margin: 0;\n}\n.contact .call-to-action {\n  padding: 1rem 3rem 1rem 3rem;\n}\n.contact .email-container {\n  align-self: center;\n}\n.contact .email-container a {\n  background-color: rgba(0, 132, 255, 0.811);\n  color: rgb(255, 255, 255);\n  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.55);\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n  margin: 1.5rem 0;\n  padding: 0.5rem 1rem;\n  border-radius: 5000px;\n  border: none;\n  align-self: center;\n  transition: all 200ms ease-in-out;\n}\n.contact .email-container a svg path {\n  fill: rgb(255, 255, 255);\n}\n.contact .email-container a svg path + path {\n  fill: rgba(0, 132, 255, 0.811);\n}\n.contact .email-container a:hover {\n  transform: scale(1.025);\n  box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.45);\n}\n.contact .email-container a:active {\n  transform: scale(0.975);\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.85);\n}\n.contact .email-container a .svg {\n  width: 1.75rem;\n}\n.contact .links {\n  flex-grow: 4;\n  margin-bottom: 2rem;\n  display: flex;\n  gap: 1rem;\n  justify-content: space-evenly;\n  align-items: flex-end;\n}\n.contact .links a {\n  border: none;\n}", "",{"version":3,"sources":["webpack://./src/sass/base/_reset.scss","webpack://./src/sass/style.scss","webpack://./src/sass/base/_typography.scss","webpack://./src/sass/abstracts/_mixins.scss","webpack://./src/sass/abstracts/_fonts.scss","webpack://./src/sass/components/_icons.scss","webpack://./src/sass/components/_about.scss","webpack://./src/sass/pages/_home.scss","webpack://./src/sass/abstracts/_colors.scss","webpack://./src/sass/components/_projectCard.scss","webpack://./src/sass/layouts/_header.scss","webpack://./src/sass/layouts/_navbar.scss","webpack://./src/sass/layouts/_welcome.scss","webpack://./src/sass/layouts/_portfolio.scss","webpack://./src/sass/layouts/_contact.scss"],"names":[],"mappings":"AAAA;EACE,SAAA;EACA,UAAA;EACA,sBAAA;ACGF;;ADAA;;EAEE,gBAAA;ACGF;;ADAA;EACE,qBAAA;EACA,eAAA;ACGF;;ACXA;ECWE,0CCbW;EDcX,gBAAA;EACA,cAAA;EACA,oCDbuB;ADiBzB;;ACdA;ECOE,0CCbW;EDcX,gBAAA;EACA,cAAA;EACA,qCDTuB;ADoBzB;;ACjBA;ECGE,0CCbW;EDcX,gBAAA;EACA,cAAA;EACA,mCDLuB;ADuBzB;;ACpBA;ECME,4CCnBW;EDoBX,gBAAA;EACA,cAAA;EACA,uCDRoB;AD0BtB;;ACvBA;ECEE,4CCnBW;EDoBX,gBAAA;EACA,cAAA;EACA,qCDJoB;EACpB,iBAAA;EACA,eAAA;EACA,kCAAA;AD6BF;AC3BE;EACE,6BAAA;AD6BJ;;ACzBA;ECTE,4CCnBW;EDoBX,gBAAA;EACA,cAAA;EACA,yCDOoB;AD+BtB;;AIhEA;EACE,8BAAA;AJmEF;;AI9DI;EACE,iCAAA;AJiEN;;AI5DA;EACE,oBAAA;AJ+DF;;AK1EA;EACE,eAAA;EACA,oEAAA;EACA,WAAA;EACA,UAAA;AL6EF;AK3EE;EACE,gBAAA;EACA,kBAAA;EACA,eAAA;AL6EJ;AK3EI;EACE,WAAA;EACA,aAAA;EACA,6BAAA;EACA,4CAAA;AL6EN;AKzEE;EACE;IACE,wBAAA;EL2EJ;EKzEE;IACE,2BAAA;EL2EJ;AACF;;AKvEA;EACE;IACE,UAAA;IACA,4BAAA;EL0EF;EKxEA;IACE,UAAA;IACA,yBAAA;EL0EF;AACF;AKvEA;EACE,qDAAA;ALyEF;;AKtEA;EACE,cAAA;EACA,yBAAA;ALyEF;;AKtEA;EACE,oDAAA;ALyEF;;AKtEA;EACE,4BAAA;ALyEF;;AM/HA;EACE,oBAAA;ANkIF;;AM/HA;EACE,eAAA;EJFA,8BKFoB;ELGpB,yBAAA;AFqIF;AEpIE;EACE,wBAAA;AFsIJ;AEpIE;EACE,kBKRkB;AP8ItB;;AMtIA;EACE,aAAA;EACA,4BAAA;EACA,cAAA;EACA,aAAA;EACA,0BAAA;EACA,iCAAA;EACA,6CAAA;ANyIF;AMvIE;EACE,iBAAA;ANyIJ;AMtIE;EACE,iBAAA;ANwIJ;AMrIE;EACE,eAAA;EACA,uBAAA;EACA,6BAAA;EACA,kBAAA;EACA,aAAA;EAEA,mCAAA;EACA,oDAAA;ANsIJ;AMpII;EACE,wBAAA;ANsIN;;AMhIA;EACE;IACE,+BAAA;IACA,8BAAA;IACA,gDACE;ENkIJ;EM/HE;IACE,sBAAA;IACA,kCAAA;ENiIJ;EM/HI;IACE,uBAAA;ENiIN;AACF;AQzLA;EACE,YAAA;EACA,aAAA;EACA,aAAA;EAEA,0BAAA;EACA,sCAAA;EAEA,qBAAA;EACA,aAAA;ENPA,iCMQwB;ENPxB,yBAAA;AFiMF;AEhME;EACE,wBAAA;AFkMJ;AEhME;EACE,qBMEsB;ARgM1B;AQ9LE;EACE,iBAAA;EACA,WAAA;EAEA,sBAAA;AR+LJ;AQ5LE;EACE,aAAA;EACA,6BAAA;AR8LJ;AQ5LI;ENrBF,0CMsB4B;ENrB5B,yBAAA;EMsBI,4CAAA;EACA,aAAA;EACA,WAAA;EACA,mBAAA;EACA,gBAAA;EACA,oBAAA;EACA,qBAAA;EACA,YAAA;EACA,kBAAA;EACA,iCAAA;AR+LN;AE7NE;EACE,wBAAA;AF+NJ;AE7NE;EACE,8BMgB0B;AR+M9B;AQnMM;EACE,uBAAA;EACA,4CAAA;ARqMR;AQlMM;EACE,uBAAA;EACA,2CAAA;ARoMR;;AQ9LA;EAEI;IAEE,iBAAA;IACA,8BAAA;ER+LJ;EQ5LI;IACE,eAAA;ER8LN;AACF;ASzPA;EACE,eAAA;EACA,kBAAA;AT2PF;;ASxPA;EACE;IACE,gBAAA;IACA,iBAAA;IACA,UAAA;ET2PF;AACF;AUtQA;EACE,kBAAA;AVwQF;AUvQE;EACE,WAAA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,eAAA;EACA,mBAAA;EACA,6BAAA;EACA,SAAA;AVyQJ;AUtQI;EACE,+CAAA;AVwQN;AUtQM;EACE,6BAAA;AVwQR;;AUlQA;EACE;IACE,kBAAA;EVqQF;AACF;AW7RA;EACE,gBAAA;EACA,kBAAA;EACA,6GAAA;EAEA,sBAAA;EACA,4BAAA;EACA,4BAAA;AX8RF;;AYtSA;EACE,oBAAA;EACA,kBAAA;EACA,6BAAA;EAEA,aAAA;EACA,cAAA;EACA,wBAAA;EACA,sBAAA;AZwSF;AYtSE;EACE,wBAAA;AZwSJ;;AYpSA;EACE;IACE,aAAA;IACA,sBAAA;IACA,2DAAA;IAEA,0BAAA;IACA,mBAAA;IACA,qBAAA;IACA,mBAAA;EZsSF;EYpSE;IACE,uBAAA;EZsSJ;AACF;AajUA;EACE,kBAAA;EACA,kKAAA;EAOA,sBAAA;EACA,4BAAA;EACA,4BAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;Ab6TF;Aa3TE;EACE,4BAAA;Ab6TJ;Aa1TE;EACE,kBAAA;Ab4TJ;Aa1TI;EXtBF,0CWuB4B;EXtB5B,yBAAA;EWuBI,4CAAA;EACA,aAAA;EACA,WAAA;EACA,mBAAA;EACA,gBAAA;EACA,oBAAA;EACA,qBAAA;EACA,YAAA;EACA,kBAAA;EACA,iCAAA;Ab6TN;AE5VE;EACE,wBAAA;AF8VJ;AE5VE;EACE,8BWiB0B;Ab6U9B;AajUM;EACE,uBAAA;EACA,4CAAA;AbmUR;AahUM;EACE,uBAAA;EACA,2CAAA;AbkUR;Aa/TM;EACE,cAAA;AbiUR;Aa5TE;EACE,YAAA;EACA,mBAAA;EACA,aAAA;EACA,SAAA;EACA,6BAAA;EACA,qBAAA;Ab8TJ;Aa5TI;EACE,YAAA;Ab8TN","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nol,\nul {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n  cursor: pointer;\n}\n","@import 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap';\n@import 'https://fonts.googleapis.com/css2?family=Lato:wght@100;300&family=Roboto:wght@300;500&display=swap';\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nol,\nul {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n  cursor: pointer;\n}\n\nh1 {\n  font-family: \"Roboto\", \"Arial\", sans-serif;\n  font-weight: 300;\n  color: inherit;\n  font-size: clamp(1.75rem, 4vw, 3rem);\n}\n\nh2 {\n  font-family: \"Roboto\", \"Arial\", sans-serif;\n  font-weight: 300;\n  color: inherit;\n  font-size: clamp(1.5rem, 3vw, 2.5rem);\n}\n\nh3 {\n  font-family: \"Roboto\", \"Arial\", sans-serif;\n  font-weight: 300;\n  color: inherit;\n  font-size: clamp(1.5rem, 2vw, 2rem);\n}\n\np {\n  font-family: \"Lato\", \"Helvetica\", sans-serif;\n  font-weight: 300;\n  color: inherit;\n  font-size: clamp(1rem, 1.75vw, 1.25rem);\n}\n\na {\n  font-family: \"Lato\", \"Helvetica\", sans-serif;\n  font-weight: 300;\n  color: inherit;\n  font-size: clamp(1.2rem, 2vw, 1.5rem);\n  user-select: none;\n  cursor: pointer;\n  border: 1px solid rgba(0, 0, 0, 0);\n}\na:hover {\n  border-bottom: 1px solid #fff;\n}\n\n.small {\n  font-family: \"Lato\", \"Helvetica\", sans-serif;\n  font-weight: 300;\n  color: inherit;\n  font-size: clamp(0.8rem, 1.25vw, 1.15rem);\n}\n\n.icon {\n  height: clamp(2rem, 4vw, 5rem);\n}\n\n.icons-container .tech-icons .icon {\n  height: clamp(0.25rem, 5vw, 3rem);\n}\n\nobject {\n  pointer-events: none;\n}\n\n.about {\n  padding: 0 3rem;\n  background-image: linear-gradient(rgb(0, 0, 0), rgba(0, 0, 0, 0.25));\n  width: 100%;\n  z-index: 1;\n}\n.about .icons-container {\n  overflow: hidden;\n  position: relative;\n  padding: 1rem 0;\n}\n.about .icons-container .tech-icons {\n  width: 200%;\n  display: flex;\n  justify-content: space-around;\n  animation: icon-carousel 30s linear infinite;\n}\n@keyframes icon-carousel {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(-50%);\n  }\n}\n\n@keyframes showAbout {\n  0% {\n    opacity: 0;\n    transform: translateY(-100%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0%);\n  }\n}\n.showing {\n  animation: showAbout 500ms ease-in-out 0ms 1 forwards;\n}\n\n.visible {\n  display: block;\n  transform: translateY(0%);\n}\n\n.hiding {\n  animation: showAbout 500ms ease-in-out 0ms 1 reverse;\n}\n\n.hidden {\n  transform: translateY(-100%);\n}\n\n:root {\n  --page_width: 1440px;\n}\n\nbody {\n  font-size: 16px;\n  background-color: rgb(0, 0, 0);\n  color: rgb(255, 255, 255);\n}\nbody svg path {\n  fill: rgb(255, 255, 255);\n}\nbody svg path + path {\n  fill: rgb(0, 0, 0);\n}\n\n.home-wrapper {\n  height: 100vh;\n  max-width: var(--page_width);\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: auto 1fr auto;\n  grid-template-areas: \"header\" \"main\" \"navbar\";\n}\n.home-wrapper .header {\n  grid-area: header;\n}\n.home-wrapper .navbar {\n  grid-area: navbar;\n}\n.home-wrapper .main-container {\n  grid-area: main;\n  scroll-behavior: smooth;\n  scroll-snap-type: y mandatory;\n  overflow-y: scroll;\n  display: grid;\n  grid-template-rows: repeat(3, 100%);\n  grid-template-areas: \"welcome\" \"portfolio\" \"contact\";\n}\n.home-wrapper .main-container section {\n  scroll-snap-align: start;\n}\n\n@media (min-width: 620px) {\n  .home-wrapper {\n    grid-template-columns: 1fr auto;\n    justify-content: space-between;\n    grid-template-areas: \"header navbar\" \"main main\";\n  }\n  .home-wrapper .main-container {\n    scroll-snap-type: none;\n    grid-template-rows: 100% auto 100%;\n  }\n  .home-wrapper .main-container section {\n    scroll-snap-align: none;\n  }\n}\n.project-card {\n  height: 100%;\n  display: grid;\n  grid-gap: 1vh;\n  grid-template-columns: 1fr;\n  grid-template-rows: auto auto 1fr auto;\n  border-radius: 0.5rem;\n  padding: 2rem;\n  background-color: rgb(45, 45, 45);\n  color: rgb(255, 255, 255);\n}\n.project-card svg path {\n  fill: rgb(255, 255, 255);\n}\n.project-card svg path + path {\n  fill: rgb(45, 45, 45);\n}\n.project-card .project-image {\n  object-fit: cover;\n  width: 100%;\n  border-radius: 0.25rem;\n}\n.project-card .project-links {\n  display: flex;\n  justify-content: space-evenly;\n}\n.project-card .project-links a {\n  background-color: rgba(0, 132, 255, 0.811);\n  color: rgb(255, 255, 255);\n  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.55);\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n  margin: 1.5rem 0;\n  padding: 0.5rem 1rem;\n  border-radius: 5000px;\n  border: none;\n  align-self: center;\n  transition: all 200ms ease-in-out;\n}\n.project-card .project-links a svg path {\n  fill: rgb(255, 255, 255);\n}\n.project-card .project-links a svg path + path {\n  fill: rgba(0, 132, 255, 0.811);\n}\n.project-card .project-links a:hover {\n  transform: scale(1.025);\n  box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.45);\n}\n.project-card .project-links a:active {\n  transform: scale(0.975);\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.85);\n}\n\n@media (min-width: 620px) {\n  .project-card .project-image {\n    object-fit: cover;\n    object-position: center center;\n  }\n  .project-card .project-links a {\n    font-size: 1rem;\n  }\n}\n.header {\n  padding: 0 1rem;\n  text-align: center;\n}\n\n@media (min-width: 620px) {\n  .header {\n    text-align: left;\n    margin-left: 1rem;\n    padding: 0;\n  }\n}\n.navbar {\n  align-self: center;\n}\n.navbar .nav-links {\n  width: 100%;\n  padding: 2rem 1rem;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-around;\n  gap: 1rem;\n}\n.navbar .nav-links li {\n  border-bottom: 1px solid rgba(255, 255, 255, 0);\n}\n.navbar .nav-links li:hover {\n  border-bottom: 1px solid #fff;\n}\n\n@media (min-width: 620px) {\n  .navbar {\n    margin-right: 2rem;\n  }\n}\n.welcome {\n  max-width: 100vw;\n  grid-area: welcome;\n  background-image: radial-gradient(rgba(0, 0, 0, 0.25), rgb(0, 0, 0)), url(\"../assets/images/desk-image.jpg\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: 46% 80%;\n}\n\n.portfolio {\n  grid-area: portfolio;\n  overflow-x: scroll;\n  scroll-snap-type: x mandatory;\n  display: grid;\n  grid-gap: 1rem;\n  grid-auto-columns: 100vw;\n  grid-auto-flow: column;\n}\n.portfolio .project-card {\n  scroll-snap-align: start;\n}\n\n@media (min-width: 620px) {\n  .portfolio {\n    padding: 1rem;\n    scroll-snap-type: none;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    grid-auto-columns: initial;\n    grid-auto-flow: row;\n    grid-auto-rows: 500px;\n    overflow-x: initial;\n  }\n  .portfolio .project-card {\n    scroll-snap-align: none;\n  }\n}\n.contact {\n  grid-area: contact;\n  background-image: radial-gradient(circle at center, rgba(117, 117, 117, 0.9), rgba(37, 37, 37, 0.75), rgba(0, 0, 0, 0.4)), url(\"../assets/images/card.jpg\");\n  background-size: cover;\n  background-position: 40% 50%;\n  background-repeat: no-repeat;\n  display: flex;\n  flex-direction: column;\n  margin: 0;\n}\n.contact .call-to-action {\n  padding: 1rem 3rem 1rem 3rem;\n}\n.contact .email-container {\n  align-self: center;\n}\n.contact .email-container a {\n  background-color: rgba(0, 132, 255, 0.811);\n  color: rgb(255, 255, 255);\n  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.55);\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n  margin: 1.5rem 0;\n  padding: 0.5rem 1rem;\n  border-radius: 5000px;\n  border: none;\n  align-self: center;\n  transition: all 200ms ease-in-out;\n}\n.contact .email-container a svg path {\n  fill: rgb(255, 255, 255);\n}\n.contact .email-container a svg path + path {\n  fill: rgba(0, 132, 255, 0.811);\n}\n.contact .email-container a:hover {\n  transform: scale(1.025);\n  box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.45);\n}\n.contact .email-container a:active {\n  transform: scale(0.975);\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.85);\n}\n.contact .email-container a .svg {\n  width: 1.75rem;\n}\n.contact .links {\n  flex-grow: 4;\n  margin-bottom: 2rem;\n  display: flex;\n  gap: 1rem;\n  justify-content: space-evenly;\n  align-items: flex-end;\n}\n.contact .links a {\n  border: none;\n}","@use '../abstracts' as *;\n\n$headerSidePadding: 2rem;\n$headerTopBottomPadding: 1rem;\n\nh1 {\n  @include heading-mixin(clamp(1.75rem, 4vw, 3rem));\n}\n\nh2 {\n  @include heading-mixin(clamp(1.5rem, 3vw, 2.5rem));\n}\n\nh3 {\n  @include heading-mixin(clamp(1.5rem, 2vw, 2rem));\n}\n\np {\n  @include text-mixin(clamp(1rem, 1.75vw, 1.25rem));\n}\n\na {\n  @include text-mixin(clamp(1.2rem, 2vw, 1.5rem));\n  user-select: none;\n  cursor: pointer;\n  border: 1px solid rgba(0, 0, 0, 0);\n\n  &:hover {\n    border-bottom: 1px solid #fff;\n  }\n}\n\n.small {\n  @include text-mixin(clamp(0.8rem, 1.25vw, 1.15rem));\n}\n","@use './fonts' as *;\n@use './colors' as *;\n@use './functions' as *;\n\n@mixin set-background($color) {\n  background-color: $color;\n  color: set-text-color($color);\n  svg path {\n    fill: set-text-color($color);\n  }\n  svg path + path {\n    fill: $color;\n  }\n}\n\n@mixin heading-mixin($fontSize) {\n  font-family: $fontStack1;\n  font-weight: 300;\n  color: inherit;\n  font-size: $fontSize;\n}\n\n@mixin text-mixin($fontSize) {\n  font-family: $fontStack2;\n  font-weight: 300;\n  color: inherit;\n  font-size: $fontSize;\n}\n","@import 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap';\n@import 'https://fonts.googleapis.com/css2?family=Lato:wght@100;300&family=Roboto:wght@300;500&display=swap';\n\n$fontStack1: 'Roboto', 'Arial', sans-serif;\n$fontStack2: 'Lato', 'Helvetica', sans-serif;\n",".icon {\n  height: clamp(2rem, 4vw, 5rem);\n}\n\n.icons-container {\n  .tech-icons {\n    .icon {\n      height: clamp(0.25rem, 5vw, 3rem);\n    }\n  }\n}\n\nobject {\n  pointer-events: none;\n}\n","@use '../abstracts/' as *;\n\n.about {\n  padding: 0 3rem;\n  background-image: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.25));\n  width: 100%;\n  z-index: 1;\n\n  .icons-container {\n    overflow: hidden;\n    position: relative;\n    padding: 1rem 0;\n\n    .tech-icons {\n      width: 200%;\n      display: flex;\n      justify-content: space-around;\n      animation: icon-carousel 30s linear infinite;\n    }\n  }\n\n  @keyframes icon-carousel {\n    0% {\n      transform: translateX(0);\n    }\n    100% {\n      transform: translateX(-50%);\n    }\n  }\n}\n\n@keyframes showAbout {\n  0% {\n    opacity: 0;\n    transform: translateY(-100%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0%);\n  }\n}\n\n.showing {\n  animation: showAbout 500ms ease-in-out 0ms 1 forwards;\n}\n\n.visible {\n  display: block;\n  transform: translateY(0%);\n}\n\n.hiding {\n  animation: showAbout 500ms ease-in-out 0ms 1 reverse;\n}\n\n.hidden {\n  transform: translateY(-100%);\n}\n","@use '../abstracts' as *;\n\n:root {\n  --page_width: 1440px;\n}\n\nbody {\n  font-size: 16px;\n  @include set-background($darkBackgroundColor);\n}\n\n.home-wrapper {\n  height: 100vh;\n  max-width: var(--page_width);\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: auto 1fr auto;\n  grid-template-areas: 'header' 'main' 'navbar';\n\n  .header {\n    grid-area: header;\n  }\n\n  .navbar {\n    grid-area: navbar;\n  }\n\n  .main-container {\n    grid-area: main;\n    scroll-behavior: smooth;\n    scroll-snap-type: y mandatory;\n    overflow-y: scroll;\n    display: grid;\n\n    grid-template-rows: repeat(3, 100%);\n    grid-template-areas: 'welcome' 'portfolio' 'contact';\n\n    section {\n      scroll-snap-align: start;\n    }\n  }\n}\n\n//* laptop\n@media (min-width: $mediumBreakpoint) {\n  .home-wrapper {\n    grid-template-columns: 1fr auto;\n    justify-content: space-between;\n    grid-template-areas:\n      'header navbar'\n      'main main';\n\n    .main-container {\n      scroll-snap-type: none;\n      grid-template-rows: 100% auto 100%;\n\n      section {\n        scroll-snap-align: none;\n      }\n    }\n  }\n}\n","$lightFontColor: rgb(255, 255, 255);\n$darkFontColor: rgb(0, 0, 0);\n$lightBackgroundColor: rgb(255, 255, 255);\n$darkBackgroundColor: rgb(0, 0, 0);\n$headerBackground: rgb(255, 255, 255);\n$mainBackground: rgb(255, 255, 255);\n$footerBackground: rgb(255, 255, 255);\n","@use '../abstracts' as *;\n@use '../pages' as *;\n\n.project-card {\n  height: 100%;\n  display: grid;\n  grid-gap: 1vh;\n  // justify-items: space-evenly;\n  grid-template-columns: 1fr;\n  grid-template-rows: auto auto 1fr auto;\n  // border: 1px solid rgb(48, 48, 48);\n  border-radius: 0.5rem;\n  padding: 2rem;\n  @include set-background(rgb(45, 45, 45));\n\n  .project-image {\n    object-fit: cover;\n    width: 100%;\n    // max-height: 50%;\n    border-radius: 0.25rem;\n  }\n\n  .project-links {\n    display: flex;\n    justify-content: space-evenly;\n\n    a {\n      @include set-background(rgba(0, 132, 255, 0.811));\n      box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.55);\n      display: flex;\n      gap: 0.5rem;\n      align-items: center;\n      margin: 1.5rem 0;\n      padding: 0.5rem 1rem;\n      border-radius: 5000px;\n      border: none;\n      align-self: center;\n      transition: all 200ms ease-in-out;\n\n      &:hover {\n        transform: scale(1.025);\n        box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.45);\n      }\n\n      &:active {\n        transform: scale(0.975);\n        box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.85);\n      }\n    }\n  }\n}\n\n@media (min-width: $mediumBreakpoint) {\n  .project-card {\n    .project-image {\n      // height: auto;\n      object-fit: cover;\n      object-position: center center;\n    }\n    .project-links {\n      a {\n        font-size: 1rem;\n      }\n    }\n  }\n}\n","@use '../abstracts' as *;\n@use '../base' as *;\n\n.header {\n  padding: 0 1rem;\n  text-align: center;\n}\n\n@media (min-width: $mediumBreakpoint) {\n  .header {\n    text-align: left;\n    margin-left: 1rem;\n    padding: 0;\n  }\n}\n","@use '../abstracts' as *;\n@use '../pages' as *;\n.navbar {\n  align-self: center;\n  .nav-links {\n    width: 100%;\n    padding: 2rem 1rem;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-around;\n    gap: 1rem;\n    // background-image: linear-gradient(rgba(0, 0, 0, 0.5), #000);\n\n    li {\n      border-bottom: 1px solid rgba(255, 255, 255, 0);\n\n      &:hover {\n        border-bottom: 1px solid #fff;\n      }\n    }\n  }\n}\n\n@media (min-width: $mediumBreakpoint) {\n  .navbar {\n    margin-right: 2rem;\n  }\n}\n","@use '../abstracts' as *;\n@use '../base' as *;\n@use '../components/' as *;\n\n.welcome {\n  max-width: 100vw;\n  grid-area: welcome;\n  background-image: radial-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 1)),\n    url('../assets/images/desk-image.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: 46% 80%;\n}\n","@use '../abstracts' as *;\n@use '../base' as *;\n\n.portfolio {\n  grid-area: portfolio;\n  overflow-x: scroll;\n  scroll-snap-type: x mandatory;\n\n  display: grid;\n  grid-gap: 1rem;\n  grid-auto-columns: 100vw;\n  grid-auto-flow: column;\n\n  .project-card {\n    scroll-snap-align: start;\n  }\n}\n\n@media (min-width: $mediumBreakpoint) {\n  .portfolio {\n    padding: 1rem;\n    scroll-snap-type: none;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    // grid-template-rows: repeat(auto-fill, minmax(500px, 1fr));\n    grid-auto-columns: initial;\n    grid-auto-flow: row;\n    grid-auto-rows: 500px;\n    overflow-x: initial;\n\n    .project-card {\n      scroll-snap-align: none;\n    }\n  }\n}\n","@use '../abstracts' as *;\n@use '../base' as *;\n@use '../components/' as *;\n\n.contact {\n  grid-area: contact;\n  background-image: radial-gradient(\n      circle at center,\n      rgba(117, 117, 117, 0.9),\n      rgba(37, 37, 37, 0.75),\n      rgba(0, 0, 0, 0.4)\n    ),\n    url('../assets/images/card.jpg');\n  background-size: cover;\n  background-position: 40% 50%;\n  background-repeat: no-repeat;\n  display: flex;\n  flex-direction: column;\n  margin: 0;\n\n  .call-to-action {\n    padding: 1rem 3rem 1rem 3rem;\n  }\n\n  .email-container {\n    align-self: center;\n\n    a {\n      @include set-background(rgba(0, 132, 255, 0.811));\n      box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.55);\n      display: flex;\n      gap: 0.5rem;\n      align-items: center;\n      margin: 1.5rem 0;\n      padding: 0.5rem 1rem;\n      border-radius: 5000px;\n      border: none;\n      align-self: center;\n      transition: all 200ms ease-in-out;\n\n      &:hover {\n        transform: scale(1.025);\n        box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.45);\n      }\n\n      &:active {\n        transform: scale(0.975);\n        box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.85);\n      }\n\n      .svg {\n        width: 1.75rem;\n      }\n    }\n  }\n\n  .links {\n    flex-grow: 4;\n    margin-bottom: 2rem;\n    display: flex;\n    gap: 1rem;\n    justify-content: space-evenly;\n    align-items: flex-end;\n\n    a {\n      border: none;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/images/projects sync \\.(png%7Cjpe?g%7Csvg%7Cgif)$":
/*!************************************************************************************!*\
  !*** ./src/assets/images/projects/ sync nonrecursive \.(png%7Cjpe?g%7Csvg%7Cgif)$ ***!
  \************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./battleship.jpg": "./src/assets/images/projects/battleship.jpg",
	"./cardGame.jpg": "./src/assets/images/projects/cardGame.jpg",
	"./cv.jpg": "./src/assets/images/projects/cv.jpg",
	"./playerPiano.jpg": "./src/assets/images/projects/playerPiano.jpg",
	"./restaurant.jpg": "./src/assets/images/projects/restaurant.jpg",
	"./shopping.jpg": "./src/assets/images/projects/shopping.jpg",
	"./socialMedia.jpg": "./src/assets/images/projects/socialMedia.jpg",
	"./tictactoe.jpg": "./src/assets/images/projects/tictactoe.jpg",
	"./waldo.jpg": "./src/assets/images/projects/waldo.jpg",
	"./weather.jpg": "./src/assets/images/projects/weather.jpg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/images/projects sync \\.(png%7Cjpe?g%7Csvg%7Cgif)$";

/***/ }),

/***/ "./src/assets/icons/contact/email-outline.svg":
/*!****************************************************!*\
  !*** ./src/assets/icons/contact/email-outline.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "email-outline.svg";

/***/ }),

/***/ "./src/assets/icons/contact/github-original.svg":
/*!******************************************************!*\
  !*** ./src/assets/icons/contact/github-original.svg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "github-original.svg";

/***/ }),

/***/ "./src/assets/icons/contact/linkedin-original.svg":
/*!********************************************************!*\
  !*** ./src/assets/icons/contact/linkedin-original.svg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "linkedin-original.svg";

/***/ }),

/***/ "./src/assets/icons/contact/twitter-original.svg":
/*!*******************************************************!*\
  !*** ./src/assets/icons/contact/twitter-original.svg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "twitter-original.svg";

/***/ }),

/***/ "./src/assets/icons/tech/css3-original.svg":
/*!*************************************************!*\
  !*** ./src/assets/icons/tech/css3-original.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "css3-original.svg";

/***/ }),

/***/ "./src/assets/icons/tech/firebase.svg":
/*!********************************************!*\
  !*** ./src/assets/icons/tech/firebase.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "firebase.svg";

/***/ }),

/***/ "./src/assets/icons/tech/git-original.svg":
/*!************************************************!*\
  !*** ./src/assets/icons/tech/git-original.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "git-original.svg";

/***/ }),

/***/ "./src/assets/icons/tech/html5-original.svg":
/*!**************************************************!*\
  !*** ./src/assets/icons/tech/html5-original.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "html5-original.svg";

/***/ }),

/***/ "./src/assets/icons/tech/javascript-original.svg":
/*!*******************************************************!*\
  !*** ./src/assets/icons/tech/javascript-original.svg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "javascript-original.svg";

/***/ }),

/***/ "./src/assets/icons/tech/jest-plain.svg":
/*!**********************************************!*\
  !*** ./src/assets/icons/tech/jest-plain.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "jest-plain.svg";

/***/ }),

/***/ "./src/assets/icons/tech/nodejs-original.svg":
/*!***************************************************!*\
  !*** ./src/assets/icons/tech/nodejs-original.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "nodejs-original.svg";

/***/ }),

/***/ "./src/assets/icons/tech/npm-original-wordmark.svg":
/*!*********************************************************!*\
  !*** ./src/assets/icons/tech/npm-original-wordmark.svg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "npm-original-wordmark.svg";

/***/ }),

/***/ "./src/assets/icons/tech/react-original.svg":
/*!**************************************************!*\
  !*** ./src/assets/icons/tech/react-original.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "react-original.svg";

/***/ }),

/***/ "./src/assets/icons/tech/sass-original.svg":
/*!*************************************************!*\
  !*** ./src/assets/icons/tech/sass-original.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "sass-original.svg";

/***/ }),

/***/ "./src/assets/icons/tech/webpack.svg":
/*!*******************************************!*\
  !*** ./src/assets/icons/tech/webpack.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "webpack.svg";

/***/ }),

/***/ "./src/assets/images/card.jpg":
/*!************************************!*\
  !*** ./src/assets/images/card.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "card.jpg";

/***/ }),

/***/ "./src/assets/images/desk-image.jpg":
/*!******************************************!*\
  !*** ./src/assets/images/desk-image.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "desk-image.jpg";

/***/ }),

/***/ "./src/assets/images/projects/battleship.jpg":
/*!***************************************************!*\
  !*** ./src/assets/images/projects/battleship.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "battleship.jpg";

/***/ }),

/***/ "./src/assets/images/projects/cardGame.jpg":
/*!*************************************************!*\
  !*** ./src/assets/images/projects/cardGame.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "cardGame.jpg";

/***/ }),

/***/ "./src/assets/images/projects/cv.jpg":
/*!*******************************************!*\
  !*** ./src/assets/images/projects/cv.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "cv.jpg";

/***/ }),

/***/ "./src/assets/images/projects/playerPiano.jpg":
/*!****************************************************!*\
  !*** ./src/assets/images/projects/playerPiano.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "playerPiano.jpg";

/***/ }),

/***/ "./src/assets/images/projects/restaurant.jpg":
/*!***************************************************!*\
  !*** ./src/assets/images/projects/restaurant.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "restaurant.jpg";

/***/ }),

/***/ "./src/assets/images/projects/shopping.jpg":
/*!*************************************************!*\
  !*** ./src/assets/images/projects/shopping.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "shopping.jpg";

/***/ }),

/***/ "./src/assets/images/projects/socialMedia.jpg":
/*!****************************************************!*\
  !*** ./src/assets/images/projects/socialMedia.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "socialMedia.jpg";

/***/ }),

/***/ "./src/assets/images/projects/tictactoe.jpg":
/*!**************************************************!*\
  !*** ./src/assets/images/projects/tictactoe.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "tictactoe.jpg";

/***/ }),

/***/ "./src/assets/images/projects/waldo.jpg":
/*!**********************************************!*\
  !*** ./src/assets/images/projects/waldo.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "waldo.jpg";

/***/ }),

/***/ "./src/assets/images/projects/weather.jpg":
/*!************************************************!*\
  !*** ./src/assets/images/projects/weather.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "weather.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/style.scss */ "./src/sass/style.scss");
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home */ "./src/js/pages/home.js");


document.body.appendChild(_pages_home__WEBPACK_IMPORTED_MODULE_1__.homeWrapper);
var setHeaderMargin = function setHeaderMargin() {
  var styleSheet = document.querySelector(':root');
  var navbar = document.querySelector('.navbar');
  var navbarHeight = navbar.getBoundingClientRect().height;
  styleSheet.style.setProperty('--navbar_height', "".concat(navbarHeight, "px"));
};

// window.addEventListener('load', setHeaderMargin);
// window.addEventListener('resize', setHeaderMargin);
})();

/******/ })()
;
//# sourceMappingURL=bundle8d9f72a4788803e95812.js.map