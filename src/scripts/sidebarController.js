import { TaskList } from "./tasklist.js";
import { Display } from "./display.js";
import { MainController } from "./mainController.js";

export { SidebarController }

const SidebarController = (() => {
  // private variables
  let controller = null;

  const selectTaskList = (taskList) => {
    controller.setSelectedTask(null);
    controller.setSelectedTaskList(taskList);
    Display.selectTaskList(taskList);
    MainController.showTaskList(taskList);
  }

  // public functions 
  const addTaskListHandler = (event) => {
    const taskList = TaskList('');
    controller.addTaskList(taskList);
    controller.setSelectedTaskList(taskList);
    
    const options = {
      icon: 'list',
      showInput: true, 
      selectTaskListHandler: selectTaskListHandler,
      editTaskListHandler: editTaskListHandler,
      saveTaskListHandler: saveTaskListHandler
    }
    Display.addTaskList(taskList, options);
    
  }

  const selectTaskListHandler = (event) => {
    const target = event.currentTarget;    
    const taskList = controller.getTaskListByUuid(target.id);
    
    selectTaskList(taskList);
  }

  const editTaskListHandler = (event) => {
    const targetUuid = event.currentTarget.id;
    const taskList = controller.getTaskListByUuid(targetUuid);
    Display.editTaskList(taskList);
  }

  const saveTaskListHandler = (event) => {
    const targetDisplay = event.target.style.display;
    if(event.key === 'Enter' || (event.type === 'focusout' && targetDisplay !== 'none')) {
      const target = event.currentTarget;
      const taskListUuid = target.parentNode.id;
      
      const taskList = controller.getTaskListByUuid(taskListUuid);
      const name = target.value ? target.value : 'Untitled list';
      taskList.setName(name);

      controller.saveUserTaskLists();

      Display.renameTaskList(taskList);
      MainController.showTaskList(taskList);
    }
  }

  const initialize = (state) => {
    controller = state;
    MainController.initialize(state);
    selectTaskList(controller.getSelectedTaskList());
    // MainController.showTaskList(controller.getUserTaskLists()[0]);
  }

  return {
    initialize,
    addTaskListHandler,
    selectTaskListHandler,
    editTaskListHandler,
    saveTaskListHandler
  }
})();