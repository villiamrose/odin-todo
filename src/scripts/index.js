import '../styles/style.css';
import { Controller } from './controller.js';


Controller.initialize();



// const tasks = document.querySelectorAll('.task-list .task');
// tasks.forEach(task => {
//   task.addEventListener("click", () => {
//     const showTaskList = Display.isTaskSelected(task);
//     if (isTaskSelected) {
//       Display.deselectTask(task);
//       Display.closeDetails();
//     } else {
//       Display.selectTask(task);
//       Display.openDetails();
//     }
//   })
// });