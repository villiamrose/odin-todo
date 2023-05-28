import {v4 as Uuid} from 'uuid';

const Task = (value) => {
  let uuid = Uuid();
  let created = new Date();
  let name = value;
  let updated = new Date();
  let dueDate = null;
  let notes = null;
  let isImportant = false;
  let isDone = false;
  let taskListUuid = null;

  // public functions
  // getters
  const getUuid = () => uuid;
  const getName = () => name;
  const getIsDone = () => isDone;
  const getCreated = () => created;
  const getUpdated = () => updated;
  const getDueDate = () => dueDate;
  const getIsImportant = () => isImportant;
  const getNotes = () => notes;
  const getTaskListUuid = () => taskListUuid;

  // setters
  const setName = (value) => {
    setUpdated();
    name = value;
    return name;
  };
  const setIsDone = (value) => {
    if (typeof value === 'boolean') {
      setUpdated();
      isDone = value;
      return isDone;
    }
  }
  const setIsImportant = (value )=> {
    if (typeof value === 'boolean') {
      setUpdated();
      isImportant = value;
      return isImportant;
    }
  }
  const setNotes = (value) => {
    setUpdated();
    notes = value;
    return notes;
  }
  const setDueDate = (value) => {
    if (value instanceof Date || value === null) {
      setUpdated();
      dueDate = value;
      return dueDate;
    }
  }
  const setTaskListUuid = (value) => {
    taskListUuid = value;
  }
  const setUpdated = (date) => {
    updated = date ? date : new Date();
  }
  const setCreated = (date) => {
    created = date;
  }
  const setUuid = (value) => {
    uuid = value;
  }
  const toJSON = () => {
    return {
      uuid,
      created,
      name,
      updated,
      dueDate,
      notes,
      isImportant,
      isDone,
      taskListUuid
    }
  }

  return {
    getUuid,
    getName,
    getIsDone,
    getCreated,
    getUpdated,
    getDueDate,
    getIsImportant,
    getNotes,
    getTaskListUuid,
    setName,
    setIsDone,
    setNotes,
    setIsImportant,
    setDueDate,
    setTaskListUuid,
    setUpdated,
    setCreated,
    setUuid,
    toJSON
  }
}

export { Task };