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
  const getImportant = () => isImportant;
  const getNotes = () => notes;

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

  return {
    getUuid,
    getName,
    getIsDone,
    getCreated,
    getUpdated,
    getDueDate,
    getImportant,
    getNotes,
    setName,
    setIsDone,
    setNotes,
    setIsImportant,
    setDueDate
  }
}

export { Task };