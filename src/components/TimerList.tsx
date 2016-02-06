import * as React from 'react';
import TimerListItem from 'components/timerListItem';
import Button from 'common/button';

export interface TimerListProps {
  timers: any[];
  onTimerRemove(timerId: string);
}

function TimerList({ timers, onTimerRemove }: TimerListProps) {
  return (
    <div>
      {timers.map(timer => (
        <div key={timer.id}>
          <TimerListItem timer={timer} />
          <Button onClick={onTimerRemove.bind(null, timer.id)}>Remove</Button>
        </div>
      ))}
    </div>
  );
}

export default TimerList;