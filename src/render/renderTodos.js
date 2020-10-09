import buildTodoTab from '../builders/buildTodoTab';

// Clear all children from given todos div
const clearTodos = (todos) => {
  while (todos.firstChild) {
    todos.removeChild(todos.firstChild);
  }
};

// Render todos on page in todosBar
const renderTodos = (project) => {
  console.log(project);
  // grab todo-bar
  const todoBar = document.querySelector('.todo-bar');

  // clear existing todos
  clearTodos(todoBar);

  // add given projects todos
  for (let i = 0; i < project.todos.length; i += 1) {
    const tab = buildTodoTab(project.todos[i]);
    todoBar.appendChild(tab);
  }

  if (!todoBar.children[0]) {
    todoBar.innerHTML = 'No todos for this project yet, add one with the "+" above';
  }
};

export default renderTodos;
