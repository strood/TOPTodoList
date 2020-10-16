const updateProject = (proj) => {
  // Grab project list from localstorage, and swap given proj for existing
  const projList = JSON.parse(localStorage.getItem('ScribblesProjects'));
  for (let i = 0; i < projList.length; i += 1) {
    if (projList[i].id === window.ACTIVE_PROJECT.id) {
      projList.splice(i, 1, proj);
    }
  }

  localStorage.setItem('ScribblesProjects', JSON.stringify(projList));
  window.ACTIVE_PROJECT = proj;
};

export default updateProject;
