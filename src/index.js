// Import methods/functionality
import renderPage from './render/renderPage';
import renderProjects from './render/renderProjects';

// Import styles
import './style/reset.scss';
import './style/style.scss';

// This is initial entry point into app. Everything starts below.
function index() {
  // Initial page structure load
  renderPage();

  // Render projects in projects holder
  renderProjects();

  // Select first project by default to complete page load. Click will load the
  // todos for the given project
  // const projBar = document.querySelector('.proj-bar');
  // projBar.children[0].click();
}

document.onload = index();
