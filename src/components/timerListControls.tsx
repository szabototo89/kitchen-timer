import * as React from 'react';
import Button from 'common/button';

export interface TimerListControlsProps {
  addTimerEvent: () => void;
  removeTimerEvent: () => void;
}

function TimerListControls({ addTimerEvent, removeTimerEvent }: TimerListControlsProps) {
  return (
    <div>
      <Button onClick={addTimerEvent}>Add Timer</Button>
      <Button onClick={removeTimerEvent}>Remove Timer</Button>
    </div>
  );
}

export default TimerListControls;