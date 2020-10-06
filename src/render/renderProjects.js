"use strict";

import Project from '../components/projects';
import Todo from '../components/todos';
import JSONfn from 'json-fn';
import buildDemoProject from '../builders/buildDemoProject';
import buildProjectTab from '../builders/buildProjectTab';
import saveProjects from '../actions/saveProjects';

const renderProjects = () => {
  // Check for stored data, and render if available
  // If no stored data, add a  "Welcome Page todo/project" to localstorage
  let storedProj = storedProjects();
  const projBar = document.querySelector('.proj-bar');

  if (!storedProj) {
    buildDemoProject(projBar);
  } else {
    // Add projects to proj-bar
    for (var i = 0; i < storedProj.length; i++) {
      // Build new tab proj-tab, insert into projBar before add button
      let tab = buildProjectTab(storedProj[i]);
      projBar.appendChild(tab);
    }

  }


  // Build new proj button
  let addButton = document.createElement('div');
  addButton.setAttribute('class', 'newProj-button');
  addButton.innerHTML = "+";

  projBar.appendChild(addButton);
  
  saveProjects();

}

// Check for stored projects in localstorage, return results
const storedProjects = () => {
  return JSONfn.parse(localStorage.getItem("ScribbleProjects"));
}


export default renderProjects;
