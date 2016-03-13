import * as React from 'react';
import ActiveTimerComponent from 'components/ActiveTimerComponent';
import Button from 'common/button';

const ActiveTimerList = ({ activeTimers, onActiveTimerStop, onActiveTimerPause, onActiveTimerStart, onActiveTimerDecrease, onActiveTimerRemove }) => {
  return (<div>
    <h1>Active Timers</h1>

    {activeTimers.map((activeTimer, index) => <div key={index}>
      <ActiveTimerComponent activeTimer={activeTimer} />
      <Button onClick={onActiveTimerRemove.bind(null, activeTimer)}>Remove from list</Button>

      <Button onClick={onActiveTimerDecrease.bind(null, activeTimer)}>Decrease</Button>
      <Button onClick={onActiveTimerPause.bind(null, activeTimer)}>Pause</Button>
      <Button onClick={onActiveTimerStop.bind(null, activeTimer)}>Stop</Button>
    </div>)}
  </div>);
};

export default ActiveTimerList;