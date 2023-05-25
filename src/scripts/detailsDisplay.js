export { DetailsDisplay };

const DetailsDisplay = (() => {
  // private functions
  const padTo2Digits = (num) => {
    return num.toString().padStart(2, '0');
  }

  const inputDate = (date) => {
    return [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join('-');
  }

  const formatDate = (date) => {
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric', 
      hour: 'numeric', 
      minute: 'numeric' 
    };
    const formattedDate = date.toLocaleString('en-US', options);
    return formattedDate
  }

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

  const buildDuedate = (task, options) => {
    const label = document.createElement('label');
    label.htmlFor = 'duedate';
    label.textContent = 'Due date ';

    const input = document.createElement('input');
    input.id = 'duedate';
    input.name = 'duedate';
    input.type = 'date';
    if (task.getDueDate()) {
      input.value = inputDate(task.getDueDate());
    }
    input.addEventListener('focusout', options.editDueDateHandler);

    const row = document.createElement('row');
    row.append(label, input);

    return row;
  }

  const buildNotes = (task, options) => {
    const label = document.createElement('p');
    label.textContent = 'Notes';
  
    const textArea = document.createElement('textarea');
    textArea.id = 'notes';
    textArea.name = 'notes';
    textArea.cols = '30';
    textArea.rows = '15';
    textArea.value = task.getNotes();
    textArea.addEventListener('focusout', options.editNotesHandler);

    const container = document.createElement('label');
    container.className = 'notes';
    container.htmlFor = 'notes';
    container.append(label, textArea);

    return container;
  }

  const buildUpdated = (task) => {
    const formattedDate = formatDate(task.getUpdated());
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

  const buildActions = (task, options) => {
    const doneIcon = document.createElement('img');
    doneIcon.src = require(`../assets/done.svg`);
    
    const doneLabel = document.createElement('p');
    doneLabel.textContent = 'Done';
    
    const doneContainer = document.createElement('div');
    doneContainer.className = 'action';
    doneContainer.append(doneIcon, doneLabel);
    if (task.getIsDone()) {
      doneContainer.classList.add('selected');
    }
    doneContainer.addEventListener('click', options.markIsDoneHandler);

    const importantIcon = document.createElement('img');
    importantIcon.src = require(`../assets/important.svg`);
    
    const importantLabel = document.createElement('p');
    importantLabel.textContent = 'Important';
    
    const importantContainer = document.createElement('div');
    importantContainer.className = 'action';
    importantContainer.append(importantIcon, importantLabel);
    if (task.getIsImportant()) {
      importantContainer.classList.add('selected');
    }
    importantContainer.addEventListener('click', options.markIsImportantHandler);

    const deleteIcon = document.createElement('img');
    deleteIcon.src = require(`../assets/delete.svg`);
    
    const deleteLabel = document.createElement('p');
    deleteLabel.textContent = 'Delete';
    
    const deleteContainer = document.createElement('div');
    deleteContainer.className = 'action';
    deleteContainer.append(deleteIcon, deleteLabel);
    deleteContainer.addEventListener('click', options.deleteHandler);

    const actions = document.createElement('div');
    actions.className = 'actions';
    actions.append(doneContainer, importantContainer, deleteContainer);

    return actions;
  }

  const buildCreated = (task) => {
    const formattedDate = formatDate(task.getCreated());
    const date = document.createElement('span');
    date.id = 'created';
    date.textContent = formattedDate;

    const created = document.createElement('p');
    created.textContent = 'Created on ';
    created.append(date);

    const container = document.createElement('div');
    container.className = 'created';
    container.append(created);

    return container;
  }
  
  // public functions
  const showTaskDetails = (task, options) => {
    closeDetails();

    const header = buildHeader(task);
    const dueDate = buildDuedate(task, options);
    const notes = buildNotes(task, options);
    const updated = buildUpdated(task);
    const actions = buildActions(task, options);
    const created = buildCreated(task);

    const details = document.createElement('div');
    details.id = task.getUuid();
    details.className = 'details';
    details.append(header, dueDate, notes, updated, actions, created);

    const body = document.querySelector('body');
    body.append(details);
  }

  const hideTaskDetails = () => {
    closeDetails();
  }

  return {
    showTaskDetails,
    hideTaskDetails
  }
})();