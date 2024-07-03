import countReducer, {
  COUNT_BUTTON_INITIAL_STATE
} from '../reducers/countReducer';
import { ActionTypes } from '../actions/countActions';
import { ExplicitAny } from 'core';

describe('countReducer', () => {
  it('should return the initial state', () => {
    expect(
      countReducer(undefined, { type: 'DSLKSDJFLKSDSLKDJF' as ExplicitAny })
    ).toEqual(COUNT_BUTTON_INITIAL_STATE);
  });

  it('should handle INCREMENT action', () => {
    const action = { type: ActionTypes.INCREMENT };
    const expectedState = { count: 1 };
    const newState = countReducer(COUNT_BUTTON_INITIAL_STATE, action);

    expect(newState).toEqual(expectedState);
  });

  it('should handle RESET action', () => {
    const action = { type: ActionTypes.RESET };
    const expectedState = { count: 0 };

    expect(countReducer({ count: 10 }, action)).toEqual(expectedState);
  });

  test('should handle SKIP action', () => {
    const action = { type: ActionTypes.SKIP, payload: 5 };
    const expectedState = { count: 5 };

    expect(countReducer(COUNT_BUTTON_INITIAL_STATE, action)).toEqual(
      expectedState
    );
  });
});
