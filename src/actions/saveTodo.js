const saveTodo = (todo) => {
  // String and save todo under its UID
  localStorage.setItem(`${todo.id}`, JSON.stringify(todo));
  // Add todo to current active project so it is linked

  window.ACTIVE_PROJECT.todos.push(todo);
  let scribProjs = JSON.parse(localStorage.getItem('ScribblesProjects'));
  // scribProjs.push() <---- Here lies my prob, i need to "update" the
  // Localstorage 'ScribblesProjects', replacing the old version of the ACTIVE_PROJECT
  // with the newly updated version, maybe adding UID to projects is easiest way? 
};

export default saveTodo;
