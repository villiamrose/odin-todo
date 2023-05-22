import {v4 as Uuid} from 'uuid';

const Task = (value) => {
  const uuid = Uuid();
  const created = new Date();
  let name = value;
  let updated = new Date();
  let dueDate = null;
  let notes = null;
  let isImportant = false;
  let isDone = false;
  let taskListUuid = null;
 
  // private functions
  const setUpdated = () => {
    updated = new Date();
  }

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
    if (value instanceof Date) {
      setUpdated();
      dueDate = value;
      return dueDate;
    }
  }
  const setTaskListUuid = (value) => {
    taskListUuid = value;
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
    setTaskListUuid
  }
}

export { Task };