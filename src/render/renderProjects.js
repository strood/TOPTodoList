import buildProjectTab from '../builders/buildProjectTab';

const renderProjects = () => {
  const projects = JSON.parse(localStorage.getItem('ScribblesProjects'));
  const projBar = document.querySelector('.proj-bar');

  for (let i = 0; i < projects.length; i += 1) {
    // Build new tab proj-tab, insert into projBar before add button
    const tab = buildProjectTab(projects[i]);
    const addButton = document.querySelector('.newProj-button');
    projBar.insertBefore(tab, addButton);
  }
  // Activate top project to trigger renderTodos
  projBar.children[0].click();
};

export default renderProjects;
