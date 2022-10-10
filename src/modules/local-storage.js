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

  export { LocalStorage }