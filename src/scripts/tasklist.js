import {v4 as Uuid} from 'uuid';

const TaskList = (value) => {
  // private variables
  let uuid = Uuid();
  let created = new Date();
  let tasks = [];
  let name = value;
  let updated = new Date();
  let taskLoader = null;

  // private functions
  
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
  const setTaskLoader = (loader) => {
    taskLoader = loader;
  }
  const loadTasks = () => {
    if (taskLoader) {
      tasks = taskLoader();
    }
  }
  const setUpdated = (date) => {
    updated = date ? date : new Date();
  }
  const setCreated = (date) => {
    created = date
  }
  const setUuid = (value) => {
    uuid = value;
  }
  const toJSON = () => {
    return {
      uuid,
      created,
      tasks: tasks.map(task => task.toJSON()),
      name,
      updated
    };
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
    setTaskLoader,
    setCreated,
    setUpdated,
    setUuid,
    loadTasks,
    toJSON
  }
}

export { TaskList };