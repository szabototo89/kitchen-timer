import * as React from 'react';
import Timer from "models/timer";
import TimeDurationControl from 'components/timeDurationControl';
import ClassNameBuilder from "utils/classNameBuilder";

export interface TimerListProps {
  timer: Timer;
}

const classBuilder = new ClassNameBuilder('timer-list-item');

function TimerListItem({ timer }: TimerListProps) {
  return (
    <div className={classBuilder.element('container')}>
      <span className={classBuilder.element('name')}>{ timer.name }</span>
      <TimeDurationControl duration={timer.duration} />
    </div>
  );
}

export default TimerListItem;