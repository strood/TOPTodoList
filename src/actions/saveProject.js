const saveProject = (proj) => {
  // String and save project list under ScribblesProjects
  // If none exist, make array, pass project to it and set it as ScribblesProjects
  if (localStorage.getItem('ScribblesProjects')) {
    const projList = JSON.parse(localStorage.getItem('ScribblesProjects'));
    projList.push(proj);
    localStorage.setItem('ScribblesProjects', JSON.stringify(projList));
  } else {
    const projList = [];
    projList.push(proj);
    localStorage.setItem('ScribblesProjects', JSON.stringify(projList));
  }
};

export default saveProject;
