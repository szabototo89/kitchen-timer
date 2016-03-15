import * as React from 'react';
import ActiveTimerComponent from 'components/ActiveTimerComponent';
import Button from 'common/button';
import { ActiveTimerMode } from "models/ActiveTimer";

const ActiveTimerList = ({ activeTimers, onActiveTimerStop, onActiveTimerPause, onActiveTimerResume, onActiveTimerRemove }) => {
  return (<div>
    <h1>Active Timers</h1>

    {activeTimers.map((activeTimer, index) => <div key={index}>
      <ActiveTimerComponent activeTimer={activeTimer} />
      <Button onClick={onActiveTimerRemove.bind(null, activeTimer)}>Remove from list</Button>

      {activeTimer.mode !== ActiveTimerMode.COUNTING &&
        <Button onClick={onActiveTimerResume.bind(null, activeTimer)}>
          {activeTimer.mode === ActiveTimerMode.PAUSED && 'Resume'}
          {activeTimer.mode === ActiveTimerMode.STOPPED && 'Start'}
        </Button>}

      {activeTimer.mode === ActiveTimerMode.COUNTING &&
        <span>
          <Button onClick={onActiveTimerPause.bind(null, activeTimer)}>Pause</Button>
          <Button onClick={onActiveTimerStop.bind(null, activeTimer)}>Stop</Button>
        </span>}

    </div>)}
  </div>);
};

export default ActiveTimerList;