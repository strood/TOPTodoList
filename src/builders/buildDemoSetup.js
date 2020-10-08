import Proj from '../components/projects';
import Todo from '../components/todos';
import saveProjects from '../actions/saveProjects';
import saveTodo from '../actions/saveTodo';

const buildDemoSetup = () => {
  // Make demo Project and Todo
  const demoProj = new Proj('Demo Project');
  const demoTodo = new Todo('Demo Todo', 'A sample todo list', 1, 'All your todos are found here for the given project, add another project with the + on the left, or add another todo with the + above!', 'November 1 2020', ['demo']);
  const demoProj2 = new Proj('Demo Project 2');
  const demoTodo2 = new Todo('Demo Todo 2', 'A sample todo list', 1, 'All your todos are found here for the given project, add another project with the + on the left, or add another todo with the + above!', 'November 1 2020', ['demo']);

  // Add our demoTodo to demoProj
  demoProj.addTodo(demoTodo);

  // Add our demoTodo2 to demoProj2
  demoProj2.addTodo(demoTodo2);
  demoProj2.addTodo(demoTodo);

  // Save Project to ScribblesProjects
  const projList = [];
  projList.push(demoProj);
  projList.push(demoProj2);
  console.log(projList);
  saveProjects(projList);

  // Save Todos under their unique ids
  saveTodo(demoTodo);
  saveTodo(demoTodo2);
};

export default buildDemoSetup;
