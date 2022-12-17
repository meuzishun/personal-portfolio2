import githubIconFile from '../../assets/icons/contact/github-original.svg';
import linkedinIconFile from '../../assets/icons/contact/linkedin-original.svg';
import twitterIconFile from '../../assets/icons/contact/twitter-original.svg';

const contactIcons = [githubIconFile, linkedinIconFile, twitterIconFile];

const linksContainer = document.createElement('div');
linksContainer.classList.add('links');

contactIcons.forEach((file) => {
  const icon = document.createElement('object');
  icon.classList.add('icon');
  icon.type = 'image/svg+xml';
  icon.data = file;
  linksContainer.appendChild(icon);
});

export { linksContainer };
