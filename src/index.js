import './style.css';

// Create a ul element 
const listSection = document.querySelector('section');
listSection.classList.add('list-section');
const ul  = document.createElement('ul');
const body = document.querySelector('body');
body.appendChild(listSection);
listSection.appendChild(ul);
ul.classList.add('display-list');

// Create tasks array 

// The class Task have the methods for select task, add task and remove task from list

class Task {

  constructor(description, id) {
    this.description = description;
    this.id = id;
    this.completed = false;
  }

  static addTask(task) {
    const tasks = LocalStorage.getTasks();
    tasks.push(task);
  }

  static selectTask(select) {
    return select.addEventListener('click', (e) => {
        e.target.parentElement.classList.toggle('select');
        e.target.classList.toggle('ocult');
        e.target.nextSibling.classList.remove('ocult');
      });
  }

  static deleteTask(trash) {
    return trash.addEventListener('click', (e) => {
        e.target.parentElement.remove();
        LocalStorage.removeTask(e.target.parentElement.id);
      });
  }
}

// The class LocalStorage have all the methods to save the array information on the local storage

class LocalStorage {

  static getTasks() {
    let tasks;
    if(localStorage.getItem('tasks') == null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    return tasks;
  }

  static addTask(task) {
    const tasks = LocalStorage.getTasks();
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  static removeTask(i) {
    const tasks = LocalStorage.getTasks();
    const index = tasks.indexOf(tasks[i]);
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}

// Create display List method

class DisplayList {

  static showList() {

    const tasks = LocalStorage.getTasks();
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

// Event to create a new task

const addTask = document.getElementById('add-task');
const submitBtn = document.querySelector('.submit-button');

addTask.addEventListener('keypress', function(event) {
    if (event.key === 'Enter' && addTask.value > 0) {
      const tasks = LocalStorage.getTasks();
      const task = new Task(addTask.value, tasks.length);
      Task.addTask(task);
      LocalStorage.addTask(task);
      DisplayList.showList();
      addTask.value = '';
    }
  }
)

submitBtn.addEventListener('click', function() {
  if(addTask.value > 0) {
    const tasks = LocalStorage.getTasks();
    const task = new Task(addTask.value, tasks.length);
    Task.addTask(task);
    LocalStorage.addTask(task);
    DisplayList.showList();
    addTask.value = '';
  }
})
