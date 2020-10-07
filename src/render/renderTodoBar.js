import renderToolBar from './renderToolBar';

const renderTodoBar = (body) => {
  // Build right bar structure
  const rightBar = document.createElement('div');
  rightBar.setAttribute('class', 'right-bar');

  const toolbarDiv = renderToolBar();
  // Will put below in function above when done

  // Build scrollable section to hold todo items
  const todoBar = document.createElement('div');
  todoBar.setAttribute('class', 'todo-bar scroll');

  // Put together into right bar and append to body
  rightBar.appendChild(toolbarDiv);
  rightBar.appendChild(todoBar);
  body.appendChild(rightBar);
};

export default renderTodoBar;
