import buildTodoTab from '../builders/buildTodoTab';

const sortController = (sortValue) => {
  // Clear todos from holder
  const todoHolder = document.querySelector('.todo-bar');
  while (todoHolder.firstChild) {
    todoHolder.removeChild(todoHolder.firstChild);
  }
  // Load todos into array to sort
  let todoArr = [];
  for (let i = 0; i < window.ACTIVE_PROJECT.todos.length; i += 1) {
    todoArr.push(JSON.parse(localStorage.getItem(window.ACTIVE_PROJECT.todos[i])));
  }

  // Based on sort option received, sort accordingly
  // Could probably make them look nicer but they all all uniform and make sense
  switch (sortValue) {
    // Priority high->low
    case '1':
      todoArr = todoArr.sort((a, b) => {
        const prioA = Number(a.priority);
        const prioB = Number(b.priority);

        if (prioA < prioB) {
          return 1;
        }
        if (prioA > prioB) {
          return -1;
        }
        return 0;
      });
      break;
    case '2':
    // Priority low->high
      todoArr = todoArr.sort((a, b) => {
        const prioA = Number(a.priority);
        const prioB = Number(b.priority);
        if (prioA < prioB) {
          return -1;
        }
        if (prioA > prioB) {
          return 1;
        }
        // names must be equal
        return 0;
      });

      break;
    case '3':
      // Due earlier->later
      todoArr = todoArr.sort((a, b) => {
        const dueA = a.due;
        const dueB = b.due;
        if (dueA < dueB) {
          return -1;
        }
        if (dueA > dueB) {
          return 1;
        }
        return 0;
      });

      break;
    case '4':
    // Due later->earlier
      todoArr = todoArr.sort((a, b) => {
        const dueA = a.due;
        const dueB = b.due;
        if (dueA < dueB) {
          return 1;
        }
        if (dueA > dueB) {
          return -1;
        }
        return 0;
      });

      break;
    case '5':
      // Created newest->oldest
      todoArr = todoArr.sort((a, b) => {
        const nameA = a.created;
        const nameB = b.created;
        if (nameA < nameB) {
          return 1;
        }
        if (nameA > nameB) {
          return -1;
        }
        return 0;
      });

      break;
    case '6':
      // Created oldest->newest
      todoArr = todoArr.sort((a, b) => {
        const nameA = a.created;
        const nameB = b.created;
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      break;
    case '7':
      // Status complete->todo
      todoArr = todoArr.sort((a, b) => {
        const nameA = a.completed;
        const nameB = b.completed;
        if (nameA < nameB) {
          return 1;
        }
        if (nameA > nameB) {
          return -1;
        }
        return 0;
      });
      break;
    case '8':
      // Status todo->complete
      todoArr = todoArr.sort((a, b) => {
        const nameA = a.completed;
        const nameB = b.completed;

        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      break;
    default:
      todoArr = todoArr.sort();
  }
  // add given projects todos
  for (let i = 0; i < todoArr.length; i += 1) {
    const tab = buildTodoTab(todoArr[i].id);
    todoHolder.appendChild(tab);
  }
  // Fill in message if blank
  if (!todoHolder.children[0]) {
    todoHolder.innerHTML = 'No todos for this project yet, add one with the "+" above';
  }
};

export default sortController;
