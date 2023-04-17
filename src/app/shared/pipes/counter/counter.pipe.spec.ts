import { CounterPipe } from './counter.pipe';
import { FAKE_TODOS } from '@app/shared/testing/mockTodos';

describe('CounterPipe', () => {
  const counterPipe = new CounterPipe();

  it('create an instance', () => {
    expect(counterPipe).toBeTruthy();
  });

  it('should retrun length of an array of todos', () => {
    expect(counterPipe.transform(FAKE_TODOS)).toBe(4);
  });
});
