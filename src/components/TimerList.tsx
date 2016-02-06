import * as React from 'react';
import TimerListItem from 'components/timerListItem';
import Button from 'common/button';
import Timer from "models/timer";

export interface TimerListProps {
  timers: any[];
  onTimerRemove(timerId: string);
  onTimerEdit(timer: Timer);
}

function TimerList({ timers, onTimerRemove, onTimerEdit }: TimerListProps) {
  return (
    <div>
      {timers.map(timer => (
        <div key={timer.id}>
          <TimerListItem timer={timer} />
          <Button onClick={onTimerEdit.bind(null, timer)}>Edit</Button>
          <Button onClick={onTimerRemove.bind(null, timer.id)}>Remove</Button>
        </div>
      ))}
    </div>
  );
}

export default TimerList;