const updateProject = (proj) => {
  // Grab project list from localstorage, and swap given proj for existing
  let projList = JSON.parse(localStorage.getItem('ScribblesProjects'));
  projList = projList.filter((obj) => obj.title !== proj.title);
  projList.push(proj);

  localStorage.setItem('ScribblesProjects', JSON.stringify(projList));
};

export default updateProject;
