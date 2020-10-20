import updateTodo from './updateTodo';

const completeTodo = (todo) => {
  const loadedTodo = JSON.parse(localStorage.getItem(`${todo.id}`));
  loadedTodo.completed = !loadedTodo.completed;
  updateTodo(loadedTodo);
  // grab todo-bar and remove todo
  const todoBar = document.querySelector('.todo-bar');
  for (let i = 0; i < todoBar.children.length; i += 1) {
    if (todoBar.children[i].id === loadedTodo.id) {
      // Adjust todoBar component colors accordingly.
      if (loadedTodo.completed) {
        todoBar.children[i].style.border = '3px solid green';
        todoBar.children[i].lastElementChild.lastElementChild.style.color = 'green';
      } else {
        todoBar.children[i].style.border = '1px solid black';
        todoBar.children[i].lastElementChild.lastElementChild.style.color = 'black';
      }
    }
  }
};

export default completeTodo;
