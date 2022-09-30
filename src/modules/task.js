import { LocalStorage } from "./local-storage";

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
  
  export { Task, tasks } 