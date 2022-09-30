import './style.css';
import { Task, tasks } from './modules/task'

// Create a ul element 
const listSection = document.querySelector('section');
listSection.classList.add('list-section');
const ul  = document.createElement('ul');
const body = document.querySelector('body');
body.appendChild(listSection);
listSection.appendChild(ul);
ul.classList.add('display-list');

// Create display List method

class DisplayList {

  static showList() {

    const displayList = document.querySelector('.display-list');
    displayList.innerHTML = '';
    const parser = new DOMParser();
    
    tasks.map((task) => {
    const taskString = `
    <li class='task' id=${task.id}><div><input type="checkbox" class='checkbox'>${task.description}</div><i class="fa-solid fa-ellipsis-vertical"></i><i class="fa-regular fa-trash-can ocult"></i></li>
    `
    const taskHtml = parser.parseFromString(taskString, 'text/html').body.firstChild;
    displayList.appendChild(taskHtml);

    const selectBtn = taskHtml.querySelector('.fa-ellipsis-vertical');
    Task.selectTask(selectBtn);
    const trashBtn = taskHtml.querySelector('.fa-trash-can');
    Task.deleteTask(trashBtn);
    })  
  }
}

DisplayList.showList();

export { DisplayList }

const addTask = document.getElementById('add-task');
const submitBtn = document.querySelector('.submit-button');

submitBtn.addEventListener('click', function() {
  if(addTask.value > 0) {
    const task = new Task(addTask.value, tasks.length);
    tasks.push(task);
    DisplayList.showList();
    addTask.value = '';
  }
})