import githubIconFile from '../../assets/icons/contact/github-original.svg';
import linkedinIconFile from '../../assets/icons/contact/linkedin-original.svg';
import twitterIconFile from '../../assets/icons/contact/twitter-original.svg';

const contactIconFiles = [githubIconFile, linkedinIconFile, twitterIconFile];
const hyperlinks = [
  'https://github.com/meuzishun',
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
];

const linksContainer = document.createElement('div');
linksContainer.classList.add('links');

const contactIcons = contactIconFiles.map((file, index) => {
  const link = document.createElement('a');
  link.href = hyperlinks[index];

  const icon = document.createElement('object');
  icon.classList.add('icon');
  icon.type = 'image/svg+xml';
  icon.data = file;

  link.appendChild(icon);
  return link;
});

contactIcons.forEach((icon) => {
  linksContainer.appendChild(icon);
});

export { linksContainer };
