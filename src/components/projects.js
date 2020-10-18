function Proj(title, todos = []) {
  this.id = Math.random().toString(36).slice(2); // Random proj id
  this.title = title;
  this.todos = todos;
}

// Add todoID to todos list
Proj.prototype.addTodo = function addTodo(todo) {
  this.todos.push(todo.id);
};

export default Proj;
