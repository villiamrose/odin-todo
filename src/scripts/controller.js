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

    userTaskLists = list;

    return list;
  }

  const loadTaskLists = () => {
    const autoTaskLists = loadAutoTaskLists();
    autoTaskLists.forEach(taskList => {
      const icon = taskList.getName().toLowerCase();
      const options = {
        icon: icon, 
        eventHandler: eventHandler
      };
      Display.addTaskList(taskList, options);
    });

    const userTaskLists = loadUserTaskLists();
    userTaskLists.forEach(taskList => {
      const options = {
        icon: 'list', 
        eventHandler: eventHandler
      };
      Display.addTaskList(taskList, options);
    });
  }

  const newTaskListHandler = (event) => {
    const newTaskList = TaskList('Untitled list');

    userTaskLists.push(newTaskList);
    const options = {
      icon: 'list',
      eventHandler: eventHandler
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

  const renameTaskListHandler = (event) => {
    const target = event.currentTarget;
    const targetUuid = target.parentNode.id;
    const index = userTaskLists.findIndex(item => item.getUuid() === targetUuid);
    const taskList = userTaskLists[index];
    if (taskList) {
      taskList.setName(target.value);
      userTaskLists[index] = taskList;
      Display.renameTaskList(taskList);
      userTaskLists.forEach(item => console.log(item.getName()));
    }
  }

  const clickEventHandler = (event) => {
    const target = event.currentTarget;
    if (target.id === 'add-list') {
      newTaskListHandler(event);
    }
  }

  const dblClickEventHandler = (event) => {
    const target = event.currentTarget;
    if(target.className === 'list') {
      editTaskListHandler(event);
    }
  }

  const focusOutEventHandler = (event) => {
    const target = event.currentTarget;
    if(target.className === 'list') {
      renameTaskListHandler(event);
    }
  }

  const eventHandler = (event) => {
    const eventType = event.type;
    if (eventType === 'click') {
      clickEventHandler(event);
    } else if (eventType === 'dblclick') {
      dblClickEventHandler(event);
    } else if (eventType === 'focusout') {
      focusOutEventHandler(event);
    }
  }

  // public functions 
  const initialize = () => {
    Display.initialize(eventHandler);
    loadTaskLists(eventHandler);
  }

  return {
    initialize
  }
})();

export { Controller }