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


  const pbar = document.querySelector('.proj-bar');
  // pbar.children.forEach  G through each child and find and delete the one that
  // matches window.ACTIVE_PROJECT
  // renderProjects();

  console.log(window.ACTIVE_PROJECT);
};

export default deleteProject;
