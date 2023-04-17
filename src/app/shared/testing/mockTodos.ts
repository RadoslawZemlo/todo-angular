import { Todo } from '@app/core/interfaces/todo.interface';

export const FAKE_TODOS: Todo[] = [
  {
    task: 'todo one',
    priority: 2,
    addedAt: new Date(),
    completed: false,
    id: 1,
  },
  {
    task: 'todo two',
    priority: 3,
    addedAt: new Date(),
    completed: false,
    id: 2,
  },
  {
    task: 'todo three',
    priority: 1,
    addedAt: new Date(),
    completed: true,
    id: 3,
  },
  {
    task: 'todo four',
    priority: 2,
    addedAt: new Date(),
    completed: false,
    id: 4,
  },
];

export const FAKE_SELECTED_TODOS: Todo[] = [
  {
    task: 'todo three',
    priority: 1,
    addedAt: new Date(),
    completed: true,
    id: 3,
  },
];
