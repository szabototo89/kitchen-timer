import * as React from 'react';
import TimerPresetList from 'components/TimerPresetList';
import { SimpleList } from 'reducers/simpleListFactory';

export default class TimerPresetListContainer extends React.Component<any, any> {
  private container: React.Component<any, any>;

  public constructor({ name }) {
    super({ name });
    this.container = SimpleList(name)(this.mapStateToProps, this.mapDispatchToProps)(TimerPresetList);
  }

  private mapDispatchToProps(dispatch, { addElement, removeElement }) {
    return {
      onElementAdd(element) {
        dispatch(addElement(element));
      },
      onElementRemove(element) {
        dispatch(removeElement(element));
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