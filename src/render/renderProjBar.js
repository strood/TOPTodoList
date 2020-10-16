import {
  displayProjectModal,
} from './renderModals';

const renderProjBar = (body) => {
  // Build left bar structure
  const leftBar = document.createElement('div');
  leftBar.setAttribute('class', 'left-bar');

  // Build logo holder for top corner
  const logoDiv = document.createElement('div');
  logoDiv.setAttribute('class', 'logo-div');
  logoDiv.innerHTML = 'Scribbles';

  // Build scrollable section to hold projects
  const projBar = document.createElement('div');
  projBar.setAttribute('class', 'proj-bar scroll');

  // Build new proj button and add to projBar
  const addButton = document.createElement('div');
  addButton.setAttribute('class', 'newProj-button');
  addButton.innerHTML = '+';
  addButton.addEventListener('click', displayProjectModal);
  projBar.appendChild(addButton);

  // Put it together into left bar and append to body
  leftBar.appendChild(logoDiv);
  leftBar.appendChild(projBar);
  body.appendChild(leftBar);
};

export default renderProjBar;
