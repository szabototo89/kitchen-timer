import * as React from 'react';
import TextBox from 'common/textbox';
import TimeDurationEditor from 'components/TimeDurationEditor';

const TimerPresetEditor = ({ timerPreset, onDurationChange, onTimerPresetNameChange }) => {
  return <div>
    <TextBox onValueChange={onTimerPresetNameChange.bind(null)} value={timerPreset.name} />
    <TimeDurationEditor duration={timerPreset.duration} onDurationChange={onDurationChange} />
  </div>;
};

export default TimerPresetEditor;