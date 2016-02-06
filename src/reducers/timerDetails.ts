import Duration from "models/duration";
import Timer from "models/timer";
import {createAction} from "reducers/createAction";
import ActionTypes from 'actions/actionTypes';
import { ChangeTimerNameAction } from 'actions/timerDetailsActions';

export class TimerDetailsState {
  public constructor(
    public timerId: string = null,
    public name: string = '',
    public duration: Duration = null) {
  }
}

const initialState = new TimerDetailsState();

const timerDetails = createAction(initialState, {
  [ActionTypes.timerDetails.CHANGE_NAME](state, action: ChangeTimerNameAction) {
    const { name } = action;
    return new TimerDetailsState(
      state.timerId, name, state.duration
    );
  },

  [ActionTypes.timerDetails.CHANGE_DURATION](state, action) {
    const { hours, minutes, seconds } = action;
    const { timerId, name, duration } = state;

    return new TimerDetailsState(
      timerId, name, new Duration(hours || duration.hours,
                                  minutes || duration.minutes,
                                  seconds || duration.seconds)
    );
  }
});

export default timerDetails;