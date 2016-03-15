import createActionType from "actions/createActionType";
import ActiveTimer, { ActiveTimerMode } from "models/ActiveTimer";
import { TimerPreset } from "models/TimerPreset";
import { Duration } from "models/Duration";
import { timerInstanceService } from "index";
import { getActiveTimer, getActiveTimers } from "reducers/activeTimerListReducer";

const listName = 'activeTimers';

// action types
const actions = createActionType({
  SET_ACTIVE_TIMER_MODE: null,
  DECREASE_ACTIVE_TIMER: null,
  RESUME_ACTIVE_TIMER: null
});

// actions
export const resumeActiveTimer = (activeTimer: ActiveTimer) => {
  const { id, currentValue } = activeTimer;
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

  timerInstanceService.startTimer(onTimerTick, onTimerCompleted, currentValue);

  return setActiveTimerMode(activeTimer.id, ActiveTimerMode.COUNTING);
};

export const setActiveTimerMode = (activeTimerId: string, mode: ActiveTimerMode) => ({
  type: actions.SET_ACTIVE_TIMER_MODE,
  activeTimerId,
  mode
});

export const decreaseActiveTimer = (activeTimerId: string, duration: Duration) => ({
  type: actions.DECREASE_ACTIVE_TIMER,
  activeTimerId,
  duration
});

// selectors
export const getActiveTimerMode = (state: ActiveTimer) => state && state.mode;

// reducers
export const reducer = (state: ActiveTimer = null, action) => {
  const { activeTimerId } = action;
  if (activeTimerId !== state.id) return state;

  switch (action.type) {
    case actions.SET_ACTIVE_TIMER_MODE:
      const currentValue = action.mode === ActiveTimerMode.STOPPED
        ? state.timerPreset.duration
        : state.currentValue;

      return new ActiveTimer(state.id, state.timerPreset, action.mode, currentValue);
    case actions.DECREASE_ACTIVE_TIMER:
      const { duration } = action;
      return new ActiveTimer(state.id, state.timerPreset, state.mode,
        Duration.add(state.currentValue, duration)
      );
  }

  return state;
};