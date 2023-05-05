export { Display };

const Display = (() => {
  let isInitialized = false;

  const closeDetails = () => {
    const details = document.querySelector('.details');
    details.style.display = 'none';
  }
  const openDetails = () => {
    const details = document.querySelector('.details');
    details.style.display = 'flex';
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
  const initialize = (eventHandler) => {
    if (!isInitialized) {
      isInitialized = true;
      buildSidebar(eventHandler);
    }
  }
  const buildSidebarAction = (label, options) => {
    const icon = document.createElement('img');
    icon.className = 'icon';
    icon.src = require(`../assets/${options.icon}.svg`);

    const name = document.createElement('span');
    name.textContent = label;

    const action = document.createElement('li');
    action.className = 'action';
    action.id = 'add-list';
    action.addEventListener('click', options.eventHandler)
    action.append(icon, name);

    return action;

  }
  const buildSidebar = (eventHandler) => {
    const title = document.createElement('h2');
    title.className = 'title';
    title.textContent = 'To-do list';

    const lists = document.createElement('ul');
    lists.className = 'lists';

    const newListActionOption = {
      icon: 'add', 
      eventHandler: eventHandler
    };
    const newListAction = buildSidebarAction('New list', newListActionOption);
    
    const actions = document.createElement('ul');
    actions.className = 'actions';
    actions.append(newListAction);
    
    const navigation = document.createElement('div');
    navigation.className = 'navigation';
    navigation.append(title, lists, actions);

    const body = document.querySelector('body');
    body.prepend(navigation);
  }
  const focusTaskListInput = (taskList) => {
    const input = taskList.querySelector('input');
    input.focus();
  }
  const addTaskList = (taskList, options) => {
    const taskListElmnt = buildTaskList(taskList, options);
    const lists = document.querySelector('.navigation .lists');
    lists.append(taskListElmnt);
    if (options.editable) {
      selectTaskList(taskListElmnt);
    }
    focusTaskListInput(taskListElmnt);
  }
  const buildTaskList = (taskList, options) => {
    const icon = document.createElement('img');
    icon.className = 'icon';
    icon.src = require(`../assets/${options.icon}.svg`);

    const name = document.createElement('span');
    name.textContent = taskList.getName();

    const nameInput = document.createElement('input');
    nameInput.className = 'list';
    nameInput.value = taskList.getName();
    nameInput.placeholder = 'Untitled list';
    nameInput.addEventListener('focusout', options.eventHandler);
    nameInput.addEventListener('keypress', options.eventHandler);

    if(options.editable) {
      nameInput.style.display = 'span';
      name.style.display = 'none';
    } else {
      nameInput.style.display = 'none';
      name.style.display = 'inline-block';
    }

    const list = document.createElement('li');
    list.className = 'list';
    list.id = taskList.getUuid();
    list.addEventListener('dblclick', options.eventHandler);
    list.addEventListener('click', options.eventHandler);
    list.append(icon, name, nameInput);

    return list;
  }

  const editTaskList = (taskList) => {
    const taskLists = Array.from(document.querySelectorAll('.navigation .list'));
    const taskListElmnt = taskLists.find(item => item.id === taskList.getUuid());
    const label = taskListElmnt.querySelector('span');
    const input = taskListElmnt.querySelector('input');
    label.style.display = 'none';
    input.style.display = 'inline-block';
    input.focus();
  }

  const renameTaskList = (taskList) => {
    const taskLists = Array.from(document.querySelectorAll('.navigation .list'));
    const taskListElmnt = taskLists.find(item => item.id === taskList.getUuid());
    const label = taskListElmnt.querySelector('span');
    const input = taskListElmnt.querySelector('input');
    label.textContent = taskList.getName();
    input.value = taskList.getName();
    label.style.display = 'inline';
    input.style.display = 'none';
  }

  const selectTaskList = (taskList) => {
    const selected = document.querySelector('.navigation .selected');
    if (selected) {
      selected.classList.remove('selected');
    }
    taskList.classList.add('selected');
  }

  return {
    initialize,
    closeDetails,
    openDetails,
    selectTask,
    deselectTask,
    isTaskSelected,
    addTaskList,
    editTaskList,
    renameTaskList,
    selectTaskList
  }
})();