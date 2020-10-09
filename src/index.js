// Import methods/functionality
import renderPage from './render/renderPage';
import renderProjects from './render/renderProjects';
import buildDemoSetup from './builders/buildDemoSetup';

// Import styles
import './style/reset.scss';
import './style/style.scss';

// This is initial entry point into app. Everything starts below.
function index() {
  const ACTIVE_PROJECT = null;
  // Initial page structure load
  renderPage();

  // Check localStorage for saved projects/
  let scribProjs = JSON.parse(localStorage.getItem('ScribblesProjects'));

  if (!scribProjs) {
    // If no projects in localStorage:
    // build demo setup
    buildDemoSetup();
    scribProjs = JSON.parse(localStorage.getItem('ScribblesProjects'));
    // Render Projects
    renderProjects();
  } else {
    // Render Projects
    // window.ACTIVE_PROJECT = scribProjs[0];
    renderProjects();
  }
}

document.onload = index();
