import * as React from 'react';
import Timer from "models/timer";
import TextBox from 'common/textbox';
import NumericTextBox from 'common/numericTextBox';

export interface TimerDetailsProps {
  timer?: Timer;
  onTimerDurationChange?(timer: Timer, value: any): void;
  onTimerNameChange?(value: string): void;
}

function TimerDetails({ timer, onTimerDurationChange, onTimerNameChange }: TimerDetailsProps) {
  const { duration } = timer;

  const handleTimerValueChange = (value) => {
    onTimerDurationChange && onTimerDurationChange(timer, value);
  };

  const handleTimerNameChange = (value: string) => {
    onTimerNameChange && onTimerNameChange(value);
  };

  return (
    <div>
      <TextBox placeholder="Type your timer's name here ..."
               value={timer.name}
               onValueChange={handleTimerNameChange}
      />

      <div>
        <NumericTextBox value={duration.hours}
                        onValueChange={(value) => handleTimerValueChange({ hours: value })} />
      </div>

      <div>
        <NumericTextBox value={duration.minutes}
                        onValueChange={(value) => handleTimerValueChange({ minutes: value })} />
      </div>

      <div>
        <NumericTextBox value={duration.seconds}
                        onValueChange={(value) => handleTimerValueChange({ seconds: value })} />
      </div>
    </div>
  );
}

export default TimerDetails;