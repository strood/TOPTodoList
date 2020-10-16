const updateTodo = (todo) => {
  // remove todo from storage, store new one
  localStorage.removeItem(`${todo.id}`);
  localStorage.setItem(`${todo.id}`, JSON.stringify(todo));
};

export default updateTodo;
