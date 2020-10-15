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
  const dueDate = format(addDays(Date.now(), 1), 'yyyy-MM-dd').split('-').join(' ');

  const demoTodo = new Todo('Demo Todo', 'A sample todo list', 1, 'All the todos for your selected project are found here! Add another project with the "+" on the left, or add another todo with the "+" above!', dueDate, ['demo']);
  saveTodo(demoTodo);
};

export default buildDemoSetup;
