// this is the function that simulate DisplayList.showList in the modules fold

class DisplayList {

  static showList(tasks) {

    const displayList = document.querySelector('.display-list');
    displayList.innerHTML = '';
    const parser = new DOMParser();
    
    tasks.map((task) => {

      let taskString = '';

      if(task.completed === true) {
        taskString = `
        <li draggable='true' class='task completed container' id=${tasks.indexOf(task)}><input type="text" class="edit ocult"/><div class="input-container"><input type="checkbox" class='checkbox' checked id='check${tasks.indexOf(task)}'><label for='check${tasks.indexOf(task)}' class='label'>${task.description}</label></div>
          <i class="fa-solid fa-ellipsis-vertical"></i><i class="fa-solid fa-pencil ocult"></i><i class="fa-regular fa-trash-can ocult"></i>
        </li>
        
        `

      } else if(task.completed === false ){
        taskString = `
        <li draggable='true' class='task container' id=${tasks.indexOf(task)}><input type="text" class="edit ocult"/><div class="input-container"><input type="checkbox" class='checkbox' id='check${tasks.indexOf(task)}'><label for='check${tasks.indexOf(task)}' class='label'>${task.description}</label></div>
          <i class="fa-solid fa-ellipsis-vertical"></i><i class="fa-solid fa-pencil ocult"></i><i class="fa-regular fa-trash-can ocult"></i>
        </li>
        `
      }

    const taskHtml = parser.parseFromString(taskString, 'text/html').body.firstChild;
   
    displayList.appendChild(taskHtml);
    
    return displayList
    
    })}}

    export default DisplayList;
