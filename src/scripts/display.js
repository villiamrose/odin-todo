export { Display };

const Display = (() => {
  let isNotYetBuilt = true;

  const closeDetails = () => {
    const detailsElement = document.querySelector('.details');
    detailsElement.style.display = 'none';
  }
  const openDetails = () => {
    const detailsElement = document.querySelector('.details');
    detailsElement.style.display = 'flex';
  }
  const selectTask = (task) => {
    const selectedTask = document.querySelector('.task.selected');
    if (selectedTask) {
      selectedTask.classList.remove('selected');
    }
    task.classList.add('selected');
  }
  const deselectTask = (task) => {
    task.classList.remove('selected');
  }
  const isTaskSelected = (task) => {
    const isSelected = task.classList.contains('selected');
    return isSelected;
  }
  const build = () => {
    if (isNotYetBuilt) {
      buildSidebar();

      isNotYetBuilt = false;
    }
  }
  const buildSidebar = () => {

    const titleElement = document.createElement('h2');
    titleElement.className = 'title';
    titleElement.textContent = 'To-do list';

    const listsElement = document.createElement('ul');
    listsElement.className = 'lists';

    const actionsElement = document.createElement('ul');
    actionsElement.className = 'actions';

    
    const navigationElement = document.createElement('div');
    navigationElement.className = 'navigation';
    navigationElement.append(titleElement, listsElement, actionsElement);

    const bodyElement = document.querySelector('body');
    bodyElement.prepend(navigationElement);
  }
  const addTaskList = (taskList, options) => {
    const taskListElement = buildTaskListElement(taskList, options);

    const listsElement = document.querySelector('.navigation .lists');
    listsElement.append(taskListElement);
  }
  const buildTaskListElement = (taskList, options) => {
    const iconElement = document.createElement('img');
    iconElement.className = 'icon';
    console.log(options.icon);
    // iconElement.src = require(`./assets/${options.icon}.svg`);

    const nameElement = document.createElement('span');
    nameElement.textContent = taskList.getName();

    const listElement = document.createElement('li');
    listElement.className = 'list';
    listElement.id = taskList.getUuid();
    listElement.append(iconElement, nameElement);

    return listElement;
  }
  return {
    build,
    closeDetails,
    openDetails,
    selectTask,
    deselectTask,
    isTaskSelected,
    addTaskList
  }
})();