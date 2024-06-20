// Define action type
export type CountButtonAction = {
  type: ActionTypes;
  payload?: number;
};

export enum ActionTypes {
  INCREMENT = 'INCREMENT',
  RESET = 'RESET',
  SKIP = 'SKIP'
}

// Define action creators
export function increment(
  count: number,
  dispatch: React.Dispatch<CountButtonAction>
) {
  // skip every 5th count
  if (count > 0 && (count + 1) % 5 === 0) {
    dispatch({ type: ActionTypes.SKIP, payload: count + 2 });
    return;
  }

  dispatch({ type: ActionTypes.INCREMENT });
}

export const reset = (): CountButtonAction => ({
  type: ActionTypes.RESET
});

export const skip = (count: number): CountButtonAction => ({
  type: ActionTypes.SKIP,
  payload: count
});
