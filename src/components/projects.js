function addTodo(todo) {
  this.todos.push(todo);
}

function Project(title) {
  this.title = title;
  this.todos = [];
  this.addTodo = addTodo;
}

export default Project;
