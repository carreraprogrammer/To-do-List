// this is the function that simulate Task.addTask in the modules folder

const addTask = (task, tasks) =>{
    if(task.description.length > 0) {
      tasks.push(task);
      return tasks;
    } else {
      return tasks;
    }
}

export default addTask;