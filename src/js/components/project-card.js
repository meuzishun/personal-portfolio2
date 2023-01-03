import pianoImage from '../../assets/images/piano.gif';

const projectCard = document.createElement('div');
projectCard.classList.add('project-card');

const projectTitle = document.createElement('h3');
projectTitle.classList.add('project-title');
projectTitle.textContent = 'Player Piano';
projectCard.appendChild(projectTitle);

const projectImage = document.createElement('img');
projectImage.classList.add('project-image');
projectImage.src = pianoImage;
projectCard.appendChild(projectImage);

const projectDescription = document.createElement('p');
projectDescription.classList.add('project-description');
projectDescription.textContent =
  'A music training application that plays musical gestures of various lengths for the user to play back. Helpful with music theory and aural skills.';
projectCard.appendChild(projectDescription);

const projectLinks = document.createElement('div');
projectLinks.classList.add('project-links');
projectCard.appendChild(projectLinks);

const projectLiveLink = document.createElement('a');
projectLiveLink.classList.add('project-live-link');
projectLiveLink.href = 'https://dev.meuzishun.com/';
projectLiveLink.target = '_blank';
projectLiveLink.textContent = 'Live Site';
projectLinks.appendChild(projectLiveLink);

const projectRepoLink = document.createElement('a');
projectRepoLink.classList.add('project-repo-link');
projectRepoLink.href = 'https://github.com/meuzishun';
projectRepoLink.textContent = 'Repo';
projectRepoLink.target = '_blank';
projectLinks.appendChild(projectRepoLink);

export { projectCard };
