import updateProject from './updateProject';

const deleteTodo = (todo) => {
  // Remove todo from its projects todo list
  const proj = window.ACTIVE_PROJECT;
  proj.todos.splice(proj.todos.indexOf(todo.id), 1);
  updateProject(proj);

  // Remove todo from localStorage
  localStorage.removeItem(todo.id);

  // grab todo-bar and remove todo tab from it
  const todoBar = document.querySelector('.todo-bar');
  for (let i = 0; i < todoBar.children.length; i += 1) {
    if (todoBar.children[i].id === todo.id) {
      todoBar.removeChild(todoBar.children[i]);
    }
  }
};

export default deleteTodo;
