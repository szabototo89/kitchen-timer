import * as React from 'react';
import { connect } from 'react-redux';

import TimerList from 'components/timerList';
import { removeTimer } from "actions/timerListActions";

function mapStateToProps(state) {
  return {
    timers: state.timerList.timers
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onTimerRemove(timerId: string) {
      dispatch(removeTimer(timerId));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TimerList as any);
