import { TaskList } from "./tasklist.js";
import { Display } from "./display.js";
import { MainController } from "./mainController.js";

export { SidebarController }

const SidebarController = (() => {
  // private variables
  let controller = null;

  // public functions 
  const addTaskListHandler = (event) => {
    const newTaskList = TaskList('');
    userTaskLists.push(newTaskList);
    const options = {
      icon: 'list',
      editable: true, 
      selectHandler: selectTaskListHandler,
      editHandler: editTaskListHandler,
      saveHandler: saveTaskListHandler
    }
    Display.addTaskList(newTaskList, options);
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

      Display.renameTaskList(taskList);
      controller.saveTaskList(taskList);

      const options = {
        showAction: true,
        addTaskHandler: MainController.addTaskHandler
      };
      Display.showTaskList(taskList, options);
    }
  }

  const selectTaskListHandler = (event) => {
    const target = event.currentTarget;    
    const taskList = controller.getTaskListByUuid(target.id);
    
    controller.setSelectedTaskList(taskList);
    Display.selectTaskList(taskList);
    MainController.showTaskList(taskList);
  }

  const initialize = (state) => {
    MainController.initialize(state);

    controller = state;
  }

  return {
    initialize,
    addTaskListHandler,
    selectTaskListHandler,
    editTaskListHandler,
    saveTaskListHandler
  }
})();