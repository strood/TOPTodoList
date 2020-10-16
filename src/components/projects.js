function Proj(title, todos = []) {
  this.title = title;
  this.todos = todos;
}

// Add todoID to todos list
Proj.prototype.addTodo = function addTodo(todo) {
  this.todos.push(todo.id);
};

// remove todoID from todos list
Proj.prototype.removeTodo = function removeTodo(todo) {
  // this.todos.splice(this.todos.indexOf(todo.id), 1);
  // console.log(this.todos);
  console.log(todo);
  // const projects = JSON.parse(localStorage.getItem('ScribblesProjects'));
  // console.log(projects);
};

export default Proj;
