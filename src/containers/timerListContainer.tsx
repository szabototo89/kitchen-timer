import * as React from 'react';
import { connect } from 'react-redux';

import TimerList from 'components/timerList';

function mapStateToProps(state) {
  debugger;

  return {
    timers: state.timerList.timers
  };
}

export default connect(mapStateToProps)(TimerList as any);
