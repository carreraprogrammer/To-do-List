/**
 * @jest-environment jsdom
 */

import Task from '../src/modules/task'

describe('Todo List', () => {
    describe('add new task function', () => {
      const tasks = LocalStorage.getTasks();;
      const task = new Task("", 0);
      test('the task function is not an empty string'), () => {
        Task.addTask(task);
        expect(tasks.length).toEqual(0);
      }
      
    })
})