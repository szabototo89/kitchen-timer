import ActionTypes from 'actions/actionTypes';
import { createAction } from "reducers/createAction";
import Timer from "models/timer";

import activeTimerReducer from 'reducers/activeTimerReducer';

const initialState = {
  timers: []
};

type ActiveTimerListState = typeof initialState;

const activeTimerListReducer = createAction(initialState, {
    [ActionTypes.activeTimerList.REMOVE_FROM_LIST](state:ActiveTimerListState, action) {
      const { timerId } = action;

      return Object.assign({}, state, {
        timers: state.timers.filter(timer => timer.id !== action.timerId)
      });
    },

    [ActionTypes.activeTimerList.ADD_TIMER](state:ActiveTimerListState, action) {
      const { timer: newTimer } = action;

      if (state.timers.some(timer => timer.id === newTimer.id)) return state;

      return Object.assign({}, state, {
        timers: [...state.timers, activeTimerReducer(newTimer, action)]
      });
    }
  },
  (state, action) => {
    const { timer: startedTimer } = action;

    if (!startedTimer) return state;

    return Object.assign({}, state, {
      timers: state.timers.map(activeTimer => {
        if (activeTimer.timer.id === startedTimer.id) {
          return activeTimerReducer(activeTimer, action);
        }

        return activeTimer;
      })
    });
  }
);

export default activeTimerListReducer;