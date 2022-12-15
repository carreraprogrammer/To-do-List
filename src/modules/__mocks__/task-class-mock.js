class Task {

    constructor(description, id) {
        this.description = description;
        this.id = id;
        this.completed = false;
      }
    
      static addTask(task, tasks) {
        if(task.description.length > 0) {
          tasks.push(tasks)
          return tasks;
        } else {
          return tasks;
        }
      }

      static deleteTask(trash) {
        return trash.addEventListener('click', (e) => {
            e.target.parentElement.remove();
          });
      }
    }

  
  export { Task } 