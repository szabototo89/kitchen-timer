import * as React from 'react';
import TimerList from 'timerDescriptor/timerList';
import TimerDetails from 'timerDetails/timerDetails';

const App = ({ timerList, timerDetails, dispatch }) => {
  const { isEditMode } = timerDetails;

  return (
    <div>
      {!isEditMode
          ? <TimerList timers={timerList.timers} dispatch={dispatch}/>
          : <TimerDetails timer={timerDetails.timer} dispatch={dispatch} />
      }
    </div>
  );
};

export default App;