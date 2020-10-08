const saveTodo = (todo) => {
  localStorage.setItem(`${todo.id}`, JSON.stringify(todo));
};

export default saveTodo;
