import createActionType from "actions/createActionType";
import ActiveTimer, { ActiveTimerMode } from "models/ActiveTimer";
import { TimerPreset } from "models/TimerPreset";
import { Duration } from "models/Duration";
import { timerInstanceService } from "index";

const listName = 'activeTimers';

// action types
const actions = createActionType({
  SET_ACTIVE_TIMER_MODE: null,
  DECREASE_ACTIVE_TIMER: null
});

// actions
export const setActiveTimerMode = (activeTimer: ActiveTimer, mode: ActiveTimerMode) => ({
  type: actions.SET_ACTIVE_TIMER_MODE,
  activeTimer,
  mode
});

export const decreaseActiveTimer = (activeTimer: ActiveTimer, duration: Duration) => ({
  type: actions.DECREASE_ACTIVE_TIMER,
  activeTimer,
  duration
});

// reducers
export const reducer = (state: ActiveTimer = null, action) => {
  switch (action.type) {
    case actions.SET_ACTIVE_TIMER_MODE:
      return new ActiveTimer(state.timerPreset, action.mode);
    case actions.DECREASE_ACTIVE_TIMER:
      const { activeTimer, duration } = action;
      return new ActiveTimer(activeTimer.timerPreset, activeTimer.mode,
        Duration.add(activeTimer.currentValue, duration)
      );
  }

  return state;
};