import {connect} from "react-redux";

import { SimpleList } from 'reducers/simpleListFactory';
import ActiveTimerList from 'components/ActiveTimerList';
import ActiveTimer, { ActiveTimerMode } from "models/ActiveTimer";
import { setActiveTimerMode, decreaseActiveTimer } from "reducers/activeTimerReducer";
import { addElement, removeElement, getActiveTimers } from 'reducers/activeTimerListReducer';
import { Duration } from "models/Duration";

const mapStateToProps = (state) => {
  return {
    activeTimers: getActiveTimers(state.activeTimers)
  };
};

const mapDispatchToProps = (dispatch) => {
  const changeTimerMode = mode => activeTimer => dispatch(setActiveTimerMode(activeTimer, mode));

  return {
    onActiveTimerAdd(timerPreset) {
      dispatch(addElement(new ActiveTimer(timerPreset)));
    },

    onActiveTimerRemove(activeTimer) {
      dispatch(removeElement(activeTimer));
    },

    onActiveTimerStop: changeTimerMode(ActiveTimerMode.STOPPED),
    onActiveTimerPause: changeTimerMode(ActiveTimerMode.PAUSED),
    onActiveTimerStart: changeTimerMode(ActiveTimerMode.COUNTING),

    onActiveTimerDecrease(activeTimer) {
      dispatch(decreaseActiveTimer(activeTimer, new Duration(0, 0, -1)));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ActiveTimerList as any);