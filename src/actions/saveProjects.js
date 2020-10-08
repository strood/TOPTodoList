const saveProjects = (projList) => {
  // String and save project list under ScribblesProjects
  localStorage.setItem('ScribblesProjects', JSON.stringify(projList));
};

export default saveProjects;
