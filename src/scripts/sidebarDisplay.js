export { SidebarDisplay };

const SidebarDisplay = (() => {
  // private functions
  const buildNewListAction = (options) => {
    const icon = document.createElement('img');
    icon.className = 'icon';
    icon.src = require(`../assets/add.svg`);

    const name = document.createElement('span');
    name.textContent = 'New list';

    const action = document.createElement('li');
    action.className = 'action';
    action.id = 'add-list';
    action.addEventListener('click', options.addTaskListHandler)
    action.append(icon, name);

    return action;
  }

  const focusInput = (node) => {
    const input = node.querySelector('input');
    input.focus();
  }

  const selectTaskList = (taskList) => {
    const selected = document.querySelector('.lists .selected');
    if (selected) {
      selected.classList.remove('selected');
    }
    
    const taskListNodes = Array.from(document.querySelectorAll('.lists .list'));
    
    const taskListNode = taskListNodes.find(item => item.id === taskList.getUuid());
    taskListNode.classList.add('selected');
  }

  const buildTaskList = (taskList, options) => {
    const icon = document.createElement('img');
    icon.className = 'icon';
    icon.src = require(`../assets/${options.icon}.svg`);

    const name = document.createElement('span');
    name.className = 'label';
    name.textContent = taskList.getName();

    const nameInput = document.createElement('input');
    nameInput.className = 'list';
    nameInput.value = taskList.getName();
    nameInput.placeholder = 'Untitled list';
    nameInput.addEventListener('focusout', options.saveTaskListHandler);
    nameInput.addEventListener('keypress', options.saveTaskListHandler);

    const deleteIcon = document.createElement('img');
    deleteIcon.classList.add('icon', 'lighten');
    deleteIcon.src = require(`../assets/delete.svg`);
    deleteIcon.addEventListener('click', options.deleteTaskListHandler);

    if(options.showInput) {
      nameInput.style.display = 'span';
      name.style.display = 'none';
    } else {
      nameInput.style.display = 'none';
      name.style.display = 'inline-block';
    }

    const list = document.createElement('li');
    list.className = 'list';
    list.id = taskList.getUuid();
    list.addEventListener('click', options.selectTaskListHandler);
    list.append(icon, name);

    if (!options.readOnly) {
      list.addEventListener('dblclick', options.editTaskListHandler);
      list.append(nameInput, deleteIcon);
    }

    return list;
  }

  // public functions
  const buildSidebar = (options) => {
    const title = document.createElement('h2');
    title.className = 'title';
    title.textContent = 'To-do list';

    const lists = document.createElement('ul');
    lists.className = 'lists';

    const newListAction = buildNewListAction(options);

    const actions = document.createElement('ul');
    actions.className = 'actions';
    actions.append(newListAction);
    
    const navigation = document.createElement('div');
    navigation.className = 'navigation';
    navigation.append(title, lists, actions);

    const body = document.querySelector('body');
    body.prepend(navigation);
  }

  const addTaskList = (taskList, options) => {
    const taskListNode = buildTaskList(taskList, options);
    
    const lists = document.querySelector('.navigation .lists');
    lists.append(taskListNode);
    
    if (options.showInput) {
      selectTaskList(taskList);
      focusInput(taskListNode);
    }
  }

  const deleteTaskList = (taskList) => {
    const taskLists = Array.from(document.querySelectorAll('.navigation .list'));
    const taskListNode = taskLists.find(item => item.id === taskList.getUuid());
    console.log('yos');
    taskListNode.remove();
  }

  const editTaskList = (taskList) => {
    const taskLists = Array.from(document.querySelectorAll('.navigation .list'));

    const taskListNode = taskLists.find(item => item.id === taskList.getUuid());
    
    const label = taskListNode.querySelector('span');
    label.style.display = 'none';

    const input = taskListNode.querySelector('input');
    input.style.display = 'inline-block';

    focusInput(taskListNode);
  }

  const renameTaskList = (taskList) => {
    const taskListNodes = Array.from(document.querySelectorAll('.navigation .list'));

    const taskListNode = taskListNodes.find(item => item.id === taskList.getUuid());

    const input = taskListNode.querySelector('input');
    input.value = taskList.getName();
    input.style.display = 'none';

    const label = taskListNode.querySelector('span');
    label.textContent = taskList.getName();
    label.style.display = 'inline';
  }

  const getSelectedTaskList = () => {
    return document.querySelector('.list.selected');
  }

  return {
    buildSidebar,
    addTaskList,
    deleteTaskList,
    editTaskList,
    renameTaskList,
    selectTaskList,
    getSelectedTaskList
  }
})();