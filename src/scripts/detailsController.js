import { DetailsDisplay } from "./detailsDisplay.js";

export { DetailsController };

const DetailsController = (() => {
  // private variables
  let controller = null;

  // public functions
  const initialize = (state) => {
    controller = state;
  }

  const showTaskDetails = (task) => {
    const options = {};

    DetailsDisplay.showTaskDetails(task, options);
  }

  const hideTaskDetails = () => {
    DetailsDisplay.hideTaskDetails();
  }

  return {
    initialize,
    showTaskDetails,
    hideTaskDetails
  }
})();