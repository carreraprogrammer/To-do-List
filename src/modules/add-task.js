import { tasks } from './task'
import { DisplayList } from '../index';
import { Task } from './task'

const addTask = document.getElementById('add-task');
const submitBtn = document.querySelector('.submit-button');

submitBtn.addEventListener('click', function() {
    if(addTask.value > 0) {
      const task = new Task(addTask.value, tasks.length);
      Task.addTask(task);
      DisplayList.showList();
      addTask.value = '';
    }
  })
  
  