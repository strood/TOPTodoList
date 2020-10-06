"use strict";

import JSONfn from 'json-fn';

const saveProjects = () => {
  let projectsList = document.querySelector('.proj-bar');
  console.log(projectsList);
  let projList = [];
  for (var i = 0; i < projectsList.length; i++) {
    console.log(projectsList[i]);
    projList.push(projectsList[i]);
  }
  console.log(projList);
  // NEED TO GET THIS SAVE FIXED< SAVE IN A WAY WE CAN RECONSTRUCT INTO PROJECTS
  //  AND TODOS AGAIN
    // Currently using below line but its not working VVVVV
  // Using JSONfn so we can stringify obj w/ functions in them
  // localStorage.setItem("ScribbleProjects", JSONfn.stringify(projList));
}

export default saveProjects;
