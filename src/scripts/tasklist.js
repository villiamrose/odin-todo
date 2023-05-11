import {v4 as Uuid} from 'uuid';

const TaskList = (value) => {
  // private variables
  const uuid = Uuid();
  const created = new Date();
  const tasks = [];
  let name = value;
  let updated = new Date();

  // private functions
  const setUpdated = () => {
    updated = new Date();
  }
  const isTaskUuidEqual = (task1, task2) => {
    return task1.getUuid() === task2.getUuid();
  }
  const getTaskIndex = (task) => {
    let index = tasks.findIndex(
      item => isTaskUuidEqual(item, task)
    );
    return index;
  }

  // public functions
  // getters
  const getUuid = () => uuid;
  const getName = () => name;
  const getCreated = () => created;
  const getUpdated = () => updated;
  const getTasks = () => tasks;
  const getTaskByUuid = (uuid) => {
    return tasks.find(task => task.getUuid() === uuid);
  }

  // setters
  const setName = (value) => {
    name = value;
    setUpdated();
    return name;
  } 
  const addTask = (value) => {
    value.setTaskListUuid(uuid);
    tasks.push(value);
    setUpdated();
    return tasks;
  }
  const deleteTask = (value) => {
    let index = getTaskIndex(value);
    if (index >= 0) {
      setUpdated();
      tasks.splice(index, 1);
    }
    return tasks;
  } 
  const adoptTask = (value) => {
    tasks.push(value);
    return tasks;
  }
  return {
    getUuid,
    getName,
    getCreated,
    getUpdated,
    getTasks,
    getTaskByUuid,
    setName,
    addTask,
    deleteTask,
    adoptTask
  }
}

export { TaskList };