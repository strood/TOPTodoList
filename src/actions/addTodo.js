import Todo from '../components/todos';
import saveTodo from './saveTodo';
import renderTodos from '../render/renderTodos';

const addTodo = (title, description, priority, notes, due, tags = []) => {
  // Make Todo rom given input
  const newTodo = new Todo(title, description, priority, notes, due, tags);
  // Save todo rand rerender ACTIVE_PROJECT todos
  saveTodo(newTodo);
  renderTodos(window.ACTIVE_PROJECT);
};

export default addTodo;
