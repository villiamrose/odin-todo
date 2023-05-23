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
    showTaskDetails(task);
  }

  const editNotesHandler = (event) => {
    const target = event.currentTarget;
    const value = target.value;
    const task = controller.getSelectedTask();
    task.setNotes(value);
    showTaskDetails(task);
  }

  const markIsDoneHandler = (event) => {

  }

  const markIsImportantHandler = (event) => {

  }

  const deleteHandler = (event) => {

  }

  // public functions
  const initialize = (state) => {
    controller = state;
  }

  const showTaskDetails = (task) => {
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
    Display.hideTaskDetails();
  }

  return {
    initialize,
    showTaskDetails,
    hideTaskDetails
  }
})();