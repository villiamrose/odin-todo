import { TaskList } from "./tasklist.js";
import { Task } from './task.js';
import { Display } from "./display.js";

const Controller = (() => {
  const initialize = () => {
    const taskLists = [
      TaskList('Checklist'),
      TaskList('Payments'),
    ];
    const checklistTasks = [
      Task('Repair bookshelf'),
      Task('Clean couch')
    ];
    const paymentsTasks = [
      Task('Internet bill')
    ];
  
    taskLists[0].addTask(checklistTasks);
    taskLists[1].addTask(paymentsTasks);
  
  
  
    Display.build();
  
    taskLists.forEach(taskList => {
      Display.addTaskList(taskList, {icon: 'list'})
    });
  }

  return {
    initialize
  }
})();

export { Controller }