import renderTodos from '../render/renderTodos';

const buildProjectTab = (project) => {
  const holder = document.createElement('div');
  holder.innerHTML = project.title;
  holder.setAttribute('class', 'proj-tab');
  holder.addEventListener('click', () => {
    window.ACTIVE_PROJECT = project;
    renderTodos(project);
    const projBar = document.getElementsByClassName('proj-tab');
    for (let i = 0; i < projBar.length; i += 1) {
      projBar[i].style.border = '1px solid white';
      projBar[i].style.color = 'black';
    }
    holder.style.border = '1px solid blue';
    holder.style.color = 'blue';
  });
  return holder;
};

export default buildProjectTab;
