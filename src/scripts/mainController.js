import { TaskList } from "./tasklist.js";
import { Task } from './task.js';
import { Display } from "./display.js";

export { MainController }

const MainController = (() => {
  // private variables
  let controller = null;

  // private functions
  const addTaskHandler = (event) => {
    const target = event.currentTarget;
    const key = event.key;

    if(key === 'Enter' && target.value) {
      const task = Task(target.value);
      
      const taskList = controller.getSelectedTaskList();
      taskList.addTask(task);
      
      controller.saveTaskList(taskList);
      showTaskList(taskList);
    }
  }

  const editTaskHandler = (event, msg) => {
    const target = event.currentTarget.parentNode;
    console.log(event);
    console.log(target);
    console.log(msg);
    // const taskListUuid = Display.getSelectedTaskList().id;
    // const taskList = userTaskLists.find(item => item.getUuid() === taskListUuid);
    // const taskUuid = target.id;
    // const task = taskList.getTaskByUuid(taskUuid);
    // console.log('yow');
    // Display.editTask(task);
  }

  // public functions 
  const showTaskList = (taskList) => {
    const isUserTaskList = controller.isUserTaskList(taskList);
    const options = {
      showAction: isUserTaskList,
      editTaskHandler: editTaskHandler,
      addTaskHandler: addTaskHandler
    };
    Display.showTaskList(taskList, options);
  }

  const initialize = (state) => {
    controller = state;
  }

  return {
    initialize,
    showTaskList,

  }
})();