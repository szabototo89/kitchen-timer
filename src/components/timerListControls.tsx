import * as React from 'react';
import Button from 'common/button';

export interface TimerListControlsProps {
  onTimerAdd: () => void;
  onTimerRemove: () => void;
}

function TimerListControls({ onTimerAdd, onTimerRemove }: TimerListControlsProps) {
  return (
    <div>
      <Button onClick={onTimerAdd}>Add Timer</Button>
      <Button onClick={onTimerRemove}>Remove Timer</Button>
    </div>
  );
}

export default TimerListControls;