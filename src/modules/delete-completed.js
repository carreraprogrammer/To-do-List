import { DisplayList } from '../index';
import { LocalStorage } from './local-storage';

const clear = document.getElementById('clear-btn');

function deleteCompletedTask() {clear.addEventListener('click', () => {
  let tasks = LocalStorage.getTasks();
  const newTasks = tasks.filter((task) => task.completed !== true);
  tasks = newTasks;
  localStorage.setItem('tasks', JSON.stringify(tasks));
  DisplayList.showList();
})}

export { deleteCompletedTask }