import { SidebarDisplay } from './sidebarDisplay.js';
import { MainDisplay } from './mainDisplay.js';
import { DetailsDisplay } from './detailsDisplay.js'

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
      SidebarDisplay.buildSidebar(options);
    }
  }

  return {
    initialize: initialize,
    closeDetails: closeDetails,
    openDetails: openDetails,

    showTaskList: MainDisplay.showTaskList,
    editTask: MainDisplay.editTask,
    isTaskSelected: MainDisplay.isTaskSelected,    
    renameTask: MainDisplay.renameTask,
    markTask: MainDisplay.markTask,
    unmarkTask: MainDisplay.unmarkTask,

    addTaskList: SidebarDisplay.addTaskList,
    deleteTaskList: SidebarDisplay.deleteTaskList,
    editTaskList: SidebarDisplay.editTaskList,
    renameTaskList: SidebarDisplay.renameTaskList,
    selectTaskList: SidebarDisplay.selectTaskList,
    getSelectedTaskList: SidebarDisplay.getSelectedTaskList,

    showTaskDetails: DetailsDisplay.showTaskDetails,
    hideTaskDetails: DetailsDisplay.hideTaskDetails
  }
})();