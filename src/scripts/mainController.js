import { Task } from './task.js';
import { Display } from "./display.js";
import { DetailsController } from "./detailsController.js";

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
      controller.saveUserTaskLists();
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
      controller.saveUserTaskLists();
      
      DetailsController.showTaskDetails(task);
      Display.renameTask(task);
    }
  }

  const markTaskHandler = (event) => {
    const target = event.currentTarget.parentNode;
    const taskUuid = target.id;
    const selectedTaskList = controller.getSelectedTaskList();
    const task = selectedTaskList.getTaskByUuid(taskUuid);
    const isDone = !task.getIsDone();
    task.setIsDone(isDone);
    controller.saveUserTaskLists();

    if (task.getIsDone()) {
      DetailsController.showTaskDetails(task);
    } else {
      DetailsController.hideTaskDetails();
    }

    showTaskList(selectedTaskList)
  }

  const selectTaskHandler = (event) => {
    const taskUuid = event.currentTarget.id;
    const selectedTaskList = controller.getSelectedTaskList();
    const task = selectedTaskList.getTaskByUuid(taskUuid);
    const selectedTask = controller.getSelectedTask();

    if (selectedTask && selectedTask.getUuid() === task.getUuid()) {
      DetailsController.hideTaskDetails();
    } else {
      DetailsController.showTaskDetails(task);
    }
  }

  // public functions 
  const showTaskList = (taskList) => {
    const isUserTaskList = controller.isUserTaskList(taskList);
    const options = {
      showAction: isUserTaskList,
      editTaskHandler: editTaskHandler,
      addTaskHandler: addTaskHandler,
      saveTaskHandler: saveTaskHandler,
      markTaskHandler: markTaskHandler,
      selectTaskHandler: selectTaskHandler
    };
    taskList.loadTasks();
    Display.showTaskList(taskList, options);
  }

  const initialize = (state) => {
    controller = state;
    const mcState = Object.assign(state, {showTaskList})
    DetailsController.initialize(mcState);
  }

  return {
    initialize,
    showTaskList,
  }
})();