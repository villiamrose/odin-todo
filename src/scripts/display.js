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
  const initialize = (options) => {
    if (!isInitialized) {
      isInitialized = true;
      buildSidebar(options);
    }
  }
  const buildSidebarAction = (label, options) => {
    const icon = document.createElement('img');
    icon.className = 'icon';
    icon.src = require(`../assets/add.svg`);

    const name = document.createElement('span');
    name.textContent = label;

    const action = document.createElement('li');
    action.className = 'action';
    action.id = 'add-list';
    action.addEventListener('click', options.addTaskListHandler)
    action.append(icon, name);

    return action;

  }
  const buildSidebar = (options) => {
    const title = document.createElement('h2');
    title.className = 'title';
    title.textContent = 'To-do list';

    const lists = document.createElement('ul');
    lists.className = 'lists';

    const newListAction = buildSidebarAction('New list', options);

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
      selectTaskList(taskList);
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
    nameInput.addEventListener('focusout', options.saveHandler);
    nameInput.addEventListener('keypress', options.saveHandler);

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
    list.addEventListener('dblclick', options.editHandler);
    list.addEventListener('click', options.selectHandler);
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
    if (selected) selected.classList.remove('selected');
    const taskListElements = Array.from(document.querySelectorAll('.lists .list'));
    const element = taskListElements.find(item => item.id === taskList.getUuid());
    element.classList.add('selected');
  }

  const buildTaskListDetails = (taskList) => {

    const title = document.createElement('h2');
    title.className = 'title';
    title.textContent = taskList.getName();

    const taskListElmnt = document.createElement('ul');
    taskListElmnt.className = 'task-list';

    const main = document.createElement('div');
    main.className = 'main';
    main.append(title, taskListElmnt);

    const body = document.querySelector('body');
    body.append(main);
  }

  const buildTask = (task, options) => {  
    const icon = document.createElement('img');
    icon.className = 'icon';
    icon.src = require(`../assets/radio-button.svg`);

    const label = document.createElement('span');
    label.textContent = task.getName();
    label.style.display = 'inline-block';
    label.addEventListener('dblclick', options.eventHandler);

    const input = document.createElement('input');
    input.className = 'task';
    input.type = 'text';
    input.value = task.getName();
    input.style.display = 'none';
    input.addEventListener('keypress', options.eventHandler);
      
    const taskElmnt = document.createElement('li');
    taskElmnt.className = 'task';
    taskElmnt.id = task.getUuid();
    taskElmnt.append(icon, label, input);

    const taskList = document.querySelector('.main .task-list');
    taskList.append(taskElmnt);

  }

  const buildTaskListAction = (options) => {
    const icon = document.createElement('img');
    icon.className = 'icon';

    const input = document.createElement('input');
    input.className = 'add task';
    input.type = 'text';
    input.placeholder = 'Add a task';
    input.addEventListener('keypress', options.addTaskHandler);

    const action = document.createElement('div');
    action.className = 'action';
    action.append(icon, input);

    const actions = document.createElement('div');
    actions.className = 'actions';
    actions.append(action);

    const main = document.querySelector('.main');
    main.append(actions);
  }

  const showTaskListDetails = (taskList, options) => {
    const current = document.querySelector('.main');
    const details = document.querySelector('.details');
    if (current) current.remove();
    if (details) details.remove();

    buildTaskListDetails(taskList);

    taskList.getTasks().forEach(task => buildTask(task, options));

    if (options.showAction) {
      buildTaskListAction(options);
    }
  }

  const getSelectedTaskList = () => {
    return document.querySelector('.list.selected');
  }

  const editTask = (task) => {
    const tasks = Array.from(document.querySelectorAll('.main .task'));
    const taskElmnt = tasks.find(item => item.id === task.getUuid());
    const label = taskElmnt.querySelector('span');
    const input = taskElmnt.querySelector('input');
    console.log('hello');
    label.style.display = 'none';
    input.style.display = 'inline-block';
    input.focus();
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
    selectTaskList,
    showTaskListDetails,
    getSelectedTaskList,
    editTask
  }
})();