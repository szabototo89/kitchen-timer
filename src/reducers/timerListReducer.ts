import { createAction } from "reducers/createAction";
import ActionTypes from 'actions/actionTypes';
import { RemoveTimerAction } from "actions/timerListActions";
import Timer from "models/timer";
import Duration from "models/duration";
import IdGenerator from 'utils/idGenerator';

interface TimerListReducerState {
  timers: Array<Timer>;
}

const initialState: TimerListReducerState = {
  timers: []
};

const generator = new IdGenerator('timer-');

const timerListReducer = createAction(initialState, {
  [ActionTypes.timerList.ADD_TIMER](state: TimerListReducerState, action): TimerListReducerState {
    const timer = new Timer(generator.getId(), 'new timer', new Duration());

    return Object.assign({}, state, {
      timers: [ ...state.timers, timer ]
    });
  },

  [ActionTypes.timerList.REMOVE_TIMER](state: TimerListReducerState, action: RemoveTimerAction): TimerListReducerState {
    const { timerId } = action;

    return Object.assign({}, state, {
      timers: state.timers.filter(timer => timer.id !== timerId)
    });
  },

  [ActionTypes.timerList.UPDATE_TIMER](state: TimerListReducerState, action): TimerListReducerState {
    const { timer: newTimer } = action;

    return Object.assign({}, state, {
      timers: state.timers.map(timer => {
        if (timer.id === newTimer.id) {
          return newTimer;
        }

        return timer;
      })
    });
  }
});

export default timerListReducer;