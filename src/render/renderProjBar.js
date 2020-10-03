"use strict";

import renderLogo from './renderLogo';

const renderProjBar = (body) => {
  // Build left bar structure
  let leftBar = document.createElement('div');
  leftBar.setAttribute('class', 'left-bar');

  // Build logo holder for top corner
  let logoDiv = document.createElement('div');
  logoDiv.setAttribute('class', 'logo-div');
  renderLogo(logoDiv);

  // Build scrollable section to hold projects
  let projBar = document.createElement('div');
  projBar.setAttribute('class', 'proj-bar scroll');


  // Put it together into left bar and append to body
  leftBar.appendChild(logoDiv);
  leftBar.appendChild(projBar);
  body.appendChild(leftBar);

}

export default renderProjBar;
