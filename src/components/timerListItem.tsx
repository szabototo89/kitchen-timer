import * as React from 'react';
import Timer from "models/timer";
import TimeDurationControl from 'components/timeDurationControl';

export interface TimerListProps {
  timer: Timer;
}

function TimerListItem({ timer }: TimerListProps) {
  return (
    <div>
      <span>{ timer.name }</span>
      <TimeDurationControl duration={timer.duration} />
    </div>
  );
}

export default TimerListItem;