import updateProject from './updateProject';

const deleteTodo = (todo) => {
  // prompt w/ modal, then delelete todo if confirmed, nothing if not

  localStorage.removeItem(todo.id);

  const proj = window.ACTIVE_PROJECT;
  proj.todos.splice(proj.todos.indexOf(todo.id), 1);
  updateProject(proj);
  window.ACTIVE_PROJECT = proj;
};

export default deleteTodo;
