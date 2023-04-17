import { PercentagePipe } from './percentage.pipe';
import { FAKE_SELECTED_TODOS, FAKE_TODOS } from '@app/shared/testing/mockTodos';

describe('PercentagePipe', () => {
  const percentagePipe = new PercentagePipe();

  it('create an instance', () => {
    expect(percentagePipe).toBeTruthy();
  });

  it('should return percentage of selected todos', () => {
    const percentage = percentagePipe.transform(
      FAKE_SELECTED_TODOS.length,
      FAKE_TODOS.length
    );

    expect(percentage).toBe(25);
  });
});
