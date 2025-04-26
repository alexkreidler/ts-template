import { greet } from './index';

describe('greet function', () => {
  it('should return a greeting message', () => {
    expect(greet('Tester')).toBe('Hello, Tester!');
  });
});