// Import methods/functionality
import renderPage from './render/renderPage';
import renderProjects from './render/renderProjects';
import buildDemoSetup from './builders/buildDemoSetup';

// Import styles
import './style/reset.scss';
import './style/style.scss';

// This is initial entry point into app. Everything starts below.
function index() {
  // Initial page structure load
  renderPage();

  // Check localStorage for saved projects/
  const scribProjs = JSON.parse(localStorage.getItem('ScribblesProjects'));

  if (!scribProjs) {
    // If no projects in localStorage:
    // build demo setup
    buildDemoSetup();
  }
  const ACTIVE_PROJECT = JSON.parse(localStorage.getItem('ScribblesProjects'))[0];
  // Render Projects
  renderProjects();
}

document.onload = index();
