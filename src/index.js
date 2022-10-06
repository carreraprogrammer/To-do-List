import './style.css';
import { Task } from './modules/task'
import { LocalStorage } from './modules/local-storage'

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

    const tasks = LocalStorage.getTasks();

    const displayList = document.querySelector('.display-list');
    displayList.innerHTML = '';
    const parser = new DOMParser();
    
    tasks.map((task) => {
    const taskString = `
    <li class='task' id=${tasks.indexOf(task)}><input type="text" class="edit ocult"/><div class="input-container"><input type="checkbox" class='checkbox' id='check${tasks.indexOf(task)}'><label for='check${tasks.indexOf(task)}' class='label'>${task.description}</label></div>
      <i class="fa-solid fa-ellipsis-vertical"></i><i class="fa-solid fa-pencil ocult"></i><i class="fa-regular fa-trash-can ocult"></i>
    </li>
    `
    const taskHtml = parser.parseFromString(taskString, 'text/html').body.firstChild;
    displayList.appendChild(taskHtml);

    const selectBtn = taskHtml.querySelector('.fa-ellipsis-vertical');
    Task.selectTask(selectBtn);
    const trashBtn = taskHtml.querySelector('.fa-trash-can');
    Task.deleteTask(trashBtn);
    const editBtn = taskHtml.querySelector('.fa-pencil');
    const input = taskHtml.querySelector('.edit');
    input.value = task.description;
    Task.editTask(editBtn);
    const label = taskHtml.querySelector('.label');
    let clickCounter = 0;

      editBtn.addEventListener('click',(e) => {
        if(input.value.length > 0) {
          label.textContent = `${input.value}`;
          task.description = `${input.value}`;
          localStorage.setItem('tasks', JSON.stringify(tasks));
          e.target.parentElement.classList.remove('select');
          clickCounter++; 
          console.log(clickCounter);
          if(clickCounter >= 2){
            editBtn.classList.toggle('ocult');
            trashBtn.classList.toggle('ocult');
            selectBtn.classList.toggle('ocult');
            clickCounter = 0;
          }
        }
      }
     )
    })  
  }
}

DisplayList.showList();

export { DisplayList }

// Create event to 

const addTask = document.getElementById('add-task');
const submitBtn = document.querySelector('.submit-button');

submitBtn.addEventListener('click', function(e) {
  e.preventDefault();
  if(addTask.value.length > 0) {
    const tasks = LocalStorage.getTasks();
    const task = new Task(addTask.value, tasks.length);
    Task.addTask(task);
    LocalStorage.addTask(task);
    DisplayList.showList();
    addTask.value = '';
  }
})

// create event to edit