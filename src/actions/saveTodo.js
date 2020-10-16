import updateProject from './updateProject';

const saveTodo = (todo) => {
  // String and save todo under its UID in localstorage
  localStorage.setItem(`${todo.id}`, JSON.stringify(todo));

  // Add todo to active project, and update project in storage
  const newProj = window.ACTIVE_PROJECT;
  newProj.todos.push(todo.id);
  updateProject(newProj);
};

export default saveTodo;
