"use strict";

import Project from '../components/projects';
import Todo from '../components/todos';
import {
  add
} from 'date-fns';
import JSONfn from 'json-fn';
import buildProjectTab from '../builders/buildProjectTab';



const renderProjects = () => {
  // Check for stored data, and render if available
  // If no stored data, add a  "Welcome Page todo/project" to localstorage
  let storedProj = storedProjects();

  if (!storedProj) {
    buildDemoProject();
  }

  // Add projects to proj-bar
  const projBar = document.querySelector('.proj-bar');

  for (var i = 0; i < storedProj.length; i++) {
    // Build new tab proj-tab, insert into projBar before add button
    let tab = buildProjectTab(storedProj[i]);
    projBar.appendChild(tab);
  }
  // Build new proj button
  let addButton = document.createElement('div');
  addButton.setAttribute('class', 'newProj-button');
  addButton.innerHTML = "+";

  projBar.appendChild(addButton);

}

// Check for stored projects in localstorage, return results
const storedProjects = () => {
  return JSONfn.parse(localStorage.getItem("ScribbleProjects"));
}

// May move this out later, also need to make the fiunction inside into modules
const buildDemoProject = () => {
  // make a new welcome project/todo that will be rendered and saved for next
  // time, even if no moore notes are made this will be saved.
  // Add this new project to localstorage so will populate for next time.
  // Once its in there, we will render projects as if we normally would.
  let defaultProject = new Project("Demo Project");
  let defaultTodo = new Todo("Demo Todo", "An example of a todo card for your project!", 0, add(Date.now(), {
    days: 1,
  }), true, ["demo"], "");

  // Add default todo to project, and add project to our projectlist to store
  defaultProject.addTodo(defaultTodo);
  let projectList = [];
  projectList.push(defaultProject)
  // Using JSONfn so we can stringify obj w/ functions in them
  localStorage.setItem("ScribbleProjects", JSONfn.stringify(projectList));
}


export default renderProjects;
