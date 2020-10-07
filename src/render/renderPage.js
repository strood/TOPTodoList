import renderProjBar from './renderProjBar';
import renderTodoBar from './renderTodoBar';

const renderPage = () => {
  // Grab body element to build on
  const body = document.querySelector('body');

  // Render project bar structure
  renderProjBar(body);

  // Render todo bar sctructure
  renderTodoBar(body);
};

export default renderPage;
