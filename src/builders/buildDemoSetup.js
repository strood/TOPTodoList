import { format, addDays } from 'date-fns';
import addTodo from '../actions/addTodo';
import addProject from '../actions/addProject';

// Make demo Project and Todo for initial demo setup
const buildDemoSetup = () => {
  // Add a new DemoProject
  addProject('Demo Project');

  // Add Demo Todo
  const dueDate = format(addDays(Date.now(), 1), 'yyyy-MM-dd-HH:mm:ss').split('-').join(' ');
  addTodo('Demo Todo', 'A sample todo list', 0, 'All the todos for your selected project are found here! Add another project with the "+" on the left, or add another todo with the "+" above!', dueDate);
};

export default buildDemoSetup;
