import * as React from 'react';
import TimerPresetList from 'components/TimerPresetList';
import { SimpleList } from 'reducers/simpleListFactory';
import { addElement, removeElement, getElements } from 'reducers/timerPresetListReducer';
import { editTimerPreset, saveTimerPreset } from 'reducers/timerPresetReducer';
import { changeTimerPresetDuration, changeTimerPresetName } from 'reducers/timerPresetReducer';
import { TimerPreset } from "models/TimerPreset";
import { Duration } from "models/Duration";
import { startActiveTimer } from 'reducers/activeTimerReducer';
import { connect } from "react-redux";

function mapDispatchToProps(dispatch) {
  return {
    onElementAdd() {
      const timer = new TimerPreset('my-timer', new Duration(0, 0, 0));
      dispatch(addElement(timer));
    },
    onElementRemove(element) {
      dispatch(removeElement(element));
    },
    onElementEdit(element) {
      dispatch(editTimerPreset(element));
    },
    onElementSave(element) {
      dispatch(saveTimerPreset(element));
    },
    onDurationChange(element, duration) {
      dispatch(changeTimerPresetDuration(element, duration));
    },
    onTimerPresetNameChange(element, name) {
      dispatch(changeTimerPresetName(element, name));
    },
    onTimerStart(preset) {
      dispatch(startActiveTimer(preset));
    }
  };
}

function mapStateToProps(state) {
  return {
    presets: getElements(state.timerPresets)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TimerPresetList as any);