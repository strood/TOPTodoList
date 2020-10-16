import updateProject from './updateProject';

const deleteTodo = (todo) => {
  // prompt w/ modal, then delelete todo if confirmed, nothing if not

  localStorage.removeItem(todo.id);

  const proj = window.ACTIVE_PROJECT;
  proj.todos.splice(proj.todos.indexOf(todo.id), 1);
  updateProject(proj);
  window.ACTIVE_PROJECT = proj;

  // grab todo-bar and remove todo
  const todoBar = document.querySelector('.todo-bar');
  for (let i = 0; i < todoBar.children.length; i += 1) {
    if (todoBar.children[i].id === todo.id) {
      todoBar.removeChild(todoBar.children[i]);
    }
  }
};

export default deleteTodo;
