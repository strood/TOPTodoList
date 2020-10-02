"use strict";
function Project(title) {
  this.title = title;
  this.todos = [];
  this.addTodo = addTodo;
}

function addTodo(todo) {
  this.todos.push(todo);
}

export default Project;
