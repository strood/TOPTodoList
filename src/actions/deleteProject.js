import deleteTodo from './deleteTodo';
import renderProjects from '../render/renderProjects';

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
  console.log(projs);
  projs.splice(projs.indexOf(window.ACTIVE_PROJECT), 1);
  localStorage.setItem('ScribblesProjects', JSON.stringify(projs));

  const projBar = document.querySelector('.proj-bar');
  for (let i = 0; i < projBar.children.length; i += 1) {
    if (projBar.children[i].innerHTML === window.ACTIVE_PROJECT.title) {
      projBar.removeChild(projBar.children[i]);
    }
  }
  console.log(window.ACTIVE_PROJECT);
};

export default deleteProject;
