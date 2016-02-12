import * as React from 'react';
import Timer from 'models/timer";
import { startTimer, pauseTimer } from "actions/activeTimerActionts";
import ActiveTimerList from 'components/activeTimerList';
import { connect } from 'react-redux';

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

export default connect(state => state, mapDispatchToProps)(ActiveTimerList);