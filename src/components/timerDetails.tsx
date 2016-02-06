import * as React from 'react';
import Timer from "models/timer";
import TextBox from 'common/textbox';
import NumericTextBox from 'common/numericTextBox';

export interface TimerDetailsProps {
  timer: Timer;
  hasTimerChanged?: any;
}

function TimerDetails({ timer, hasTimerChanged }: TimerDetailsProps) {
  const { duration } = timer;

  return (
    <div>
      <TextBox placeholder="Type your timer's name here ..." value={timer.name} />

      <div>
        <NumericTextBox value={duration.hours} />
      </div>

      <div>
        <NumericTextBox value={duration.minutes} />
      </div>

      <div>
        <NumericTextBox value={duration.seconds} />
      </div>
    </div>
  );
}

export default TimerDetails;