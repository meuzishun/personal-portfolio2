const projectCard = document.createElement('div');
projectCard.classList.add('project-card');

const projectTitle = document.createElement('h3');
projectTitle.classList.add('project-title');
projectTitle.textContent = 'My Awesome Project';
projectCard.appendChild(projectTitle);

const projectLiveLink = document.createElement('a');
projectLiveLink.classList.add('project-live-link');
projectLiveLink.href = 'www.google.com';
projectLiveLink.textContent = 'Live Site';
projectCard.appendChild(projectLiveLink);

const projectRepoLink = document.createElement('a');
projectRepoLink.classList.add('project-repo-link');
projectRepoLink.href = 'www.github.com';
projectRepoLink.textContent = 'Repo';
projectCard.appendChild(projectRepoLink);

export { projectCard };
