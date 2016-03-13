import * as React from 'react';
import Button from 'common/button';
import TimerPresetComponent from 'components/TimerPresetComponent';
import TimerPresetEditor from 'components/TimerPresetEditor';

const TimerPresetList = (props) => {
  const { presets } = props;
  const { onElementAdd, onElementRemove, onElementEdit, onElementSave } = props;
  const { onDurationChange, onTimerPresetNameChange } = props;
  const { onTimerStart } = props;

  return (
    <div>
      <h1>Timer Presets</h1>

      {presets.map((preset, index) => (
        <div key={index}>
          {!preset.isEditMode &&
            <div>
              <TimerPresetComponent name={preset.name}
                                    duration={preset.duration} />

              <Button onClick={onElementRemove.bind(null, preset)}>Remove</Button>
              <Button onClick={onElementEdit.bind(null, preset)}>Edit</Button>
              <Button onClick={onTimerStart.bind(null, preset)}>Start timer</Button>
            </div>}

          {preset.isEditMode &&
            <div>
              <TimerPresetEditor timerPreset={preset}
                                 onTimerPresetNameChange={onTimerPresetNameChange.bind(null, preset)}
                                 onDurationChange={onDurationChange.bind(null, preset)} />

              <Button onClick={onElementSave.bind(null, preset)}>Save</Button>
            </div>}
        </div>
      ))}

      <Button onClick={onElementAdd}>
        Add Timer Preset
      </Button>
    </div>
  );
};

export default TimerPresetList;