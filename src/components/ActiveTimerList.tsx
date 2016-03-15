import * as React from 'react';
import ActiveTimerComponent from 'components/ActiveTimerComponent';
import { SimpleButton } from 'common/buttons';
import { ActiveTimerMode } from "models/ActiveTimer";

const ActiveTimerList = ({ activeTimers, onActiveTimerStop, onActiveTimerPause, onActiveTimerResume, onActiveTimerRemove }) => {
  return (<div>
    {activeTimers.map((activeTimer, index) => <div key={index}>
      <ActiveTimerComponent activeTimer={activeTimer} />
      <SimpleButton onClick={onActiveTimerRemove.bind(null, activeTimer)}>Remove from list</SimpleButton>

      {activeTimer.mode !== ActiveTimerMode.COUNTING &&
        <SimpleButton onClick={onActiveTimerResume.bind(null, activeTimer)}>
          {activeTimer.mode === ActiveTimerMode.PAUSED && 'Resume'}
          {activeTimer.mode === ActiveTimerMode.STOPPED && 'Start'}
        </SimpleButton>}

      {activeTimer.mode === ActiveTimerMode.COUNTING &&
        <span>
          <SimpleButton onClick={onActiveTimerPause.bind(null, activeTimer)}>Pause</SimpleButton>
          <SimpleButton onClick={onActiveTimerStop.bind(null, activeTimer)}>Stop</SimpleButton>
        </span>}

    </div>)}
  </div>);
};

export default ActiveTimerList;