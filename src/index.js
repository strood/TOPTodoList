// Import methods/functionality
import renderPage from './render/renderPage';
import renderProjects from './render/renderProjects';
import buildDemoSetup from './builders/buildDemoSetup';
import sortController from './actions/sortController';

// Import styles
import './style/reset.scss';
import './style/style.scss';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

window.sortController = sortController;

// This is initial entry point into app. Everything starts below.
function index() {
  // Render Page Structure
  renderPage();

  // Check localStorage for saved projects
  const scribProjs = JSON.parse(localStorage.getItem('ScribblesProjects'));

  if (!scribProjs) {
    // If no projects in localStorage, build a demo setup
    // Add Demo Todo
    buildDemoSetup();
  } else {
    // Render Projects
    const activeProj = scribProjs[0];
    window.ACTIVE_PROJECT = activeProj;
    // Render Projects
    renderProjects();
  }
}

document.onload = index();
