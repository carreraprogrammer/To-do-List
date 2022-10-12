
const completed = (checkbox, task, tasks) =>{
  checkbox.addEventListener('change', () => {
  if(checkbox.checked) {
    task.completed = true;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }else{
    task.completed = false;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
})}

export { completed }