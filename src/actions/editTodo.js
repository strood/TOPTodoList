const editTodo = (todo) => {
  const loadedTodo = JSON.parse(localStorage.getItem(`${todo.id}`));
  console.log(loadedTodo);
  // Open modal with todos info filled into values, same modal as create
};

export default editTodo;
