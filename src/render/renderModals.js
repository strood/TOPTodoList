import addProject from '../actions/addProject';
import addTodo from '../actions/addTodo';

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
  const todoMod = document.querySelector('.todo-modal');
  todoMod.style.display = 'block';
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = (event) => {
    if (event.target === todoMod) {
      todoMod.style.display = 'none';
    }
  };
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
  const button = document.createElement('button');
  button.innerHTML = 'Create';
  button.setAttribute('class', 'modal-button');
  button.addEventListener('click', () => {
    addProject(titleInput.value);
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

// Modal for todo creation
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
  const modalInput = document.createElement('div');
  modalInput.setAttribute('class', 'modal-input');
  const titleLabel = document.createElement('h4');
  titleLabel.innerHTML = 'Title:';
  const titleInput = document.createElement('input');
  titleInput.setAttribute('id', 'title-input');
  const button = document.createElement('button');
  button.setAttribute('class', 'modal-button');
  button.innerHTML = 'Create';
  button.addEventListener('click', () => {
    addTodo();
    hideTodoModal();
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

export {
  renderProjectModal,
  renderTodoModal,
  displayProjectModal,
  displayTodoModal,
};
