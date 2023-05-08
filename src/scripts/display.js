import { DisplaySidebar } from './displaySidebar.js';
import { DisplayMain } from './displayMain.js';

export { Display };

const Display = (() => {
  let isInitialized = false;

  const closeDetails = () => {
    const details = document.querySelector('.details');
    details.style.display = 'none';
  }
  const openDetails = () => {
    const details = document.querySelector('.details');
    details.style.display = 'flex';
  }
  const initialize = (options) => {
    if (!isInitialized) {
      isInitialized = true;
      DisplaySidebar.buildSidebar(options);
    }
  }

  return {
    initialize: initialize,
    closeDetails: closeDetails,
    openDetails: openDetails,

    showTaskList: DisplayMain.showTaskList,
    editTask: DisplayMain.editTask,
    selectTask: DisplayMain.selectTask,
    deselectTask: DisplayMain.deselectTask,
    isTaskSelected: DisplayMain.isTaskSelected,    

    addTaskList: DisplaySidebar.addTaskList,
    editTaskList: DisplaySidebar.editTaskList,
    renameTaskList: DisplaySidebar.renameTaskList,
    selectTaskList: DisplaySidebar.selectTaskList,
    getSelectedTaskList: DisplaySidebar.getSelectedTaskList,
  }
})();