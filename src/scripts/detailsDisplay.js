export { DetailsDisplay };

const DetailsDisplay = (() => {
  // private functions
  const closeDetails = () => {
    const details = document.querySelector('.details');
    if (details) {
      details.remove();
    };
  }
  const buildHeader = (task) => {
    const title = document.createElement('h2');
    title.className = 'title';
    title.textContent = task.getName();

    const icon = document.createElement('img');
    icon.className = "icon";
    icon.src = require(`../assets/close.svg`);
    icon.addEventListener('click', closeDetails);

    const header = document.createElement('div');
    header.className = 'header';
    header.append(title, icon);

    return header;

  }
  
  // public functions
  const showTaskDetails = (task, options) => {
    closeDetails();

    const header = buildHeader(task);

    const details = document.createElement('div');
    details.id = task.getUuid();
    details.className = 'details';
    details.append(header);

    const body = document.querySelector('body');
    body.append(details);
  }

  return {
    showTaskDetails
  }
})();