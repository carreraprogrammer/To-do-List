
 function completed (checkbox, task, tasks) {
  checkbox.addEventListener('change', () => {
  if(checkbox.checked) {
    task.completed = true;
    console.log(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }else{
    task.completed = false;
    console.log(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
})}

export { completed }