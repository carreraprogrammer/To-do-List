import { DisplayList } from "../index"

const refreshBtn = document.querySelector('.fa-arrows-rotate');


const refresh = () => {
  refreshBtn.addEventListener('click', () => {
      const tasks = [];
      localStorage.setItem('tasks', JSON.stringify(tasks));
      DisplayList.showList(tasks);
  })
}

export { refresh }