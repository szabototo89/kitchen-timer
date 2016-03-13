import {  } from 'redux';
import { SimpleList } from 'reducers/simpleListFactory';
import ActiveTimerList from 'components/ActiveTimerList';
import ActiveTimer from "models/ActiveTimer";

const mapStateToProps = (state) => {
  return {
    activeTimers: state
  };
};

const mapDispatchToProps = (dispatch, { addElement, removeElement }) => {
  return {
    onActiveTimerAdd(timerPreset) {
      dispatch(addElement(new ActiveTimer(timerPreset)));
    },

    onActiveTimerRemove(timerPreset) {
      dispatch(removeElement(timerPreset));
    }
  }
};

export default SimpleList('activeTimers')(mapStateToProps, mapDispatchToProps)(ActiveTimerList);