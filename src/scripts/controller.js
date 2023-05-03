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
      Display.addTaskList(taskList, {icon: icon});
    });

    const userTaskLists = loadUserTaskLists();
    userTaskLists.forEach(taskList => {
      Display.addTaskList(taskList, {icon: 'list'});
    });
  }

  const addTaskListHandler = (event) => {
    const newTaskList = TaskList('Untitled list');

    userTaskLists.push(newTaskList);

    Display.addTaskList(newTaskList, {icon: 'list'});
  }

  const clickEventHandler = (event) => {
    const target = event.currentTarget;
    if (target.id === 'add-list') {
      addTaskListHandler(event);
    }
  }

  const eventHandler = (event) => {
    const eventType = event.type;
    if (eventType === 'click') {
      clickEventHandler(event);
    }
  }

  // public functions 
  const initialize = () => {
    Display.initialize(eventHandler);
    loadTaskLists();
  }

  return {
    initialize
  }
})();

export { Controller }