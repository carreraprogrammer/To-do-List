import { Task } from '../modules/__mocks__/task-class-mock';

test('string length is more than 0', () => {
    const newTask = new Task('', 0)
    const tasks = [];
    const result = Task.addTask(newTask, tasks);
    expect(result.length).toBe(0);
})