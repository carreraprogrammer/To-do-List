import './style.css';
import _ from 'lodash';

// Create a ul element 
const listSection = document.querySelector('section');
listSection.classList.add('list-section');
const ul  = document.createElement('ul');
const body = document.querySelector('body');
body.appendChild(listSection);
listSection.appendChild(ul);
ul.classList.add('display-list');

// Create tasks array 

const tasks = [
  {
    description:'Make the bed',
    completed: true,
    id: 1
  },
  {
    description:'Study for the exam',
    completed: false,
    id: 2
  },
  {
    description:'Do some excersise',
    completed: false,
    id: 3
  },
  {
    description:'Do the laundry',
    completed: false,
    id: 4
  }
]

// Create display List method

class DisplayList {

  static showList() {
  
    const displayList = document.querySelector('.display-list');
    const parser = new DOMParser();
    
    tasks.map((task) => {
    const taskString = `
    <li class='task'><div><input type="checkbox" class='checkbox'>${task.description}</div><i class="fa-solid fa-ellipsis-vertical"></i></li>
    `
    const taskHtml = parser.parseFromString(taskString, 'text/html').body.firstChild;
    displayList.appendChild(taskHtml);
    })
  
  }
}

DisplayList.showList();