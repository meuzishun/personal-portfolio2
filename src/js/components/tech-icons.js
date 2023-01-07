import htmlIconFile from '../../assets/icons/tech/html5-original.svg';
import cssIconFile from '../../assets/icons/tech/css3-original.svg';
import jsIconFile from '../../assets/icons/tech/javascript-original.svg';
import gitIconFile from '../../assets/icons/tech/git-original.svg';
import npmIconFile from '../../assets/icons/tech/npm-original-wordmark.svg';
import sassIconFile from '../../assets/icons/tech/sass-original.svg';
import reactIconFile from '../../assets/icons/tech/react-original.svg';
import nodejsIconFile from '../../assets/icons/tech/nodejs-original.svg';
import jestIconFile from '../../assets/icons/tech/jest-plain.svg';
import webpackIconFile from '../../assets/icons/tech/webpack.svg';
import firebaseIconFile from '../../assets/icons/tech/firebase.svg';

const techIconsFile = [
  htmlIconFile,
  cssIconFile,
  jsIconFile,
  gitIconFile,
  npmIconFile,
  sassIconFile,
  reactIconFile,
  nodejsIconFile,
  jestIconFile,
  webpackIconFile,
  firebaseIconFile,
];

const iconsContainer = document.createElement('div');
iconsContainer.classList.add('icons-container');

const icons = document.createElement('div');
icons.classList.add('tech-icons');
iconsContainer.appendChild(icons);

for (let i = 0, l = techIconsFile.length * 2; i < l; i++) {
  const icon = document.createElement('object');
  icon.classList.add('icon');
  icon.type = 'image/svg+xml';
  icon.data = techIconsFile[i % techIconsFile.length];
  icons.appendChild(icon);
}

const overlay = document.createElement('div');
overlay.classList.add('overlay');
iconsContainer.appendChild(overlay);

export { iconsContainer };
