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
  // Holder
  const modalInput = document.createElement('div');
  modalInput.setAttribute('class', 'modal-input');

  // Input Labels
  const titleLabel = document.createElement('h4');
  const descLabel = document.createElement('h4');
  const prioLabel = document.createElement('h4');
  const noteLabel = document.createElement('h4');
  const tagsLabel = document.createElement('h4');
  const dueLabel = document.createElement('h4');

  // Label text
  titleLabel.innerHTML = 'Title:';
  descLabel.innerHTML = 'Description:';
  prioLabel.innerHTML = 'Priority:';
  noteLabel.innerHTML = 'Notes:';
  tagsLabel.innerHTML = 'Tags:';
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
  const noteInput = document.createElement('input');
  const tagsInput = document.createElement('input');
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
  tagsInput.setAttribute('id', 'tags-input');
  dueInput.setAttribute('id', 'due-input');

  const button = document.createElement('button');
  button.setAttribute('class', 'modal-button');
  button.innerHTML = 'Create';
  button.addEventListener('click', () => {
    addTodo(titleInput.value, descInput.value, lowPrioInput.value,
      noteInput.value, dueInput.value, tagsInput.value);
    hideTodoModal();
  });
  modalInput.appendChild(titleLabel);
  modalInput.appendChild(titleInput);
  modalInput.appendChild(descLabel);
  modalInput.appendChild(descInput);
  modalInput.appendChild(prioLabel);
  modalInput.appendChild(lowPrioInput);
  modalInput.appendChild(medPrioInput);
  modalInput.appendChild(highPrioInput);
  modalInput.appendChild(noteLabel);
  modalInput.appendChild(noteInput);
  modalInput.appendChild(dueLabel);
  modalInput.appendChild(dueInput);
  modalInput.appendChild(tagsLabel);
  modalInput.appendChild(tagsInput);

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
