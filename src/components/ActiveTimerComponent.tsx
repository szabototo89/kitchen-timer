import * as React from 'react';
import TimeDurationComponent from 'components/TimeDurationComponent';

const ActiveTimerComponent = ({ activeTimer }) => {
  const { name, duration } = activeTimer.timerPreset;

  return <div>
    <div>{name}</div>
    <TimeDurationComponent hour={duration.hour} minute={duration.minute} second={duration.second} />
  </div>;
};

export default ActiveTimerComponent;