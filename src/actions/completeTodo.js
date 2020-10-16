import updateTodo from './updateTodo';

const completeTodo = (todo) => {
  const loadedTodo = JSON.parse(localStorage.getItem(`${todo.id}`));
  loadedTodo.completed = !loadedTodo.completed;
  updateTodo(loadedTodo);
};

export default completeTodo;
