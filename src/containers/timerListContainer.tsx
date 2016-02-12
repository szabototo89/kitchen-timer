import * as React from 'react';
import { connect } from 'react-redux';

import TimerList from 'components/timerList';
import { startTimer, removeTimer, editTimer } from "actions/timerListActions";
import Timer from "models/timer";

function mapStateToProps(state) {
  return {
    timers: state.timerList.timers
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onTimerRemove(timerId: string) {
      dispatch(removeTimer(timerId));
    },

    onTimerEdit(timer: Timer) {
      dispatch(editTimer(timer));
    },

    onTimerStart(timer: Timer) {
      dispatch(startTimer(timer));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TimerList as any);
