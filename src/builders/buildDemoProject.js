import {
  add,
} from 'date-fns';
import Project from '../components/projects';
import buildProjectTab from './buildProjectTab';
import Todo from '../components/todos';

const buildDemoProject = (projBar) => {
  // make a new welcome project/todo that will be rendered and saved for next
  // time, even if no moore notes are made this will be saved.
  // Add this new project to localstorage so will populate for next time.
  // Once its in there, we will render projects as if we normally would.
  const defaultProject = new Project('Demo Project');
  const defaultTodo = new Todo('Demo Todo', 'An example of a todo card for your project!', 0, add(Date.now(), {
    days: 1,
  }), true, ['demo'], '');

  // Add default todo to project, and add project to our projectlist to store
  defaultProject.addTodo(defaultTodo);

  // Build new tab proj-tab, insert into projBar before add button
  const tab = buildProjectTab(defaultProject);
  projBar.appendChild(tab);
};

export default buildDemoProject;
