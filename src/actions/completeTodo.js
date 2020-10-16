import updateTodo from './updateTodo';

const completeTodo = (todo) => {
  const loadedTodo = JSON.parse(localStorage.getItem(`${todo.id}`));
  loadedTodo.completed = !loadedTodo.completed;
  updateTodo(loadedTodo);
  // grab todo-bar and remove todo
  const todoBar = document.querySelector('.todo-bar');
  for (let i = 0; i < todoBar.children.length; i += 1) {
    if (todoBar.children[i].id === loadedTodo.id) {
      todoBar.children[i].style.border = '1px solid green';
    }
  }
};

export default completeTodo;
