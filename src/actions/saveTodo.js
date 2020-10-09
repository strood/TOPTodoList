import saveProjects from './saveProjects';

const saveTodo = (todo) => {
  // String and save todo under its UID
  localStorage.setItem(`${todo.id}`, JSON.stringify(todo));

  // Add todo id to current active project so it is linked
  window.ACTIVE_PROJECT.todos.push(todo.id);
  // update ACTIVE_PROJECT in the ScribblesProjects, removing old version
  let scribProjs = JSON.parse(localStorage.getItem('ScribblesProjects'));
  scribProjs = scribProjs.filter((obj) => obj.title !== window.ACTIVE_PROJECT.title);
  scribProjs.push(window.ACTIVE_PROJECT);
  // Save ScribblesProjects with updated ACTIVE_PROJECT
  saveProjects(scribProjs);
};

export default saveTodo;
