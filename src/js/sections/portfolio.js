import { createProjectCard } from '../components/create-project-card.js';
import { projectsData } from '../../data/projects-data.js';

const portfolio = document.createElement('section');
portfolio.classList.add('portfolio');
portfolio.id = 'portfolio';

projectsData.forEach((project) => {
  const projectCard = createProjectCard(project);
  portfolio.appendChild(projectCard);
});

export { portfolio };
