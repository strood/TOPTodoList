import {
  isPast,
  endOfDay,
} from 'date-fns';

import completeTodo from '../actions/completeTodo';
import deleteTodo from '../actions/deleteTodo';
import editTodo from '../actions/editTodo';

const buildTodoTab = (todo) => {
  const loadedTodo = JSON.parse(localStorage.getItem(todo));

  // Todo tab
  const tab = document.createElement('div');
  tab.setAttribute('class', 'todo-tab');
  tab.setAttribute('id', `${loadedTodo.id}`);

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
  let prioColor = 'black';
  switch (loadedTodo.priority) {
    case '0':
      prioText = 'Low';
      prioColor = 'green';
      break;
    case '1':
      prioText = 'Med';
      prioColor = 'orange';
      break;
    case '2':
      prioText = 'High';
      prioColor = 'red';
      break;
    default:
      prioText = 'Low';
      prioColor = 'green';
  }
  todoPriority.innerHTML = `Priority: ${prioText}`;
  todoPriority.style.color = prioColor;
  // notes
  const todoNotes = document.createElement('p');
  todoNotes.setAttribute('class', 'todo-notes');
  todoNotes.innerHTML = loadedTodo.notes;

  // date holder
  const dateHolder = document.createElement('div');
  dateHolder.setAttribute('class', 'date-holder');
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

  if (isPast(endOfDay(dueDate))) {
    tab.style.border = '1px solid red';
    const overdue = '- OVERDUE!';
    todoDue.innerHTML = `Due: ${styleDueDate} ${overdue}`;
  }

  if (loadedTodo.completed) {
    tab.style.border = '1px solid green';
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

  dateHolder.appendChild(todoDue);
  dateHolder.appendChild(todoCreated);

  // ButtonHolder
  const buttonHolder = document.createElement('div');
  buttonHolder.setAttribute('class', 'button-holder');
  const trash = document.createElement('div');
  const edit = document.createElement('div');
  const check = document.createElement('div');
  trash.setAttribute('id', 'trash');
  trash.innerHTML = '<i class="fas fa-trash"></i>';
  edit.setAttribute('id', 'edit');
  edit.innerHTML = '<i class="fas fa-edit"></i>';
  check.setAttribute('id', 'check');
  check.innerHTML = '<i class="fas fa-check-circle"></i>';

  buttonHolder.appendChild(trash);
  buttonHolder.appendChild(edit);
  buttonHolder.appendChild(check);
  trash.addEventListener('click', () => {
    deleteTodo(loadedTodo);
  });
  edit.addEventListener('click', () => {
    console.log(`edit: ${loadedTodo}`);
    editTodo(loadedTodo);
  });
  check.addEventListener('click', () => {
    completeTodo(loadedTodo);
  });
  // compile components into tab
  tab.appendChild(todoTitle);
  tab.appendChild(todoDescription);
  tab.appendChild(todoPriority);
  tab.appendChild(todoNotes);
  tab.appendChild(dateHolder);
  tab.appendChild(buttonHolder);

  // return completed tab
  return tab;
};

export default buildTodoTab;
