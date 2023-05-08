import { DisplaySidebar } from './sidebarDisplay.js';
import { MainDisplay } from './mainDisplay.js';

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

    showTaskList: MainDisplay.showTaskList,
    editTask: MainDisplay.editTask,
    selectTask: MainDisplay.selectTask,
    deselectTask: MainDisplay.deselectTask,
    isTaskSelected: MainDisplay.isTaskSelected,    

    addTaskList: DisplaySidebar.addTaskList,
    editTaskList: DisplaySidebar.editTaskList,
    renameTaskList: DisplaySidebar.renameTaskList,
    selectTaskList: DisplaySidebar.selectTaskList,
    getSelectedTaskList: DisplaySidebar.getSelectedTaskList,
  }
})();