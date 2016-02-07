import * as React from 'react';
import Button from 'common/button';
import ClassNameBuilder from "utils/classNameBuilder";

export interface TimerListControlsProps {
  onTimerAdd: () => void;
}

const classBuilder = new ClassNameBuilder('timer-list-controls');

function TimerListControls({ onTimerAdd }: TimerListControlsProps) {
  return (
    <div className={classBuilder.element('container')}>
      <Button className={classBuilder.element('add-timer-button')} onClick={onTimerAdd}>Add Timer</Button>
    </div>
  );
}

export default TimerListControls;