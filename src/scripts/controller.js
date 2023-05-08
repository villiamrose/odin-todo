import { TaskList } from "./tasklist.js";
import { Task } from './task.js';
import { Display } from "./display.js";

const Controller = (() => {
  // private variables
  let autoTaskLists = [];
  let userTaskLists = [];

  // private functions
  const loadAutoTaskLists = () => {
    const list = [
      TaskList('Today'),
      TaskList('Important'),
      TaskList('Tasks')
    ];

    autoTaskLists = list;

    return list;
  }

  const loadUserTaskLists = () => {
    const list = [
      TaskList('Checklist'),
      TaskList('Payments'),
      TaskList('Reminders')
    ]

    list[0].addTask(Task('Task 1'));
    list[0].addTask(Task('Task 2'));
    list[2].addTask(Task('Task 3'));

    userTaskLists = list;

    return list;
  }

  const loadTaskLists = () => {
    const autoTaskLists = loadAutoTaskLists();
    autoTaskLists.forEach(taskList => {
      const icon = taskList.getName().toLowerCase();
      const options = {
        icon: icon, 
        selectHandler: selectTaskListHandler,
        editHandler: editTaskListHandler,
        saveHandler: saveTaskListHandler
      };
      Display.addTaskList(taskList, options);
    });

    const userTaskLists = loadUserTaskLists();
    userTaskLists.forEach(taskList => {
      const options = {
        icon: 'list', 
        selectHandler: selectTaskListHandler,
        editHandler: editTaskListHandler,
        saveHandler: saveTaskListHandler
      };
      Display.addTaskList(taskList, options);
    });
  }

  const getTaskListByUuid = (uuid) => {
    const taskLists = [].concat(autoTaskLists, userTaskLists);
    const taskList = taskLists.find(item => item.getUuid() === uuid);
    return taskList
  }

  const addTaskListHandler = (event) => {
    const newTaskList = TaskList('');

    userTaskLists.push(newTaskList);
    const options = {
      icon: 'list',
      editable: true, 
      selectHandler: selectTaskListHandler,
      editHandler: editTaskListHandler,
      saveHandler: saveTaskListHandler
    }
    Display.addTaskList(newTaskList, options);
  }

  const editTaskListHandler = (event) => {
    const target = event.currentTarget;
    const targetUuid = target.id;
    const taskList = userTaskLists.find(item => item.getUuid() === targetUuid);
    if (taskList) {
      Display.editTaskList(taskList);
    }
  }

  const saveTaskListHandler = (event) => {
    const key = event.key;
    if(key === 'Enter' || event.type === 'focusout') {
      const target = event.currentTarget;
      const targetUuid = target.parentNode.id;
      const index = userTaskLists.findIndex(item => item.getUuid() === targetUuid);
      const taskList = userTaskLists[index];
      const name = target.value ? target.value : 'Untitled list';
      taskList.setName(name);
      userTaskLists[index] = taskList;
      Display.renameTaskList(taskList);
      const options = {
        showAction: true,
        addTaskHandler: addTaskHandler
      };
      Display.showTaskListDetails(taskList, options);
    }
  }

  const showTaskListDetails = (taskList) => {
    let isUserTaskList = false;
    userTaskLists.forEach(item => {
      if (item.getUuid() === taskList.getUuid()) {
        isUserTaskList = true;
      }
    });
    const options = {
      showAction: isUserTaskList,
      addTaskHandler: addTaskHandler
    };
    Display.showTaskListDetails(taskList, options);
  }

  const selectTaskListHandler = (event) => {
    const target = event.currentTarget;
    const taskList = getTaskListByUuid(target.id);
    Display.selectTaskList(taskList);
    showTaskListDetails(taskList);
  }

  const editTaskHandler = (event) => {
    const target = event.currentTarget.parentNode;
    console.log(event);
    console.log(target);
    // const taskListUuid = Display.getSelectedTaskList().id;
    // const taskList = userTaskLists.find(item => item.getUuid() === taskListUuid);
    // const taskUuid = target.id;
    // const task = taskList.getTaskByUuid(taskUuid);
    // console.log('yow');
    // Display.editTask(task);
  }

  const addTaskHandler = (event) => {
    const target = event.currentTarget;
    const key = event.key;
    if(key === 'Enter' && target.value) {
      const task = Task(target.value);
      const taskListUuid = Display.getSelectedTaskList().id;
      const index = userTaskLists.findIndex(item => item.getUuid() === taskListUuid);
      const taskList = userTaskLists[index];
      taskList.addTask(task);
      userTaskLists[index] = taskList;
      showTaskListDetails(taskList);
    }
  }

  // public functions 
  const initialize = () => {
    const options = {
      addTaskListHandler: addTaskListHandler
    }
    Display.initialize(options);
    loadTaskLists();
  }

  return {
    initialize
  }
})();

export { Controller }