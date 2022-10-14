import addTask from '../modules/__mocks__/add-task-mock';

test('string length is more than 0', () => {
    const newTask = {
      description: '',
      id: 0,
      completed: false
    };
    const tasks = [];
    const result = addTask(newTask, tasks);
    expect(result.length).toBe(0);
})