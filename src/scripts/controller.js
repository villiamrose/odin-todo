import { TaskList } from "./tasklist.js";
import { Task } from './task.js';
import { Display } from "./display.js";
import { SidebarController } from "./sidebarController.js";

export { Controller }

const Controller = (() => {
  // private variables
  let selectedTaskList = null;
  let selectedTask = null;
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

    const doneTask = Task('Task 1');
    doneTask.setIsDone(true);

    list[0].addTask(doneTask);
    list[0].addTask(Task('Task 2'));
    list[2].addTask(Task('Task 3'));

    userTaskLists = list;

    return list;
  }

  const initializeTaskLists = () => {
    const autoTaskLists = loadAutoTaskLists();
    autoTaskLists.forEach(taskList => {
      const icon = taskList.getName().toLowerCase();
      const options = {
        icon: icon, 
        readOnly: true,
        selectTaskListHandler: SidebarController.selectTaskListHandler,
        editTaskListHandler: SidebarController.editTaskListHandler,
        saveTaskListHandler: SidebarController.saveTaskListHandler
      };
      Display.addTaskList(taskList, options);
    });

    const userTaskLists = loadUserTaskLists();
    userTaskLists.forEach(taskList => {
      const options = {
        icon: 'list', 
        selectTaskListHandler: SidebarController.selectTaskListHandler,
        editTaskListHandler: SidebarController.editTaskListHandler,
        saveTaskListHandler: SidebarController.saveTaskListHandler
      };
      Display.addTaskList(taskList, options);
    });
  }

  const getTaskListByUuid = (uuid) => {
    const taskLists = [].concat(autoTaskLists, userTaskLists);
    const taskList = taskLists.find(item => item.getUuid() === uuid);
    return taskList
  }

  const isUserTaskList = (taskList) => {
    let isUserTaskList = false;
    
    userTaskLists.forEach(item => {
      if (item.getUuid() === taskList.getUuid()) {
        isUserTaskList = true;
      }
    });

    return isUserTaskList;
  }

  // public functions 
  const getUserTaskLists = () => userTaskLists;
  const getSelectedTaskList = () => selectedTaskList;
  const getSelectedTask = () => selectedTask;

  const setSelectedTaskList = (taskList) => {
    selectedTaskList = taskList;
  }

  const setSelectedTask = (task) => {
    selectedTask = task;
  }

  const addTaskList = (taskList) => {
    userTaskLists.push(taskList);
  }

  const initialize = () => {
    const options = {
      addTaskListHandler: SidebarController.addTaskListHandler
    };
    Display.initialize(options);
    
    initializeTaskLists();

    const state = {
      isUserTaskList,
      getTaskListByUuid,
      addTaskList,
      setSelectedTaskList,
      setSelectedTask,
      getSelectedTaskList,
      getSelectedTask,
      getUserTaskLists
    };
    SidebarController.initialize(state);
  }

  return {
    initialize
  }
})();