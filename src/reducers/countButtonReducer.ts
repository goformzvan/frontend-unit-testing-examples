import { produce } from 'immer';
import { ActionTypes, CountButtonAction } from '../actions/countButtonActions';

export type CountButtonState = {
  count: number;
};

export const COUNT_BUTTON_INITIAL_STATE: CountButtonState = {
  count: 0
};

export default function countButtonReducer(
  state = COUNT_BUTTON_INITIAL_STATE,
  action: CountButtonAction
): CountButtonState {
  // remember that we use immer in the webapp so we can mutate state directly
  return produce(state, (draftState) => {
    switch (action.type) {
      case ActionTypes.INCREMENT:
        draftState.count += 1;
        break;
      case ActionTypes.RESET:
        draftState.count = 0;
        break;
      case ActionTypes.SKIP:
        draftState.count = action.payload!;
        break;
      default:
        break;
    }
  });
}
