import * as React from 'react';
import TimerListItem from 'components/timerListItem';
import Button from 'common/button';
import Timer from "models/timer";
import ClassNameBuilder from "utils/classNameBuilder";

export interface TimerListProps {
  timers: any[];
  onTimerRemove(timerId: string);
  onTimerEdit(timer: Timer);
}

const classBuilder = new ClassNameBuilder('timer-list');

function TimerList({ timers, onTimerRemove, onTimerEdit }: TimerListProps) {
  return (
    <div className={classBuilder.element('container')}>
      {timers.map(timer => (
        <div key={timer.id} className={classBuilder.element('timer')}>
          <TimerListItem timer={timer} />
          <Button className={classBuilder.element('edit-button')}
                  onClick={onTimerEdit.bind(null, timer)}>
            Edit
          </Button>
          <Button className={classBuilder.element('remove-button')}
                  onClick={onTimerRemove.bind(null, timer.id)}>
            Remove
          </Button>
        </div>
      ))}
    </div>
  );
}

export default TimerList;
