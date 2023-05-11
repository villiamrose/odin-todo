export { MainDisplay };

const MainDisplay = (() => {
  // private functions
  const buildMain = (taskList) => {
    const title = document.createElement('h2');
    title.className = 'title';
    title.textContent = taskList.getName();

    const taskListNode = document.createElement('ul');
    taskListNode.className = 'task-list';

    const actions = document.createElement('div');
    actions.className = 'actions';

    const main = document.createElement('div');
    main.className = 'main';
    main.append(title, taskListNode, actions);

    const body = document.querySelector('body');
    body.append(main);
  }

  const buildTask = (task, options) => {  
    const icon = document.createElement('img');
    icon.className = 'icon';
    icon.src = require(`../assets/radio-button.svg`);
    icon.addEventListener('click', options.markTaskHandler);

    const label = document.createElement('span');
    label.textContent = task.getName();
    label.style.display = 'inline-block';
    label.addEventListener('dblclick', options.editTaskHandler);

    const input = document.createElement('input');
    input.className = 'task';
    input.type = 'text';
    input.value = task.getName();
    input.style.display = 'none';
    input.addEventListener('keypress', options.saveTaskHandler);
    input.addEventListener('focusout', options.saveTaskHandler);
      
    const taskNode = document.createElement('li');
    taskNode.className = 'task';
    taskNode.id = task.getUuid();
    taskNode.append(icon, label, input);

    const taskList = document.querySelector('.main .task-list');
    taskList.append(taskNode);

    if (task.getIsDone()) {
      markTask(task);
    }
  }

  const buildNewTaskAction = (options) => {
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

    const actions = document.querySelector('.main .actions');
    actions.append(action);
  }

  const getTaskNode = (task) => {
    const tasks = Array.from(document.querySelectorAll('.main .task'));
    const taskNode = tasks.find(item => item.id === task.getUuid());
    return taskNode;
  }

  const taskSorter = (a, b) => {
    const check = a.getIsDone() >= b.getIsDone();
    const result = check ? 1 : -1;
    return result;
  }

  // public functions
  const showTaskList = (taskList, options) => {
    const current = document.querySelector('.main');
    const details = document.querySelector('.details');
    if (current) current.remove();
    if (details) details.remove();

    buildMain(taskList);

    const tasks = taskList.getTasks().slice().sort(taskSorter);
    tasks.forEach(task => buildTask(task, options));

    if (options.showAction) {
      buildNewTaskAction(options);
    }
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

  const editTask = (task) => {
    const taskNode = getTaskNode(task);

    if (!taskNode.classList.contains('done')) {
      const label = taskNode.querySelector('span');
      label.style.display = 'none';

      const input = taskNode.querySelector('input');
      input.style.display = 'inline-block';
      input.focus();
    } 
  }

  const renameTask = (task) => {
    const taskNode = getTaskNode(task);

    const input = taskNode.querySelector('input');
    input.value = task.getName();
    input.style.display = 'none';

    const label = taskNode.querySelector('span');
    label.textContent = task.getName();
    label.style.display = 'inline';
  }

  const markTask = (task) => {
    const taskNode = getTaskNode(task);
    taskNode.classList.add('done');

    const checkMark = taskNode.querySelector('.mark');
    if (!checkMark) {
      const mark = document.createElement('hr');
      mark.className = 'mark';
      taskNode.append(mark);
    }
  }

  const unmarkTask = (task) => {
    const taskNode = getTaskNode(task);
    taskNode.classList.remove('done');

    const mark = taskNode.querySelector('.mark');
    if (mark) {
      mark.remove();
    }
  }

  return {
    showTaskList,
    editTask,
    renameTask,
    selectTask,
    deselectTask,
    isTaskSelected,
    markTask,
    unmarkTask
  }
})();