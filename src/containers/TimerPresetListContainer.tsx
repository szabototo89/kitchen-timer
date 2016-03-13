import * as React from 'react';
import TimerPresetList from 'components/TimerPresetList';
import { SimpleList } from 'reducers/simpleListFactory';
import { editTimerPreset, saveTimerPreset } from 'reducers/timerPresetReducer';
import { changeTimerPresetDuration, changeTimerPresetName } from 'reducers/timerPresetReducer';
import { TimerPreset } from "models/TimerPreset";
import { Duration } from "models/Duration";
import { startActiveTimer } from 'reducers/activeTimerReducer';

export default class TimerPresetListContainer extends React.Component<any, any> {
  private container: React.Component<any, any>;

  public constructor({ name }) {
    super({ name });
    this.container = SimpleList(name)(this.mapStateToProps, this.mapDispatchToProps)(TimerPresetList);
  }

  private mapDispatchToProps(dispatch, { addElement, removeElement }) {
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

  private mapStateToProps(state) {
    return {
      presets: state
    };
  }

  public render(): JSX.Element {
    return React.createElement(this.container as any);
  }
}