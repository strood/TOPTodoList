import buildTodoTab from '../builders/buildTodoTab';
// Clear all children from given todos div
const clearTodos = (todos) => {
  while (todos.firstChild) {
    todos.removeChild(todos.firstChild);
  }
};

const renderTodos = (project) => {
  // grab todo-bar
  const todoBar = document.querySelector('.todo-bar');

  // clear existing todos
  clearTodos(todoBar);

  // add given projects todos
  for (let i = 0; i < project.todos.length; i += 1) {
    const tab = buildTodoTab(project.todos[i]);
    todoBar.appendChild(tab);
  }
};

export default renderTodos;
