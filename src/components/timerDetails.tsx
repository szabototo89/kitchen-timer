import * as React from 'react';
import Timer from "models/timer";
import TextBox from 'common/textbox';
import Button from 'common/button';
import NumericTextBox from 'common/numericTextBox';

export interface TimerDetailsProps {
  timer?: Timer;
  onTimerDurationChange?(timer: Timer, value: any): void;
  onTimerNameChange?(value: string): void;
  onTimerSave?(timer: Timer): void;
}

function TimerDetails({ timer, onTimerDurationChange, onTimerNameChange, onTimerSave }: TimerDetailsProps) {
  const { name, duration } = timer;

  const handleTimerValueChange = (value) => {
    onTimerDurationChange && onTimerDurationChange(timer, value);
  };

  const handleTimerNameChange = (value: string) => {
    onTimerNameChange && onTimerNameChange(value);
  };

  const handleTimerSave = () => {
    onTimerSave && onTimerSave(timer);
  };

  return (
    <div>
      <TextBox placeholder="Type your timer's name here ..."
               value={name}
               onValueChange={handleTimerNameChange}
      />

      <NumericTextBox value={duration.hours}
                      onValueChange={(value) => handleTimerValueChange({ hours: value })} />
      <NumericTextBox value={duration.minutes}
                      onValueChange={(value) => handleTimerValueChange({ minutes: value })} />
      <NumericTextBox value={duration.seconds}
                      onValueChange={(value) => handleTimerValueChange({ seconds: value })} />

      <Button onClick={handleTimerSave}>Save</Button>
    </div>
  );
}

export default TimerDetails;