function createProjectCard({
  title,
  imageFile,
  description,
  link,
  repository,
}) {
  const projectCard = document.createElement('div');
  projectCard.classList.add('project-card');

  const projectTitle = document.createElement('h3');
  projectTitle.classList.add('project-title');
  projectTitle.textContent = title;
  projectCard.appendChild(projectTitle);

  const projectImage = document.createElement('img');
  projectImage.classList.add('project-image');
  projectImage.src = imageFile;
  projectCard.appendChild(projectImage);

  const projectDescription = document.createElement('p');
  projectDescription.classList.add('project-description');
  projectDescription.textContent = description;
  projectCard.appendChild(projectDescription);

  const projectLinks = document.createElement('div');
  projectLinks.classList.add('project-links');
  projectCard.appendChild(projectLinks);

  const projectLiveLink = document.createElement('a');
  projectLiveLink.classList.add('project-live-link');
  projectLiveLink.href = link;
  projectLiveLink.target = '_blank';
  projectLiveLink.textContent = 'Live Site';
  projectLinks.appendChild(projectLiveLink);

  const projectRepoLink = document.createElement('a');
  projectRepoLink.classList.add('project-repo-link');
  projectRepoLink.href = repository;
  projectRepoLink.textContent = 'Repo';
  projectRepoLink.target = '_blank';
  projectLinks.appendChild(projectRepoLink);

  return projectCard;
}

export { createProjectCard };
