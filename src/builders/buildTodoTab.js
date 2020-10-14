import { isFuture } from 'date-fns';

const buildTodoTab = (todo) => {
  const loadedTodo = JSON.parse(localStorage.getItem(todo));

  // Todo tab
  const tab = document.createElement('div');
  tab.setAttribute('class', 'todo-tab');

  // title
  const todoTitle = document.createElement('h1');
  todoTitle.setAttribute('class', 'todo-title');
  todoTitle.innerHTML = loadedTodo.title;

  // description
  const todoDescription = document.createElement('h2');
  todoDescription.setAttribute('class', 'todo-description');
  todoDescription.innerHTML = loadedTodo.description;

  // priority
  const todoPriority = document.createElement('h2');
  todoPriority.setAttribute('class', 'todo-priority');
  let prioText = '';
  switch (loadedTodo.priority) {
    case '0':
      prioText = 'Low';
      break;
    case '1':
      prioText = 'Med';
      break;
    case '2':
      prioText = 'High';
      break;
    default:
      prioText = 'Low';
  }
  todoPriority.innerHTML = prioText;

  // notes
  const todoNotes = document.createElement('p');
  todoNotes.setAttribute('class', 'todo-notes');
  todoNotes.innerHTML = loadedTodo.notes;

  // tags
  const todoTags = document.createElement('h2');
  todoTags.setAttribute('class', 'todo-tags');
  todoTags.innerHTML = loadedTodo.tags;

  // due
  const todoDue = document.createElement('h2');
  todoDue.setAttribute('class', 'todo-due');
  // Grab date and make look nice before setting to p
  const loadedTodoDue = loadedTodo.due.split('-').join(' ');
  const dueDate = new Date(loadedTodoDue);
  let styleDueDate = dueDate.toString().split(' ');
  styleDueDate = styleDueDate.slice(0, 4).join(' ');
  todoDue.innerHTML = `Due: ${styleDueDate}`;
  // Do an overdue check, make changes if todo is overdue

  if (!isFuture(dueDate)) {
    tab.style.border = '1px solid red';
    const overdue = '- OVERDUE!';
    todoDue.innerHTML = `Due: ${styleDueDate} ${overdue}`;
  }

  // created
  const todoCreated = document.createElement('p');
  todoCreated.setAttribute('class', 'todo-created');
  // Grab date and make look nice before setting to p
  const loadedTodoCreated = loadedTodo.created.split('-').join(' ');
  let createdDate = new Date(loadedTodoCreated);
  createdDate = createdDate.toString().split(' ');
  createdDate = createdDate.slice(0, 4).join(' ');
  todoCreated.innerHTML = `Created: ${createdDate}`;

  // compile components into tab
  tab.appendChild(todoTitle);
  tab.appendChild(todoDescription);
  tab.appendChild(todoPriority);
  tab.appendChild(todoNotes);
  tab.appendChild(todoTags);
  tab.appendChild(todoDue);
  tab.appendChild(todoCreated);

  // return completed tab
  return tab;
};

export default buildTodoTab;
