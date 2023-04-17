import { FilterPipe } from './filter.pipe';
import { FAKE_TODOS } from '@app/shared/testing/mockTodos';
import { Todo } from '@app/core/interfaces/todo.interface';

describe('FilterPipe', () => {
  const filterPipe = new FilterPipe();

  it('create an instance', () => {
    expect(filterPipe).toBeTruthy();
  });

  it('should retrun empty array if empty array is provided', () => {
    const emptyArray: Todo[] = [];
    const filtered = filterPipe.transform(emptyArray, 'completed');

    expect(filtered.length).toBe(0);
  });

  it('should retrun "completed" todos', () => {
    const filtered = filterPipe.transform(FAKE_TODOS, 'completed');

    expect(filtered.length).toBe(1);
  });
});
