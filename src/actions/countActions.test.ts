import { ActionTypes, increment } from './countActions';

describe('countActions', () => {
  describe('WHEN incrementing', () => {
    test('should dispatch the INCREMENT action', () => {
      // alternatively you can move this dispatch mock up to the top describe block
      // since it's being used in all tests
      const dispatch = jest.fn();
      const count = 1;

      increment(count, dispatch);

      expect(dispatch).toHaveBeenCalledWith({ type: ActionTypes.INCREMENT });
    });

    // if we were developing this feature, and we we're in the middle of writing this
    // action creator file, we wouldn't be able to test it until we wired it into the
    // app with a matching reducer and a component to trigger it 5 times.
    //
    // with this test we set up the action create to dispatch at the 4th count
    // and see if the test passes or debug through it to see if our code is working as
    // expected.
    //
    // (I wrote 'this' and copilot wrote the rest of this comment! 🤣)
    // this approach is called test-driven development (TDD) and it's a great way to
    // develop features incrementally and with confidence.
    describe('AND the next count is a factor of 5', () => {
      test('should dispatch the SKIP action', () => {
        const dispatch = jest.fn();
        const count = 4;

        increment(count, dispatch);

        expect(dispatch).toHaveBeenCalledWith({
          type: ActionTypes.SKIP,
          payload: 6
        });
      });
    });
  });
});
