import * as React from 'react';
import { connect } from 'react-redux';

import Timer from "models/timer";
import TimerDetails from 'components/timerDetails';
import { TimerDetailsProps } from "components/timerDetails";
import { changeTimerDuration, changeTimerName, updateTimer } from "actions/timerDetailsActions";
import { TimerDetailsState } from "reducers/timerDetails";

const mapStateToProps = (state) => {
  const { timerDetails } = state;
  return {
    timer: new Timer(timerDetails.timerId, timerDetails.name, timerDetails.duration)
  };
};

function mapDispatchToProps(dispatch): TimerDetailsProps {
  return {
    onTimerNameChange(value: string) {
      dispatch(changeTimerName(value));
    },

    onTimerDurationChange(timer: Timer, value: any) {
      dispatch(changeTimerDuration(value));
    },

    onTimerSave(timer: Timer) {
      dispatch(updateTimer(timer));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TimerDetails as any);