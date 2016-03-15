import * as React from 'react';
import TimeDurationComponent from 'components/TimeDurationComponent';

const ActiveTimerComponent = ({ activeTimer }) => {
  const { name } = activeTimer.timerPreset;
  const { currentValue } = activeTimer;

  return <div>
    <div>{name}</div>
    <TimeDurationComponent hour={currentValue.hour} minute={currentValue.minute} second={currentValue.second} />
  </div>;
};

export default ActiveTimerComponent;