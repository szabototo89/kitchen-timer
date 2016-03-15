import * as React from 'react';
import Button from 'common/Button';
import { SimpleButton, PrimaryButton } from 'common/buttons';
import TimerPresetComponent from 'components/TimerPresetComponent';
import TimerPresetEditor from 'components/TimerPresetEditor';

const TimerPresetList = (props) => {
  const { presets } = props;
  const { onElementAdd, onElementRemove, onElementEdit, onElementSave } = props;
  const { onDurationChange, onTimerPresetNameChange } = props;
  const { onTimerStart } = props;

  return (
    <div>
      {presets.map((preset, index) => (
        <div key={index}>
          {!preset.isEditMode &&
            <div>
              <TimerPresetComponent name={preset.name}
                                    duration={preset.duration} />

              <SimpleButton onClick={onElementRemove.bind(null, preset)}>Remove</SimpleButton>
              <SimpleButton onClick={onElementEdit.bind(null, preset)}>Edit</SimpleButton>
              <SimpleButton onClick={onTimerStart.bind(null, preset)}>Start timer</SimpleButton>
            </div>}

          {preset.isEditMode &&
            <div>
              <TimerPresetEditor timerPreset={preset}
                                 onTimerPresetNameChange={onTimerPresetNameChange.bind(null, preset)}
                                 onDurationChange={onDurationChange.bind(null, preset)} />

              <SimpleButton onClick={onElementSave.bind(null, preset)}>Save</SimpleButton>
            </div>}
        </div>
      ))}

      <PrimaryButton onClick={onElementAdd}>
        Add Timer Preset
      </PrimaryButton>
    </div>
  );
};

export default TimerPresetList;