import * as React from 'react';
import Timer from 'models/timer';
import { startTimer, pauseTimer } from "actions/activeTimerActions";
import ActiveTimerList from 'components/activeTimerList';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    timers: state.activeTimerList.timers.map(timer => timer.timer)
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    onStartTimer(timer: Timer) {
      dispatch(startTimer(timer));
    },

    onPauseTimer(timer: Timer) {
      dispatch(pauseTimer(timer));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ActiveTimerList as any);