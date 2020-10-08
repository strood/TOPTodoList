function Proj(title, todos = []) {
  this.title = title;
  this.todos = todos;
}

// Add todoID to todos list
Proj.prototype.addTodo = function addTodo(todo) {
  this.todos.push(todo.id);
};

export default Proj;
