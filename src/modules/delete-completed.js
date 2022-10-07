import { DisplayList } from '../index';
import { LocalStorage } from './local-storage';

const clear = document.getElementById('clear-btn');

function deleteCompleted() {clear.addEventListener('click', () => {
  let tasks = LocalStorage.getTasks();
  const newTasks = tasks.filter((task) => task.completed !== true);
  console.log(newTasks);
  tasks = newTasks;
  localStorage.setItem('tasks', JSON.stringify(tasks));
  DisplayList.showList();
})}

export { deleteCompleted }