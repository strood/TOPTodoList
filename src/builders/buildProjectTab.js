import renderTodos from '../render/renderTodos';

const buildProjectTab = (project) => {
  const holder = document.createElement('div');
  holder.innerHTML = project.title;
  holder.setAttribute('class', 'proj-tab');
  holder.addEventListener('click', () => {
    renderTodos(project);
    window.ACTIVE_PROJECT = project;
  });
  return holder;
};

export default buildProjectTab;
