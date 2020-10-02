"use strict";

const buildProjectTab = (project) => {
  let holder = document.createElement('div');
  holder.innerHTML = project.title;
  return holder;
}

export default buildProjectTab;
