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
      showTaskList(taskList);
    }
  }

  const editTaskHandler = (event) => {
    const target = event.currentTarget.parentNode;
    const selectedTaskList = controller.getSelectedTaskList();
    const task = selectedTaskList.getTaskByUuid(target.id);
    Display.editTask(task);
  }

  const saveTaskHandler = (event) => {
    const targetDisplay = event.target.style.display;
    if(event.key === 'Enter' || (event.type === 'focusout' && targetDisplay !== 'none')) {
      const target = event.currentTarget;
      const taskListUuid = target.parentNode.id;
      const selectedTaskList = controller.getSelectedTaskList();
      const task = selectedTaskList.getTaskByUuid(taskListUuid);
      
      const name = target.value ? target.value : 'Untitled task';
      task.setName(name);
      Display.renameTask(task);
    }
  }

  const markTaskHandler = (event) => {
    const target = event.currentTarget.parentNode;
    const taskListUuid = target.id;
    const selectedTaskList = controller.getSelectedTaskList();
    const task = selectedTaskList.getTaskByUuid(taskListUuid);
    const isDone = !task.getIsDone();
    task.setIsDone(isDone);

    showTaskList(selectedTaskList)

  }

  // public functions 
  const showTaskList = (taskList) => {
    const isUserTaskList = controller.isUserTaskList(taskList);
    const options = {
      showAction: isUserTaskList,
      editTaskHandler: editTaskHandler,
      addTaskHandler: addTaskHandler,
      saveTaskHandler: saveTaskHandler,
      markTaskHandler: markTaskHandler
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