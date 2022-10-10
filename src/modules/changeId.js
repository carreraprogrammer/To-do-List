import { LocalStorage } from './local-storage'

const changeId = () => {
    const tasks = LocalStorage.getTasks();
    for(let i = 0; i < tasks.length; i++) {
      tasks[i].id = tasks.indexOf(tasks[i]);
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  export { changeId } 