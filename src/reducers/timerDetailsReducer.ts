import * as ActionTypes from 'actions/timerDetailsActionTypes';
import { changeName } from 'actions/timerDetailsActions'
import { Timer } from "reducers/appReducer";
import assign from "utils/assign";
import { ChangeNameActionType, EditTimerActionType } from "actions/timerDetailsActions";
import { combineReducers } from 'redux';

type TimerActions = ChangeNameActionType & EditTimerActionType;

interface TimerDetails {
  isEditMode: boolean;
  timer: Timer;
}

const initialState: Timer = {
  id: null,
  name: null,
  duration: null
};

function timerReducer(state: Timer = initialState, action) {
  switch (action.type) {
    case ActionTypes.CHANGE_NAME: {
      return assign({}, state, {
        name: state.name
      });
    }
    case ActionTypes.SET_DURATION: {
      const { duration: newDuration } = action;
      const { duration: actualDuration } = state;

      return assign({}, state, {
        duration: {
          hours: newDuration.hours || actualDuration.hours,
          minutes: newDuration.minutes || actualDuration.minutes,
          seconds: newDuration.seconds || actualDuration.seconds
        }
      });
    }
  }

  return state;
}

const initialTimerDetailsState: TimerDetails = {
  isEditMode: false,
  timer: null
};

export default function timerDetailsReducer(state: TimerDetails = initialTimerDetailsState, action) {
  switch (action.type) {
    case ActionTypes.EDIT_MODE: {
      const { isEditMode, timer } = action;

      return assign({}, state, {
        isEditMode,
        timer
      });
    }
  }

  return assign({}, state, {
    timer: timerReducer(state.timer, action)
  });
}