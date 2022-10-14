import { Task } from '../modules/__mocks__/task-class-mock';
import DisplayList from '../modules/__mocks__/Display-list-mock'

describe('add and remove tasks', () => {

    document.body.innerHTML = `
    <section class="list-section">
    <div id='title-container'><p class="list-title">Today's To Do</p><i class="fa-solid fa-arrows-rotate"></i></div>
    <form id="task-form">
      <input type="text" id="add-task" placeholder="Add to your list..."/>
      <button type="submit" class="submit-button">↵</button>
    </form>
    <ul class="display-list">
    
    </ul>
   </section>
    `
    describe('Add task function', () => {

        //Function to add a task to the local storage
        
            test('add task only if it is not an empty string', () => {
                const newTask = new Task('', 0)
                const tasks = []; // This const simulate the LocalStorage
                const result = Task.addTask(newTask, tasks);
                expect(result.length).toBe(0);
            })
        
        //Function to add a task to the DOM using local storage
        
            test('display from local storage task on the screen', () => {
                const tasks = [ // This const simulate local storage
                    {
                        description: 'first',
                        id: 0,
                        completed: true,
                    },
                    {
                        description: 'first',
                        id: 0,
                        completed: true,
                    }
                ];
        
                const displayList = document.querySelector('.display-list')
                DisplayList.showList(tasks, displayList)
                const task = document.querySelectorAll('.task');
               
                expect(task.length).toBe(2);
        
            })
        
        })  
    
    describe('remove tasks from the DOM', () => {
        test('remove one task from the DOM', () => {
            const tasks = [ // This const simulate local storage
                    {
                        description: 'first',
                        id: 0,
                        completed: true,
                    },
                    {
                        description: 'second',
                        id: 1,
                        completed: true,
                    }
                ];
                const displayList = document.querySelector('.display-list')
                DisplayList.showList(tasks, displayList)

                const trash = document.querySelectorAll('.fa-trash-can')[0]
                const index = trash.parentElement.id
                function removeTask(i) {
                    const index = tasks.indexOf(tasks[i]);
                    tasks.splice(index, 1);
                    return tasks;
                  }
                
                expect(removeTask(index).length).toBe(1);
        })
    })
})
