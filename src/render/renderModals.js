import addProject from '../actions/addProject';
import addTodo from '../actions/addTodo';
import updateTodo from '../actions/updateTodo';
import renderTodos from './renderTodos';
import deleteProject from '../actions/deleteProject';
import deleteTodo from '../actions/deleteTodo';

import Todo from '../components/todos';

const displayProjectModal = () => {
  // Get the modal
  const projMod = document.querySelector('.proj-modal');
  projMod.style.display = 'block';
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = (event) => {
    if (event.target === projMod) {
      projMod.style.display = 'none';
    }
  };
};

const displayTodoModal = () => {
  if (window.ACTIVE_PROJECT) {
    const todoMod = document.querySelector('.todo-modal');
    todoMod.style.display = 'block';
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = (event) => {
      if (event.target === todoMod) {
        todoMod.style.display = 'none';
      }
    };
  } else {
    displayProjectModal();
  }
};

const displayProjConfirmModal = () => {
  // Get the modal
  const projConfMod = document.querySelector('.proj-confirm-modal');
  projConfMod.style.display = 'block';
  const message = document.getElementById('proj-warning-message');
  message.innerHTML = `Are you sure you want to delete '${window.ACTIVE_PROJECT.title}' project?`;
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = (event) => {
    if (event.target === projConfMod) {
      projConfMod.style.display = 'none';
    }
  };
};

const hideTodoConfirmModal = () => {
  // Get the modal
  const todoConfMod = document.querySelector('.todo-confirm-modal');
  todoConfMod.style.display = 'none';
};

const hideProjConfirmModal = () => {
  // Get the modal
  const projConfMod = document.querySelector('.proj-confirm-modal');
  projConfMod.style.display = 'none';
};

const hideProjectModal = () => {
  // Get the modal
  const projMod = document.querySelector('.proj-modal');
  projMod.style.display = 'none';
};

const hideTodoModal = () => {
  const todoMod = document.querySelector('.todo-modal');
  todoMod.style.display = 'none';
};

const hideTodoEditModal = () => {
  const todoMod = document.querySelector('.todo-edit-modal');
  todoMod.style.display = 'none';
};

const renderProjectModal = () => {
  // Modal
  const modal = document.createElement('div');
  modal.setAttribute('class', 'modal proj-modal');

  // form and form elements
  const form = document.createElement('div');
  form.setAttribute('class', 'modal-content');

  // Title and exit bar
  const formHead = document.createElement('div');
  formHead.setAttribute('class', 'modal-header');
  const exit = document.createElement('div');
  exit.setAttribute('class', 'close');
  exit.addEventListener('click', hideProjectModal);
  exit.innerHTML = '&times;';
  const modalTitle = document.createElement('h3');
  modalTitle.innerHTML = 'New Project';
  formHead.appendChild(modalTitle);
  formHead.appendChild(exit);

  // Input and label
  const modalInput = document.createElement('div');
  modalInput.setAttribute('class', 'modal-input');
  const titleLabel = document.createElement('h4');
  titleLabel.innerHTML = 'Title:';
  const titleInput = document.createElement('input');
  titleInput.setAttribute('id', 'title-input');
  titleInput.setAttribute('type', 'text');
  const button = document.createElement('button');
  button.innerHTML = 'Create';
  button.setAttribute('class', 'modal-button');
  button.addEventListener('click', () => {
    addProject(titleInput.value);
    titleInput.value = '';
    hideProjectModal();
  });
  modalInput.appendChild(titleLabel);
  modalInput.appendChild(titleInput);

  // Adding all to form holder
  form.appendChild(formHead);
  form.appendChild(modalInput);
  form.appendChild(button);

  // add form to modal
  modal.appendChild(form);

  // Add modal to body, its hidden by default
  document.body.appendChild(modal);
};

const renderTodoModal = () => {
  // Modal
  const modal = document.createElement('div');
  modal.setAttribute('class', 'modal todo-modal');

  // form and form elements
  const form = document.createElement('div');
  form.setAttribute('class', 'modal-content');

  // Title and exit bar
  const formHead = document.createElement('div');
  formHead.setAttribute('class', 'modal-header');
  const exit = document.createElement('div');
  exit.setAttribute('class', 'close');
  exit.addEventListener('click', hideTodoModal);
  exit.innerHTML = '&times;';
  const modalTitle = document.createElement('h3');
  modalTitle.innerHTML = 'New Todo';
  formHead.appendChild(modalTitle);
  formHead.appendChild(exit);

  // Input and label
  // Holder
  const modalInput = document.createElement('form');
  modalInput.setAttribute('class', 'modal-input');

  // Input Labels
  const titleLabel = document.createElement('h4');
  const descLabel = document.createElement('h4');
  const prioLabel = document.createElement('h4');
  const lowPrioLabel = document.createElement('label');
  const medPrioLabel = document.createElement('label');
  const highPrioLabel = document.createElement('label');
  const noteLabel = document.createElement('h4');
  const dueLabel = document.createElement('h4');

  // Label text
  titleLabel.innerHTML = 'Title:';
  descLabel.innerHTML = 'Description:';
  prioLabel.innerHTML = 'Priority:';
  lowPrioLabel.innerHTML = 'Low:';
  medPrioLabel.innerHTML = 'Med:';
  highPrioLabel.innerHTML = 'High:';
  noteLabel.innerHTML = 'Notes:';
  dueLabel.innerHTML = 'Due:';

  // Inputs
  const titleInput = document.createElement('input');
  const descInput = document.createElement('input');
  const lowPrioInput = document.createElement('input');
  lowPrioInput.setAttribute('type', 'radio');
  const medPrioInput = document.createElement('input');
  medPrioInput.setAttribute('type', 'radio');
  const highPrioInput = document.createElement('input');
  highPrioInput.setAttribute('type', 'radio');
  const noteInput = document.createElement('textarea');
  const dueInput = document.createElement('input');
  dueInput.setAttribute('type', 'date');

  // Set id's
  titleInput.setAttribute('id', 'title-input');
  descInput.setAttribute('id', 'desc-input');
  lowPrioInput.setAttribute('id', 'low-prio');
  lowPrioInput.setAttribute('name', 'priority');
  lowPrioInput.setAttribute('value', 0);
  medPrioInput.setAttribute('id', 'med-prio');
  medPrioInput.setAttribute('name', 'priority');
  medPrioInput.setAttribute('value', 1);
  highPrioInput.setAttribute('id', 'high-prio');
  highPrioInput.setAttribute('name', 'priority');
  highPrioInput.setAttribute('value', 2);
  noteInput.setAttribute('id', 'note-input');
  dueInput.setAttribute('id', 'due-input');

  const button = document.createElement('button');
  button.setAttribute('class', 'modal-button');
  button.setAttribute('type', 'submit');
  button.innerHTML = 'Create';
  button.addEventListener('click', () => {
    // Grab selected priority
    const selectedPrio = [lowPrioInput, medPrioInput, highPrioInput].filter(
      (input) => input.checked === true
    );
    // Add todo with given inputs
    if (selectedPrio.length === 0) {
      selectedPrio.push(lowPrioInput);
    }
    addTodo(
      titleInput.value,
      descInput.value,
      selectedPrio[0].value,
      noteInput.value,
      dueInput.value
    );

    // Clean input fields
    titleInput.value = '';
    descInput.value = '';
    selectedPrio[0].checked = false;
    noteInput.value = '';
    dueInput.value = '';
    hideTodoModal();
  });

  modalInput.appendChild(titleLabel);
  modalInput.appendChild(titleInput);
  modalInput.appendChild(descLabel);
  modalInput.appendChild(descInput);
  modalInput.appendChild(prioLabel);
  modalInput.appendChild(lowPrioLabel);
  modalInput.appendChild(lowPrioInput);
  modalInput.appendChild(medPrioLabel);
  modalInput.appendChild(medPrioInput);
  modalInput.appendChild(highPrioLabel);
  modalInput.appendChild(highPrioInput);
  modalInput.appendChild(noteLabel);
  modalInput.appendChild(noteInput);
  modalInput.appendChild(dueLabel);
  modalInput.appendChild(dueInput);

  // Adding all to form holder
  form.appendChild(formHead);
  form.appendChild(modalInput);
  form.appendChild(button);

  // add form to modal
  modal.appendChild(form);

  // Add modal to body, its hidden by default
  document.body.appendChild(modal);
};

const renderTodoEditModal = () => {
  // Modal
  const modal = document.createElement('div');
  modal.setAttribute('class', 'modal todo-edit-modal');

  // form and form elements
  const form = document.createElement('div');
  form.setAttribute('class', 'modal-content');

  // Title and exit bar
  const formHead = document.createElement('div');
  formHead.setAttribute('class', 'modal-header');
  const exit = document.createElement('div');
  exit.setAttribute('class', 'close');
  exit.addEventListener('click', hideTodoEditModal);
  exit.innerHTML = '&times;';
  const modalTitle = document.createElement('h3');
  modalTitle.innerHTML = 'Edit Todo';
  formHead.appendChild(modalTitle);
  formHead.appendChild(exit);

  // Input and label
  // Holder
  const modalInput = document.createElement('form');
  modalInput.setAttribute('class', 'modal-input');

  // Input Labels
  const titleLabel = document.createElement('h4');
  const descLabel = document.createElement('h4');
  const prioLabel = document.createElement('h4');
  const lowPrioLabel = document.createElement('label');
  const medPrioLabel = document.createElement('label');
  const highPrioLabel = document.createElement('label');
  const noteLabel = document.createElement('h4');
  const dueLabel = document.createElement('h4');

  // Label text
  titleLabel.innerHTML = 'Title:';
  descLabel.innerHTML = 'Description:';
  prioLabel.innerHTML = 'Priority:';
  lowPrioLabel.innerHTML = 'Low:';
  medPrioLabel.innerHTML = 'Med:';
  highPrioLabel.innerHTML = 'High:';
  noteLabel.innerHTML = 'Notes:';
  dueLabel.innerHTML = 'Due:';

  // Inputs
  const idInput = document.createElement('input');
  const titleInput = document.createElement('input');
  const descInput = document.createElement('input');
  const lowPrioInput = document.createElement('input');
  lowPrioInput.setAttribute('type', 'radio');
  const medPrioInput = document.createElement('input');
  medPrioInput.setAttribute('type', 'radio');
  const highPrioInput = document.createElement('input');
  highPrioInput.setAttribute('type', 'radio');
  const noteInput = document.createElement('textarea');
  const dueInput = document.createElement('input');
  dueInput.setAttribute('type', 'date');

  // Set id's
  idInput.setAttribute('id', 'edit-id-input');
  idInput.setAttribute('hidden', true);
  titleInput.setAttribute('id', 'edit-title-input');
  descInput.setAttribute('id', 'edit-desc-input');
  lowPrioInput.setAttribute('id', 'edit-low-prio');
  lowPrioInput.setAttribute('name', 'priority');
  lowPrioInput.setAttribute('value', 0);
  medPrioInput.setAttribute('id', 'edit-med-prio');
  medPrioInput.setAttribute('name', 'priority');
  medPrioInput.setAttribute('value', 1);
  highPrioInput.setAttribute('id', 'edit-high-prio');
  highPrioInput.setAttribute('name', 'priority');
  highPrioInput.setAttribute('value', 2);
  noteInput.setAttribute('id', 'edit-note-input');
  dueInput.setAttribute('id', 'edit-due-input');

  const button = document.createElement('button');
  button.setAttribute('class', 'modal-button');
  button.setAttribute('type', 'submit');
  button.innerHTML = 'Update';
  button.addEventListener('click', () => {
    // Grab selected priority
    const selectedPrio = [lowPrioInput, medPrioInput, highPrioInput].filter(
      (input) => input.checked === true
    );
    // Add todo with given inputs
    const newTodo = new Todo(
      titleInput.value,
      descInput.value,
      selectedPrio[0].value,
      noteInput.value,
      dueInput.value
    );
    newTodo.id = idInput.value;
    updateTodo(newTodo);
    // Clean input fields
    idInput.value = '';
    titleInput.value = '';
    descInput.value = '';
    selectedPrio[0].checked = false;
    noteInput.value = '';
    dueInput.value = '';
    hideTodoEditModal();
    renderTodos(window.ACTIVE_PROJECT);
  });

  modalInput.appendChild(idInput);
  modalInput.appendChild(titleLabel);
  modalInput.appendChild(titleInput);
  modalInput.appendChild(descLabel);
  modalInput.appendChild(descInput);
  modalInput.appendChild(prioLabel);
  modalInput.appendChild(lowPrioLabel);
  modalInput.appendChild(lowPrioInput);
  modalInput.appendChild(medPrioLabel);
  modalInput.appendChild(medPrioInput);
  modalInput.appendChild(highPrioLabel);
  modalInput.appendChild(highPrioInput);
  modalInput.appendChild(noteLabel);
  modalInput.appendChild(noteInput);
  modalInput.appendChild(dueLabel);
  modalInput.appendChild(dueInput);

  // Adding all to form holder
  form.appendChild(formHead);
  form.appendChild(modalInput);
  form.appendChild(button);

  // add form to modal
  modal.appendChild(form);

  // Add modal to body, its hidden by default
  document.body.appendChild(modal);
};

const renderTodoConfirmModal = () => {
  // Modal
  const modal = document.createElement('div');
  modal.setAttribute('class', 'modal todo-confirm-modal');

  // form and form elements
  const form = document.createElement('div');
  form.setAttribute('class', 'modal-content');

  // Title and exit bar
  const formHead = document.createElement('div');
  formHead.setAttribute('class', 'modal-header');
  const exit = document.createElement('div');
  exit.setAttribute('class', 'close');
  exit.addEventListener('click', hideTodoConfirmModal);
  exit.innerHTML = '&times;';
  const modalTitle = document.createElement('h3');
  modalTitle.innerHTML = 'Warning!';
  formHead.appendChild(modalTitle);
  formHead.appendChild(exit);

  // Input and label
  // Holder
  const modalInput = document.createElement('form');
  modalInput.setAttribute('class', 'modal-input');

  // Input Labels
  const message = document.createElement('p');
  message.setAttribute('id', 'todo-warning-message');
  const messageTwo = document.createElement('p');
  messageTwo.innerHTML = 'This can not be undone!';

  modalInput.appendChild(message);
  modalInput.appendChild(messageTwo);

  const buttonHolder = document.createElement('div');
  buttonHolder.setAttribute('id', 'conf-button-holder');

  const confButton = document.createElement('button');
  confButton.setAttribute('class', 'modal-button');
  confButton.setAttribute('type', 'submit');
  confButton.innerHTML = 'Delete';
  confButton.addEventListener('click', () => {
    console.log(message.attributes.key.value);
    const loadedTodo = JSON.parse(
      localStorage.getItem(message.attributes.key.value)
    );
    deleteTodo(loadedTodo);
    hideTodoConfirmModal();
  });
  const denyButton = document.createElement('button');
  denyButton.setAttribute('class', 'modal-button');
  denyButton.setAttribute('type', 'submit');
  denyButton.innerHTML = 'Cancel';
  denyButton.addEventListener('click', () => {
    hideTodoConfirmModal();
  });

  buttonHolder.appendChild(confButton);
  buttonHolder.appendChild(denyButton);
  // Adding all to form holder
  form.appendChild(formHead);
  form.appendChild(modalInput);
  form.appendChild(buttonHolder);

  // add form to modal
  modal.appendChild(form);

  // Add modal to body, its hidden by default
  document.body.appendChild(modal);
};

const renderProjConfirmModal = () => {
  // Modal
  const modal = document.createElement('div');
  modal.setAttribute('class', 'modal proj-confirm-modal');

  // form and form elements
  const form = document.createElement('div');
  form.setAttribute('class', 'modal-content');

  // Title and exit bar
  const formHead = document.createElement('div');
  formHead.setAttribute('class', 'modal-header');
  const exit = document.createElement('div');
  exit.setAttribute('class', 'close');
  exit.addEventListener('click', hideProjConfirmModal);
  exit.innerHTML = '&times;';
  const modalTitle = document.createElement('h3');
  modalTitle.innerHTML = 'Waring!';
  formHead.appendChild(modalTitle);
  formHead.appendChild(exit);

  // Input and label
  // Holder
  const modalInput = document.createElement('form');
  modalInput.setAttribute('class', 'modal-input');

  // Input Labels
  const message = document.createElement('p');
  message.setAttribute('id', 'proj-warning-message');
  const messageTwo = document.createElement('p');
  messageTwo.innerHTML = 'This can not be undone!';

  modalInput.appendChild(message);
  modalInput.appendChild(messageTwo);

  const buttonHolder = document.createElement('div');
  buttonHolder.setAttribute('id', 'conf-button-holder');

  const confButton = document.createElement('button');
  confButton.setAttribute('class', 'modal-button');
  confButton.setAttribute('type', 'submit');
  confButton.innerHTML = 'Delete';
  confButton.addEventListener('click', () => {
    deleteProject();
    hideProjConfirmModal();
  });
  const denyButton = document.createElement('button');
  denyButton.setAttribute('class', 'modal-button');
  denyButton.setAttribute('type', 'submit');
  denyButton.innerHTML = 'Cancel';
  denyButton.addEventListener('click', () => {
    hideProjConfirmModal();
  });

  buttonHolder.appendChild(confButton);
  buttonHolder.appendChild(denyButton);
  // Adding all to form holder
  form.appendChild(formHead);
  form.appendChild(modalInput);
  form.appendChild(buttonHolder);

  // add form to modal
  modal.appendChild(form);

  // Add modal to body, its hidden by default
  document.body.appendChild(modal);
};

export {
  renderProjectModal,
  renderTodoModal,
  renderTodoEditModal,
  renderTodoConfirmModal,
  renderProjConfirmModal,
  displayProjConfirmModal,
  displayProjectModal,
  displayTodoModal,
};
