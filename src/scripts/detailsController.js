import { Display } from "./display.js";

export { DetailsController };

const DetailsController = (() => {
  // private variables
  let controller = null;

  // private functions
  const parseDate = (value) => {
    if (value === null) {
      return null;
    } else {
      const [year, month, day] = value.split('-');
      const date = new Date(year, month - 1, day);
      return date;
    }
  }

  const editDueDateHandler = (event) => {
    const target = event.currentTarget;
    const value = target.value ? target.value : null;
    const dueDate = parseDate(value);
    const task = controller.getSelectedTask();
    task.setDueDate(dueDate);
    controller.saveUserTaskLists();
    showTaskDetails(task);
  }

  const editNotesHandler = (event) => {
    const target = event.currentTarget;
    const value = target.value;
    const task = controller.getSelectedTask();
    task.setNotes(value);
    controller.saveUserTaskLists();
    showTaskDetails(task);
  }

  const markIsDoneHandler = (event) => {
    const task = controller.getSelectedTask();
    const taskList = controller.getSelectedTaskList();
    const isDone = !task.getIsDone();
    task.setIsDone(isDone);
    controller.saveUserTaskLists();
    controller.showTaskList(taskList);
    showTaskDetails(task);
  }

  const markIsImportantHandler = (event) => {
    const task = controller.getSelectedTask();
    const isImportant = !task.getIsImportant();
    task.setIsImportant(isImportant);
    controller.saveUserTaskLists();
    showTaskDetails(task);
  }

  const deleteHandler = (event) => {
    const task = controller.getSelectedTask();
    const taskListUuid = task.getTaskListUuid();
    const taskList = controller.getTaskListByUuid(taskListUuid);
    const selectedTaskList = controller.getSelectedTaskList();
    taskList.deleteTask(task);
    selectedTaskList.deleteTask(task);
    controller.saveUserTaskLists();
    controller.showTaskList(selectedTaskList);
    hideTaskDetails();
  }

  // public functions
  const initialize = (state) => {
    controller = state;
  }

  const showTaskDetails = (task) => {
    controller.setSelectedTask(task);
    const options = {
      editDueDateHandler: editDueDateHandler,
      editNotesHandler: editNotesHandler,
      markIsDoneHandler: markIsDoneHandler,
      markIsImportantHandler: markIsImportantHandler,
      deleteHandler: deleteHandler
    };

    Display.showTaskDetails(task, options);
  }

  const hideTaskDetails = () => {
    controller.setSelectedTask(null);
    Display.hideTaskDetails();
  }

  return {
    initialize,
    showTaskDetails,
    hideTaskDetails
  }
})();