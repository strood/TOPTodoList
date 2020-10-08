// Load todo and parse back to object form.
const loadTodo = (todo) => JSON.parse(localStorage.getItem(`${todo}`));

const buildTodoTab = (todo) => {
  // Load todo from localstorage to access props
  const storedTodo = loadTodo(todo);

  // Todo tab
  const tab = document.createElement('div');
  tab.setAttribute('class', 'todo-tab');

  // title
  const todoTitle = document.createElement('h1');
  todoTitle.setAttribute('class', 'todo-title');
  todoTitle.innerHTML = storedTodo.title;

  // description
  const todoDescription = document.createElement('h2');
  todoDescription.setAttribute('class', 'todo-description');
  todoDescription.innerHTML = storedTodo.description;

  // priority
  const todoPriority = document.createElement('h2');
  todoPriority.setAttribute('class', 'todo-priority');
  todoPriority.innerHTML = storedTodo.priority;

  // notes
  const todoNotes = document.createElement('p');
  todoNotes.setAttribute('class', 'todo-notes');
  todoNotes.innerHTML = storedTodo.notes;

  // tags
  const todoTags = document.createElement('h2');
  todoTags.setAttribute('class', 'todo-tags');
  todoTags.innerHTML = storedTodo.tags;

  // due
  const todoDue = document.createElement('h2');
  todoDue.setAttribute('class', 'todo-due');
  // Grab date and make look nice before setting to p
  let dueDate = Date(storedTodo.due).split(' ');
  dueDate = dueDate.slice(0, 5).join(' ');
  todoDue.innerHTML = `Due: ${dueDate}`;

  // created
  const todoCreated = document.createElement('p');
  todoCreated.setAttribute('class', 'todo-created');
  // Grab date and make look nice before setting to p
  let createdDate = Date(storedTodo.created).split(' ');
  createdDate = createdDate.slice(0, 5).join(' ');
  todoCreated.innerHTML = `Created: ${createdDate}`;

  // compile components into tab
  tab.appendChild(todoTitle);
  tab.appendChild(todoDescription);
  tab.appendChild(todoNotes);
  tab.appendChild(todoTags);
  tab.appendChild(todoDue);
  tab.appendChild(todoCreated);

  // return completed tab
  return tab;
};

export default buildTodoTab;
