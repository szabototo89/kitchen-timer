import {createAction} from "reducers/createAction";
import ActionTypes from 'actions/actionTypes';
import TimerInstance from "utils/timerInstance";
import {updateTimer} from "actions/activeTimerActions";
import Duration from "models/duration";
import Timer from "models/timer";
import appStore from 'stores/appStore';

const initialState = {
  timer: null,
  duration: null,
  state: null,
  timerInstance: null
};

type ActiveTimerState = typeof initialState;

const activeTimerReducer = createAction(initialState, {

  [ActionTypes.activeTimerList.ADD_TIMER](state, action) {
    return {
      timer: state,
      duration: Duration.copy(state.duration),
      state: 'paused',
      timerInstance: null
    };
  },

  [ActionTypes.activeTimer.START_TIMER](state:ActiveTimerState, action) {
    const { timer } = action;

    if (timer.id !== state.timer.id) return state;

    const timerInstance = new TimerInstance(1000, timer.duration.seconds)
      .on('onInstance', function (steps, count) {
        appStore.dispatch(updateTimer(timer, new Duration(0, 0, -1)));
      })
      .on('onCompleted', function (steps, count) {

      })
      .start();

    return Object.assign({}, state, {
      timerInstance,
      state: 'started'
    });
  },

  [ActionTypes.activeTimer.UPDATE_TIMER](state:ActiveTimerState, action) {
    const { timer, duration } = action;
    const { duration: timerDuration } = state;

    if (state.state === 'paused') return state;

    return Object.assign({}, state, {
      duration: new Duration(
        duration.hours + timerDuration.hours,
        duration.minutes + timerDuration.minutes,
        duration.seconds + timerDuration.seconds
      )
    });
  },

  [ActionTypes.activeTimer.PAUSE_TIMER](state:ActiveTimerState, action) {
    return Object.assign({}, state, {
      state: 'paused'
    });
  }
});


export default activeTimerReducer;