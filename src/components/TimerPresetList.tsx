import * as React from 'react';
import Button from 'common/button';
import TimerPresetComponent from 'components/TimerPresetComponent';

const TimerPresetList = ({ presets, onElementAdd, onElementRemove }) => {
  return (
    <div>
      <h1>Timer Presets</h1>

      {presets.map((preset, index) => (
        <div key={index}>
          <TimerPresetComponent name={preset.name}
                                duration={preset.duration} />
          <Button onClick={onElementRemove.bind(null, preset)}>Remove</Button>
        </div>
      ))}

      <Button onClick={onElementAdd.bind(null, { name: 'my-timer-preset' })}>
        Add Timer Preset
      </Button>
    </div>
  );
};

export default TimerPresetList;