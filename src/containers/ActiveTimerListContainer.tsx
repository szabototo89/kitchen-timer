import {connect} from "react-redux";

import { SimpleList } from 'reducers/simpleListFactory';
import ActiveTimerList from 'components/ActiveTimerList';
import ActiveTimer, { ActiveTimerMode } from "models/ActiveTimer";
import { setActiveTimerMode, decreaseActiveTimer, resumeActiveTimer } from "reducers/activeTimerReducer";
import { removeElement, getActiveTimers } from 'reducers/activeTimerListReducer';
import { Duration } from "models/Duration";

const mapStateToProps = (state) => {
  return {
    activeTimers: getActiveTimers(state.activeTimers)
  };
};

const mapDispatchToProps = (dispatch) => {
  const changeTimerMode = mode => activeTimer => dispatch(setActiveTimerMode(activeTimer.id, mode));

  return {
    onActiveTimerRemove(activeTimer) {
      dispatch(removeElement(activeTimer));
    },

    onActiveTimerPause: changeTimerMode(ActiveTimerMode.PAUSED),
    onActiveTimerStop: changeTimerMode(ActiveTimerMode.STOPPED),

    onActiveTimerResume(activeTimer: ActiveTimer) {
      dispatch(resumeActiveTimer(activeTimer));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActiveTimerList as any);