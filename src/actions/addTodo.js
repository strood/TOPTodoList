import Todo from '../components/todos';
import saveTodo from './saveTodo';
import renderTodos from '../render/renderTodos';

const addTodo = (title, description, priority, notes, due) => {
  // Make new Todo
  const newTodo = new Todo(title, description, priority, notes, due);

  // Save todo and rerender ACTIVE_PROJECT todos
  saveTodo(newTodo);
  renderTodos(window.ACTIVE_PROJECT);
};

export default addTodo;
