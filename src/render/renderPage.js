import renderProjBar from './renderProjBar';
import renderTodoBar from './renderTodoBar';
import {
  renderTodoModal,
  renderProjectModal,
  renderTodoEditModal,
  renderTodoConfirmModal,
  renderProjConfirmModal,
} from './renderModals';

const renderPage = () => {
  // Grab body element to build on
  const body = document.querySelector('body');

  // Render project bar structure
  renderProjBar(body);

  // Render hidden modal to build new projects
  renderProjectModal();

  // Render todo bar sctructure
  renderTodoBar(body);

  // Render hidden todo modal for adding todos
  renderTodoModal();

  // Render hidden todo edit modal
  renderTodoEditModal();

  // Render hidden confirmation modals
  renderTodoConfirmModal();
  renderProjConfirmModal();
};

export default renderPage;
