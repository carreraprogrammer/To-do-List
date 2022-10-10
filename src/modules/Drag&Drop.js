import { LocalStorage } from "./local-storage";
import { DisplayList } from "../index"


// ADD EVENT TO DRAG ELEMENTS
  // pseudo code ...
  // I will take the element and I change the id of the element for the id of the container
  // I add one to all the elements below the new element
  
  function changeTask() {

    const taskDraggable = document.querySelectorAll('.task');
    const container = document.querySelectorAll('.container');
    let actualIndex;
    let dessiredIndex;
    const tasks = LocalStorage.getTasks();
    
    taskDraggable.forEach((draggable) => {
      
      draggable.addEventListener('dragstart', () => {
        actualIndex = parseInt(draggable.id);
      })

      draggable.addEventListener('dragend', () => {
        draggable.classList.add('changed');
      })

    })
    
    container.forEach((cont) => {
    
      cont.addEventListener('dragover', (e) => {
       e.preventDefault();
       cont.classList.add('margin');
      })

      cont.addEventListener('dragenter', () => {
       
       })

      cont.addEventListener('dragleave', (e) => {
        e.preventDefault();
        cont.classList.remove('margin');
      });
    
      cont.addEventListener('drop', () => {
        dessiredIndex = parseInt(cont.id)
        console.log(dessiredIndex);
        if(actualIndex > dessiredIndex){
          tasks.splice(dessiredIndex, 0, tasks[actualIndex]);
          tasks.splice(actualIndex + 1, 1);
          localStorage.setItem('tasks', JSON.stringify(tasks));
          console.log(tasks);
          tasks.forEach((task) =>{
            task.id = tasks.indexOf(task)
          })
          DisplayList.showList();
        } else {
          tasks.splice(dessiredIndex + 1, 0, tasks[actualIndex]);
          tasks.splice(actualIndex, 1);
          localStorage.setItem('tasks', JSON.stringify(tasks));
          console.log(tasks)
          tasks.forEach((task) =>{
            task.id = tasks.indexOf(task)
          })
          DisplayList.showList();
        }
      })
    })
    }
    
export { changeTask }