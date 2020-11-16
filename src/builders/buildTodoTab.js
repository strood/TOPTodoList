import { isPast, endOfDay } from 'date-fns';
// import displayTodoConfirmModal from '../render/renderModals';
import editTodo from '../actions/editTodo';
import completeTodo from '../actions/completeTodo';
// import deleteTodo from '../actions/deleteTodo';

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

  // created
  const todoCreated = document.createElement('p');
  todoCreated.setAttribute('class', 'todo-created');
  // Grab date and make look nice before setting to p
  const loadedTodoCreated = loadedTodo.created.split('-').join(' ');
  let createdDate = new Date(loadedTodoCreated);
  createdDate = createdDate.toString().split(' ');
  createdDate = createdDate.slice(0, 4).join(' ');
  todoCreated.innerHTML = `Updated: ${createdDate}`;

  dateHolder.appendChild(todoDue);
  dateHolder.appendChild(todoCreated);

  // ButtonHolder
  const buttonHolder = document.createElement('div');
  buttonHolder.setAttribute('class', 'button-holder');
  const trash = document.createElement('div');
  const check = document.createElement('div');
  const edit = document.createElement('div');
  trash.setAttribute('id', `trash`);
  trash.innerHTML = '<i class="fas fa-trash"></i>';
  check.setAttribute('id', 'check');
  check.innerHTML = '<i class="fas fa-check-circle"></i>';
  edit.setAttribute('id', 'edit');
  edit.innerHTML = '<i class="fas fa-edit"></i>';
  buttonHolder.appendChild(trash);
  buttonHolder.appendChild(edit);
  buttonHolder.appendChild(check);
  trash.addEventListener('click', (e) => {
    // Trigger modal, then give this to modal to confirm
    console.log(e);
    // Get the modal
    const todoConfMod = document.querySelector('.todo-confirm-modal');
    todoConfMod.style.display = 'block';
    let message = document.getElementById('todo-warning-message');
    message.innerHTML = `Are you sure you want to delete '${loadedTodo.title}' todo?`;
    message.setAttribute('key', loadedTodo.id);
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = (event) => {
      if (event.target === todoConfMod) {
        todoConfMod.style.display = 'none';
      }
    };
  });

  check.addEventListener('click', () => {
    completeTodo(loadedTodo);
  });

  edit.addEventListener('click', () => {
    editTodo(loadedTodo);
  });

  // Do an overdue check, make changes if todo is overdue
  // Check if todo is completed
  if (isPast(endOfDay(dueDate))) {
    tab.style.border = '3px solid red';
    const overdue = '- OVERDUE!';
    todoDue.innerHTML = `Due: ${styleDueDate} ${overdue}`;
  }

  if (loadedTodo.completed) {
    tab.style.border = '3px solid green';
    check.style.color = 'green';
  }
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
