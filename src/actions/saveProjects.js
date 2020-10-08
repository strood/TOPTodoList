const saveProjects = (projList) => {
  localStorage.setItem('ScribblesProjects', JSON.stringify(projList));
};

export default saveProjects;
