import JSONfn from 'json-fn';
import buildDemoProject from '../builders/buildDemoProject';
import buildProjectTab from '../builders/buildProjectTab';
import saveProjects from '../actions/saveProjects';

// Check for stored projects in localstorage, return results
const storedProjects = () => JSONfn.parse(localStorage.getItem('ScribbleProjects'));

const renderProjects = () => {
  // Check for stored data, and render if available
  // If no stored data, add a  "Welcome Page todo/project" to localstorage
  const storedProj = storedProjects();
  const projBar = document.querySelector('.proj-bar');

  if (!storedProj) {
    buildDemoProject(projBar);
  } else {
    // Add projects to proj-bar
    for (let i = 0; i < storedProj.length; i += 1) {
      // Build new tab proj-tab, insert into projBar before add button
      const tab = buildProjectTab(storedProj[i]);
      projBar.appendChild(tab);
    }
  }

  // Build new proj button
  const addButton = document.createElement('div');
  addButton.setAttribute('class', 'newProj-button');
  addButton.innerHTML = '+';

  projBar.appendChild(addButton);
  saveProjects();
};

export default renderProjects;
