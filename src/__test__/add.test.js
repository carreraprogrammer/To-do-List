/**
 * @jest-environment jsdom
 */

import Task from '../modules/task'

 test ('empty description is not allowed', () => {
     const tasks = [];
     const newTask = {
      description: '',
      id: 0
    }
     tasks.push(newTask);
     expect(tasks.length).toBe(1)
 })
 
 