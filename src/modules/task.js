import { LocalStorage } from "./local-storage";
import { DisplayList } from "../index"
import { changeId } from "./changeId"

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
            e.target.nextSibling.nextSibling.classList.remove('ocult');
          });
      }

      static editTask(editBtn) {
        return editBtn.addEventListener('click', (e) => {
          e.target.parentElement.firstChild.classList.toggle('ocult');
          e.target.parentElement.firstChild.focus();
          e.target.parentElement.firstChild.nextSibling.classList.toggle('ocult');
          e.target.parentElement.classList.toggle('select');
          e.target.nextSibling.classList.toggle('ocult');
        })
      }
    
      static deleteTask(trash) {
        return trash.addEventListener('click', (e) => {
            e.target.parentElement.remove();
            LocalStorage.removeTask(e.target.parentElement.id);
            DisplayList.showList();
            changeId();
          });
      }
    }

  
  export { Task } 