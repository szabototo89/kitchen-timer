import * as React from 'react';
import TimerListItem from 'components/timerListItem';

export interface TimerListProps {
  timers: any[];
}

function TimerList({ timers }: TimerListProps) {
  return (
    <div>
      {timers.map(timer => (
        <TimerListItem key={timer.id} timer={timer} />
      ))}
    </div>
  );
}

export default TimerList;