// Import methods/functionality
import renderPage from './render/renderPage';
import renderProjects from './render/renderProjects';
import buildDemoSetup from './builders/buildDemoSetup';
// Import styles
import './style/reset.scss';
import './style/style.scss';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

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
    const newProj = scribProjs[0];
    window.ACTIVE_PROJECT = newProj;
    renderProjects();
  }
}

document.onload = index();
