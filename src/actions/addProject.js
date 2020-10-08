import Proj from '../components/projects';
import saveProjects from './saveProjects';
import buildProjectTab from '../builders/buildProjectTab';
import renderTodos from '../render/renderTodos';

const addProject = (title) => {
  // Make new project, add it to projList in localstorage and save them all
  const newProj = new Proj(title);
  const projList = JSON.parse(localStorage.getItem('ScribblesProjects'));
  projList.push(newProj);
  saveProjects(projList);

  // Build new proj tab and insert it in Projlist, dont rerender all.
  const newProjTab = buildProjectTab(newProj);
  const projBar = document.querySelector('.proj-bar');
  const addButton = document.querySelector('.newProj-button');
  projBar.insertBefore(newProjTab, addButton);

  // swap to new proj and render todos/clear existing ones so we can make new
  window.ACTIVE_PROJECT = newProj;
  renderTodos(newProj);
};

export default addProject;
