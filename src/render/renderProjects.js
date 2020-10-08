import buildDemoSetup from '../builders/buildDemoSetup';
import buildProjectTab from '../builders/buildProjectTab';
import renderTodos from './renderTodos';
import {
  renderProjectModal,
  displayProjectModal,
} from './renderModals';

// Grab stored projects from localStorage
const storedProjects = () => JSON.parse(localStorage.getItem('ScribblesProjects'));

const renderProjects = () => {
  // Check for stored data, and render if available
  // If no stored data, add a  "Welcome Page todo/project" to localstorage
  const storedProjs = storedProjects();
  const projBar = document.querySelector('.proj-bar');

  if (!storedProjs) {
    buildDemoSetup();
    renderProjects();
  } else {
    // Add projects to proj-bar
    for (let i = 0; i < storedProjs.length; i += 1) {
      // Build new tab proj-tab, insert into projBar before add button
      const tab = buildProjectTab(storedProjs[i]);
      projBar.appendChild(tab);
    }
  }

  // Build new proj button and add to projBar
  const addButton = document.createElement('div');
  addButton.setAttribute('class', 'newProj-button');
  addButton.innerHTML = '+';
  renderProjectModal();
  addButton.addEventListener('click', displayProjectModal);
  projBar.appendChild(addButton);

  if (window.ACTIVE_PROJECT) {
    renderTodos(window.ACTIVE_PROJECT);
  } else {
    // Activate top project to trigger renderTodos
    projBar.children[0].click();
  }
};

export default renderProjects;
