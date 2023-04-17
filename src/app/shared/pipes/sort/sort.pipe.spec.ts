import { SortPipe } from './sort.pipe';
import { FAKE_TODOS } from '@app/shared/testing/mockTodos';

describe('SortPipe', () => {
  const sortPipe = new SortPipe();

  it('create an instance', () => {
    expect(sortPipe).toBeTruthy();
  });

  it('should sort todos by priority', () => {
    const sortedTodos = sortPipe.transform(FAKE_TODOS, 'priority');

    expect(sortedTodos[0].task).toBe('todo three');
  });
});
