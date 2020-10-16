import Proj from '../components/projects';
import saveProject from './saveProject';
import buildProjectTab from '../builders/buildProjectTab';

const addProject = (title) => {
  // Make new project, save it
  const newProj = new Proj(title);
  saveProject(newProj);

  // Build new projTab and insert it in Projlist before addButton
  const newProjTab = buildProjectTab(newProj);
  const projBar = document.querySelector('.proj-bar');
  const addButton = document.querySelector('.newProj-button');
  projBar.insertBefore(newProjTab, addButton);

  // Click the new project tab to target it
  newProjTab.click();
};

export default addProject;
