import { createAction } from "reducers/createAction";
import Timer from "models/timer";

interface TimerListReducerState {
  timers: Array<Timer>;
}

const initialState: TimerListReducerState = {
  timers: []
};

const timerListReducer = createAction(initialState, {
  
});
