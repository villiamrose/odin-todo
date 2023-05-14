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

  const buildDuedate = (task) => {
    const label = document.createElement('label');
    label.htmlFor = 'duedate';
    label.textContent = 'Due date ';

    const input = document.createElement('input');
    input.id = 'duedate';
    input.name = 'duedate';
    input.type = 'datetime-local';

    const row = document.createElement('row');
    row.append(label, input);

    return row;
  }

  const buildNotes = (task) => {
    const label = document.createElement('p');
    label.textContent = 'Notes';
  
    const textArea = document.createElement('textarea');
    textArea.id = 'notes';
    textArea.name = 'notes';
    textArea.cols = '30';
    textArea.rows = '15';

    const container = document.createElement('label');
    container.className = 'notes';
    container.htmlFor = 'notes';
    container.append(label, textArea);

    return container;
  }

  const buildUpdated = (task) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = task.getUpdated().toLocaleDateString('en-US', options);
    const date = document.createElement('span');
    date.id = 'updated';
    date.textContent = formattedDate;

    const updated = document.createElement('p');
    updated.textContent = 'Updated on ';
    updated.append(date);

    const container = document.createElement('div');
    container.className = 'updated';
    container.append(updated);

    return container;
  }
  
  // public functions
  const showTaskDetails = (task, options) => {
    closeDetails();

    const header = buildHeader(task);
    const dueDate = buildDuedate(task);
    const notes = buildNotes(task);
    const updated = buildUpdated(task);

    const details = document.createElement('div');
    details.id = task.getUuid();
    details.className = 'details';
    details.append(header, dueDate, notes, updated);

    const body = document.querySelector('body');
    body.append(details);
  }

  return {
    showTaskDetails
  }
})();