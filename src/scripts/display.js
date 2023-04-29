export {Display};

const Display = (() => {
  const closeDetails = () => {
    const detailsElement = document.querySelector('.details');
    detailsElement.style.display = 'none';
  }
  const openDetails = () => {
    const detailsElement = document.querySelector('.details');
    detailsElement.style.display = 'flex';
  }
  const selectTask = (task) => {
    const selectedTask = document.querySelector('.task.selected');

    if (selectedTask) {
      selectedTask.classList.remove('selected');
    }

    task.classList.add('selected');
  }

  const deselectTask = (task) => {
    task.classList.remove('selected');
  }

  const isTaskSelected = (task) => {
    const isSelected = task.classList.contains('selected');
    console.log(isSelected);
    return isSelected;
  }
  return {
    closeDetails,
    openDetails,
    selectTask,
    deselectTask,
    isTaskSelected
  }
})();