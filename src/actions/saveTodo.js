const saveTodo = (todo) => {
  // String and save todo under its UID
  localStorage.setItem(`${todo.id}`, JSON.stringify(todo));
  // Add todo to current active project so it is linked
  window.ACTIVE_PROJECT.addTodo(todo);
};

export default saveTodo;
