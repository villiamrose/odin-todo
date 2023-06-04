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
  const isTaskDueToday = (task) => {
    const dueDate = task.getDueDate();
    if (dueDate) {
      const today = new Date();
      const year = dueDate.getFullYear() === today.getFullYear();
      const month = dueDate.getMonth() === today.getMonth()
      const day = dueDate.getDate() === today.getDate();
      return year && month && day;
    } else {
      return false;
    }
  }

  const todayLoader = () => {
    const tasks = [];
    userTaskLists.forEach(taskList => {
      taskList.getTasks().forEach(task => {
        if (isTaskDueToday(task)) {
          tasks.push(task);
        }
      });
    });
    return tasks;
  }

  const importantLoader = () => {
    const tasks = [];
    userTaskLists.forEach(taskList => {
      taskList.getTasks().forEach(task => {
        if (task.getIsImportant()) {
          tasks.push(task);
        }
      });
    });
    return tasks;
  }

  const tasksLoader = () => {
    const tasks = [];
    userTaskLists.forEach(taskList => {
      taskList.getTasks().forEach(task => {
        tasks.push(task);
      });
    });
    return tasks;
  }
  
  const loadAutoTaskLists = () => {
    const todayTaskList = TaskList('Today');
    todayTaskList.setTaskLoader(todayLoader);

    const importantTaskList = TaskList('Important');
    importantTaskList.setTaskLoader(importantLoader);

    const tasksTaskList = TaskList('Tasks');
    tasksTaskList.setTaskLoader(tasksLoader);

    const list = [
      todayTaskList,
      importantTaskList,
      tasksTaskList
    ];

    autoTaskLists = list;

    return list;
  }

  const taskReviver = (value) => {
    const task = Task(value.name);
    task.setUuid(value.uuid);
    task.setTaskListUuid(value.taskListUuid);
    task.setIsDone(value.isDone);
    task.setIsImportant(value.isImportant);
    task.setNotes(value.notes);
    task.setCreated(new Date(value.created));
    task.setUpdated(new Date(value.updated));
    if (value.dueDate) {
      task.setDueDate(new Date(value.dueDate));
    }
    return task;
  }

  const taskListReviver = (value) => {
    const taskList = TaskList(value.name);
    taskList.setUuid(value.uuid);
    taskList.setCreated(new Date(value.created));
    taskList.setUpdated(new Date(value.updated));
    value.tasks.forEach(task => {
      taskList.addTask(taskReviver(task));
    })
    return taskList;
  }

  const loadUserTaskLists = () => {
    const storedValues = localStorage.getItem('userTaskLists');
    if (storedValues) {
      const parsedValues = JSON.parse(storedValues);
      const list = parsedValues.map(value => taskListReviver(value));
      return list;
    } else {
      return [];
    }
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

    userTaskLists = loadUserTaskLists();

    userTaskLists.forEach(taskList => {
      const options = {
        icon: 'list', 
        selectTaskListHandler: SidebarController.selectTaskListHandler,
        editTaskListHandler: SidebarController.editTaskListHandler,
        saveTaskListHandler: SidebarController.saveTaskListHandler
      };
      Display.addTaskList(taskList, options);
    });

    for (let i = 0; i < autoTaskLists.length; i++) {
      const taskList = autoTaskLists[i];
      taskList.loadTasks();
      if (taskList.getTasks().length || autoTaskLists.length === i+1 ) {
        selectedTaskList = autoTaskLists[i];
        break;
      }
    }
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

  const loadTaskList = (taskList) => {
    if (isUserTaskList(taskList)) {
      return taskList;
    } else {

    }
  }

  const saveUserTaskLists = () => {
    const userTaskListsJson = JSON.stringify(userTaskLists);
    localStorage.setItem('userTaskLists', userTaskListsJson);
  }

  const getAutoTaskLists = () => autoTaskLists;

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
      getUserTaskLists,
      saveUserTaskLists,
      loadTaskList
    };
    SidebarController.initialize(state);
  }

  return {
    initialize
  }
})();