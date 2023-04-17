import { ConvertPriorityPipe } from './convert-priority.pipe';

describe('ConvertPriorityPipe', () => {
  const convertPriorityPipe = new ConvertPriorityPipe();

  it('create an instance', () => {
    expect(convertPriorityPipe).toBeTruthy();
  });

  it('transform "1" to "High"', () => {
    expect(convertPriorityPipe.transform(1)).toBe('High');
  });

  it('transform "3" to "Low"', () => {
    expect(convertPriorityPipe.transform(3)).toBe('Low');
  });
});
