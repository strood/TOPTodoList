import { format, addDays } from 'date-fns';
import Proj from '../components/projects';
import Todo from '../components/todos';
import saveProjects from '../actions/saveProjects';
import saveTodo from '../actions/saveTodo';

const buildDemoSetup = () => {
  // Make demo Project and Todo
  const demoProj = new Proj('Demo Project');
  // Make Project List and save to ScribblesProjects
  const projList = [];
  projList.push(demoProj);
  saveProjects(projList);

  window.ACTIVE_PROJECT = demoProj;
  let dueDate = format(addDays(Date.now(), 1), 'yyyy-MM-dd').split('-').join(' ');
  console.log(dueDate);
  const demoTodo = new Todo('Demo Todo', 'A sample todo list', 1, 'All your todos are found here for the given project, add another project with the + on the left, or add another todo with the + above!', dueDate, ['demo']);
  saveTodo(demoTodo);
};

export default buildDemoSetup;
