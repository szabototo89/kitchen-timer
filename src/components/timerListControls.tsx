import * as React from 'react';
import Button from 'common/button';

export interface TimerListControlsProps {
  onTimerAdd: () => void;
}

function TimerListControls({ onTimerAdd }: TimerListControlsProps) {
  return (
    <div>
      <Button onClick={onTimerAdd}>Add Timer</Button>
    </div>
  );
}

export default TimerListControls;