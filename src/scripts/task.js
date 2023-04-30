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
    name = value;
    setUpdated();
  };
  const setIsDone = (value) => {
    if (typeof value === 'boolean') {
      isDone = value;
      setUpdated();
    }
  }
  const setIsImportant = (value )=> {
    if (typeof value === 'boolean') {
      isImportant;
      setUpdated();
    }
  }
  const setNotes = (value) => {
    notes = value;
    setUpdated();
  }
  const setDueDate = (value) => {
    if (value instanceof Date) {
      dueDate = value;
      setUpdated();
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