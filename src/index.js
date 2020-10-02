"use strict";
// Import methods/functionality
import renderPage from './render/renderPage';

// Import styles
import './style/reset.scss';
import './style/style.scss';

// This is initial entry point into app. Everything starts below.
function index() {
	// Initial page structure load
	renderPage();

	// Check for stored data, and render if available --TODD
	// If no stored data, render a "Welcome Page todo/project"
	// if (storedData())
	//  renderPersonProjects/Todos
	// else
	// renderDefaultProject/Todo

}

document.onload = index();
