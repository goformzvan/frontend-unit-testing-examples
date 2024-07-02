import './App.css';

import { useReducer } from 'react';
import { ActionTypes, increment } from './actions/countActions';
import CountButton from './components/Button/MyButton';
import { getCountStatusThrows } from './helpers/helper';
import countReducer, {
  COUNT_BUTTON_INITIAL_STATE
} from './reducers/countReducer';

function App() {
  const [state, dispatch] = useReducer(
    countReducer,
    COUNT_BUTTON_INITIAL_STATE
  );

  const getStatusText = (count: number) => {
    try {
      const statusText = getCountStatusThrows(count);

      return statusText;
    } catch (error) {
      if (error instanceof Error) {
        return error.message;
      }

      return 'An error occurred';
    }
  };

  const handleCountClick = (currentCount: number) => {
    increment(currentCount, dispatch);
  };

  const handleResetClick = () => {
    dispatch({ type: ActionTypes.RESET });
  };

  return (
    <div className="app">
      <div className="count-status">
        <p>{getStatusText(state.count)}</p>
      </div>
      <div className="actions">
        <CountButton count={state.count} onClick={handleCountClick} />
        <br />
        <br />
        <button onClick={handleResetClick}>Reset</button>
      </div>
    </div>
  );
}

export default App;
