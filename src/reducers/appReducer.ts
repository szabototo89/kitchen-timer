import { removeTimerFromList } from 'actions/timerListActions';
import TimerListActionTypes from 'actions/timerListActionTypes';
import * as TimerDetailsActionTypes from 'actions/timerDetailsActionTypes';
import assign from 'utils/assign';
import IdGenerator from 'utils/idGenerator';
import timerDetailsReducer from 'reducers/timerDetailsReducer';

import { combineReducers } from 'redux';

interface Action {
  type: string;
}

interface TimerListAction extends Action {
  timerId?: string;
  name?: string;
  duration?: TimeDuration;
}

interface TimeDuration {
  hours: number;
  minutes: number;
  seconds: number;
}

export interface Timer {
  id: string;
  name: string;
  duration: TimeDuration;
  options?: {
    editMode?: boolean;
  }
}

interface TimerListState {
  timers: Array<Timer>;
}

const idGenerator = new IdGenerator('timer_');
const initialState = { timers: [] };

export function timerList(state: TimerListState = initialState, action: TimerListAction): TimerListState {
  function createTimer(name: string = '', duration: TimeDuration = null): Timer {
    return {
      id: idGenerator.getId(),
      name,
      duration: duration || {
        hours: 0, minutes: 0, seconds: 0
      },
      options: {
        editMode: false
      }
    };
  }

  switch (action.type) {
    case TimerListActionTypes.CHANGE_TIMER: {
      const { timerId, duration, name } = action;
      return assign({}, state, {
        timers: [
          ...state.timers.filter(t => t.id !== timerId),
          createTimer(name, duration)
        ]
      });
    }

    case TimerListActionTypes.REMOVE_TIMER: {
      const { timerId } = action;
      return assign({}, state, {
        timers: state.timers.filter(timer => timer.id !== timerId)
      });
    }

    case TimerListActionTypes.ADD_TIMER: {
      const { name, duration } = action;

      return assign({}, state, {
        timers: [
          ...state.timers,
          createTimer(name, duration)
        ]
      });
    }

    case TimerDetailsActionTypes.EDIT_MODE: {
      const { isEditMode, timer: changedTimer } = action;
      if (isEditMode) break;

      return assign({}, state, {
        timers: state.timers.map((timer) => {
          if (timer.id === changedTimer.id) {
            return changedTimer;
          }
          return timer;
        })
      });
    }
  }

  return state;
}

export default combineReducers({
  timerList: timerList,
  timerDetails: timerDetailsReducer
});