import { DisplayList } from '../index';
import { Task } from './task'
import { LocalStorage } from './local-storage';

const addTask = document.getElementById('add-task');
const submitBtn = document.querySelector('.submit-button');

submitBtn.addEventListener('click', function() {
    if(addTask.value > 0) {
      const task = new Task(addTask.value, tasks.length);
      const tasks = LocalStorage.getTasks();
      Task.addTask(task, tasks);
      DisplayList.showList();
      addTask.value = '';
    }
  })
  
  