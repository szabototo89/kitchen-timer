import advancedListFactory from 'reducers/advancedListReducer';
import { reducer as activeTimerReducer, decreaseActiveTimer, getActiveTimerMode } from 'reducers/activeTimerReducer';
import {TimerPreset} from "models/TimerPreset";
import ActiveTimer from "models/ActiveTimer";
import { timerInstanceService } from "index";
import { Duration } from "models/Duration";
import IdGenerator from 'utils/idGenerator';
import { ActiveTimerMode } from "models/ActiveTimer";
import createActionType from "actions/createActionType";

const idGenerator = new IdGenerator('active-timer');

const {
  reducer,
  addElement,
  removeElement,
  getElements: getActiveTimers
} = advancedListFactory('activeTimers')({
  elementReducer: activeTimerReducer
});

export {
  reducer,
  removeElement,
  getActiveTimers
};

// action types

// selectors
export const getActiveTimer = (id) => (state) => state.filter(timer => timer.id === id)[0];

// actions
export const startActiveTimer = (preset: TimerPreset) => {
  const id = idGenerator.getId();

  const onTimerTick = function(dispatch, getState) {
    const state = getState();
    const timers = getActiveTimers(state.activeTimers);
    const activeTimer = getActiveTimer(id)(timers);
    const mode = getActiveTimerMode(activeTimer);

    if (mode !== ActiveTimerMode.COUNTING) {
      return true;
    }

    dispatch(decreaseActiveTimer(id, new Duration(0, 0, -1)));
  };

  const onTimerCompleted = function(dispatch) {

  };

  timerInstanceService.startTimer(onTimerTick, onTimerCompleted, preset.duration);

  const activeTimer = new ActiveTimer(id, preset, ActiveTimerMode.COUNTING);
  return addElement(activeTimer);
};

