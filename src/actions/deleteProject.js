import deleteTodo from './deleteTodo';

const deleteProject = () => {
  // Prompt with modal, if they say yes, delete from localstorage, if not, dont do anything

  // When deleting project, need to grab all todos and delete thhem first
  while (window.ACTIVE_PROJECT.todos.length > 0) {
    const loadedProject = window.ACTIVE_PROJECT;
    const loadedTodo = JSON.parse(localStorage.getItem(loadedProject.todos[0]));
    deleteTodo(loadedTodo);
  }
  // Then delete prject itself
  const projs = JSON.parse(localStorage.getItem('ScribblesProjects'));

  for (let i = 0; i < projs.length; i += 1) {
    if (projs[i].id === window.ACTIVE_PROJECT.id) {
      projs.splice(i, 1);
    }
  }
  localStorage.setItem('ScribblesProjects', JSON.stringify(projs));

  // Remove tab from projBar
  const projBar = document.querySelector('.proj-bar');
  for (let i = 0; i < projBar.children.length; i += 1) {
    if (projBar.children[i].innerHTML === window.ACTIVE_PROJECT.title) {
      projBar.removeChild(projBar.children[i]);
    }
  }
};

export default deleteProject;
