"use strict";

import buildTodoTab from '../builders/buildTodoTab';

const renderTodos = (project) => {
  // grab todo-bar
  const todoBar = document.querySelector('.todo-bar');

  // clear existing todos
  // clearTodos(todoBar);

  // add given projects todos
  for (var i = 0; i < project.todos.length; i++) {
    let tab = buildTodoTab(project.todos[i]);
    todoBar.appendChild(tab);
  }

}

// Clear all children from given todos div
const clearTodos = (todos) => {
  while (todos.firstChild) {
    todos.removeChild(todos.firstChild);
  }
}


export default renderTodos;
