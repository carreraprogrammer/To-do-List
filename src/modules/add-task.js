import { DisplayList } from '../index';
import Task from './task'
import { LocalStorage } from './local-storage';

const addTask = document.getElementById('add-task');
const submitBtn = document.querySelector('.submit-button');

const createTask = () => {submitBtn.addEventListener('click', function(e) {
  e.preventDefault();
  if(addTask.value.length > 0) {
    const tasks = LocalStorage.getTasks();
    const task = new Task(addTask.value, tasks.length);
    Task.addTask(task, tasks);
    LocalStorage.addTask(task);
    DisplayList.showList();
    addTask.value = '';
  }
})}

export { createTask };

  