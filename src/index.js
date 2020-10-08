// Import methods/functionality
import renderPage from './render/renderPage';
import renderProjects from './render/renderProjects';
import buildDemoSetup from './builders/buildDemoSetup';
import Proj from './components/projects';
import Todo from './components/todos';
// Import styles
import './style/reset.scss';
import './style/style.scss';

// This is initial entry point into app. Everything starts below.
function index() {
  // Initial page structure load
  renderPage();

  // Check localStorage for saved projects/
  const scribProjs = localStorage.getItem('ScribblesProjects');

  if (!scribProjs) {
    // If no projects in localStorage:
    // build demo setup
    buildDemoSetup();
  }

  // Render Projects
  renderProjects();
}

document.onload = index();
