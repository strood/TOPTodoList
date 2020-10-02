"use strict";
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

	renderProjects();

	// renderTodos(); //--TODO!

	// Select first project in list of projects to display as default
	// Selecting this tab will clear todo list and build our todo objects for this proj

}

document.onload = index();
