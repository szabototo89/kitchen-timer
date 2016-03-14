import advancedListFactory from 'reducers/advancedListReducer';
import { reducer as activeTimerReducer, decreaseActiveTimer } from 'reducers/activeTimerReducer';
import {TimerPreset} from "models/TimerPreset";
import ActiveTimer from "models/ActiveTimer";
import { timerInstanceService } from "index";
import { Duration } from "models/Duration";

export const {
  reducer,
  addElement,
  removeElement,
  getElements: getActiveTimers
} = advancedListFactory('activeTimers')({
  elementReducer: activeTimerReducer
});

// actions
export const startActiveTimer = (preset: TimerPreset) => {
  const activeTimer = new ActiveTimer(preset);
  timerInstanceService.startTimer(function(dispatch) {
    dispatch(decreaseActiveTimer(activeTimer, new Duration(0, 0, -1)));
  });
  return addElement(activeTimer);
};
