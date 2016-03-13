import createActionType from "actions/createActionType";
import { Duration } from "models/Duration";

// Action types
const actions = createActionType({
  EDIT_TIMER_PRESET: null,
  SAVE_TIMER_PRESET: null,
  CHANGE_DURATION: null,
  CHANGE_NAME: null
});

// Actions
export const editTimerPreset = (timerPreset) => ({
  type: actions.EDIT_TIMER_PRESET,
  timerPreset
});

export const saveTimerPreset = (timerPreset) => ({
  type: actions.SAVE_TIMER_PRESET,
  timerPreset
});

export const changeTimerPresetDuration = (timerPreset, { hour = 0, minute = 0, second = 0 }) => ({
  type: actions.CHANGE_DURATION,
  timerPreset,
  duration: new Duration(hour, minute, second)
});

export const changeTimerPresetName = (timerPreset, value) => ({
  type: actions.CHANGE_NAME,
  timerPreset,
  value
});

// Reducer
const initialState: any = { };

export function reducer(state = initialState, action) {
  const { timerPreset } = action;
  if (state !== timerPreset) return state;

  switch (action.type) {
    case actions.EDIT_TIMER_PRESET:
      return Object.assign({}, state, {
        isEditMode: true
      });

    case actions.SAVE_TIMER_PRESET:
      return Object.assign({}, state, {
        isEditMode: false
      });

    case actions.CHANGE_DURATION:
      const { duration } = action;
      return Object.assign({}, state, {
        duration: Duration.add(state.duration, duration)
      });

    case actions.CHANGE_NAME:
      return Object.assign({}, state, {
        name: action.value
      });
  }

  return state;
}