const editTodo = (todo) => {
  const todoMod = document.querySelector('.todo-edit-modal');
  todoMod.style.display = 'block';

  const idInput = document.getElementById('edit-id-input');
  const titleInput = document.getElementById('edit-title-input');
  const descInput = document.getElementById('edit-desc-input');
  const noteInput = document.getElementById('edit-note-input');

  // const titleInput = document.querySelector('#title-input');
  const dueInput = document.getElementById('edit-due-input');
  const lowPrioInput = document.getElementById('edit-low-prio');
  const medPrioInput = document.getElementById('edit-med-prio');
  const highPrioInput = document.getElementById('edit-high-prio');

  idInput.value = todo.id;
  titleInput.value = todo.title;
  descInput.value = todo.description;
  switch (todo.priority) {
    case '0':
      lowPrioInput.checked = true;
      break;
    case '1':
      medPrioInput.checked = true;
      break;
    case '2':
      highPrioInput.checked = true;
      break;
    default:
      lowPrioInput.checked = true;
  }

  noteInput.value = todo.notes;
  dueInput.value = todo.due.split('-').slice(0, 3).join('-');
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = (event) => {
    if (event.target === todoMod) {
      todoMod.style.display = 'none';
    }
  };
};

export default editTodo;
