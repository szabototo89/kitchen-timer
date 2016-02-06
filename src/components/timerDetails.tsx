import * as React from 'react';
import Timer from "models/timer";
import TextBox from 'common/textbox';
import NumericTextBox from 'common/numericTextBox';

export interface TimerDetailsProps {
  timer: Timer;
  hasTimerChanged?(timer: Timer, value: any): void;
}

function TimerDetails({ timer, hasTimerChanged }: TimerDetailsProps) {
  const { duration } = timer;

  const changeTimerValue = (value) => {
    hasTimerChanged(timer, value);
  };

  return (
    <div>
      <TextBox placeholder="Type your timer's name here ..."
               value={timer.name}
      />

      <div>
        <NumericTextBox value={duration.hours}
                        hasValueChanged={(value) => changeTimerValue({ hours: value })} />
      </div>

      <div>
        <NumericTextBox value={duration.minutes}
                        hasValueChanged={(value) => changeTimerValue({ minutes: value })} />
      </div>

      <div>
        <NumericTextBox value={duration.seconds}
                        hasValueChanged={(value) => changeTimerValue({ seconds: value })} />
      </div>
    </div>
  );
}

export default TimerDetails;