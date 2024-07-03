import { getCountStatusThrows } from './helper';

describe('helper.', () => {
  describe('WHEN getting the status text', () => {
    test('should return the current count', () => {
      const count = 1;
      const result = getCountStatusThrows(count);

      expect(result).toBe('Current count is 1');
    });

    describe('AND the count is divisible of 17', () => {
      test('should throw an error', () => {
        const count = 17;

        expect(() => getCountStatusThrows(count)).toThrow(
          'Count cannot be divisible by 17'
        );
      });
    });
  });
});
