"use strict";
// Import methods/functionality
// None yet

// Import styles
import './style/reset.scss';
import './style/style.scss';

// This is initial entry point into app. Everything starts below.
function component() {
	const bod = document.createElement('div');
	bod.innerHTML = "My Todo List";

	return bod;

}

document.body.appendChild(component());


// The coolest part of everything mentioned above, is that loading assets this
// way allows you to group modules and assets in a more intuitive way. Instead of
// relying on a global /assets directory that contains everything, you can group
// assets with the code that uses them. For example, a structure like this can be
// useful:
//
//  |- /assets
//  |– /components
//  |  |– /my-component
//  |  |  |– index.jsx
//  |  |  |– index.css
//  |  |  |– icon.svg
//  |  |  |– img.png

// This setup makes your code a lot more portable as everything that is closely
// coupled now lives together. Let's say you want to use /my-component in another
// project, simply copy or move it into the /components directory over there. As
// long as you've installed any external dependencies and your configuration has
// the same loaders defined, you should be good to go
