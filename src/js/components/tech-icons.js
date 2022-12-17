import htmlIconFile from '../../assets/icons/tech/html5-original.svg';
import cssIconFile from '../../assets/icons/tech/css3-original.svg';
import jsIconFile from '../../assets/icons/tech/javascript-original.svg';
import gitIconFile from '../../assets/icons/tech/git-original.svg';
import npmIconFile from '../../assets/icons/tech/npm-original-wordmark.svg';
import sassIconFile from '../../assets/icons/tech/sass-original.svg';
import reactIconFile from '../../assets/icons/tech/react-original.svg';
import nodejsIconFile from '../../assets/icons/tech/nodejs-original.svg';
import jestIconFile from '../../assets/icons/tech/jest-plain.svg';

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
];

const iconsContainer = document.querySelector('.tech-icons');

techIconsFile.forEach((file) => {
  const icon = document.createElement('object');
  icon.classList.add('icon');
  icon.type = 'image/svg+xml';
  icon.data = file;
  iconsContainer.appendChild(icon);
});

techIconsFile.forEach((file) => {
  const icon = document.createElement('object');
  icon.classList.add('icon');
  icon.type = 'image/svg+xml';
  icon.data = file;
  iconsContainer.appendChild(icon);
});
