import Duration from "models/duration";
import Timer from "models/timer";
import {createAction} from "reducers/createAction";
import ActionTypes from 'actions/actionTypes';
import { ChangeTimerNameAction, ChangeTimerDuration } from 'actions/timerDetailsActions';
import { getValueOrDefault } from 'utils/utils';

export class TimerDetailsState {
  public constructor(
    public timerId: string = null,
    public name: string = '',
    public duration: Duration = null) {
  }
}

const initialState = new TimerDetailsState(null, null, new Duration());

const timerDetails = createAction(initialState, {
  [ActionTypes.timerDetails.CHANGE_NAME](state: TimerDetailsState, action: ChangeTimerNameAction) {
    const { name } = action;
    return new TimerDetailsState(
      state.timerId, name, state.duration
    );
  },

  [ActionTypes.timerDetails.CHANGE_DURATION](state: TimerDetailsState, action: ChangeTimerDuration) {
    const { hours, minutes, seconds } = action.duration;
    const { timerId, name, duration } = state;

    function determineValue(actual, previous) {
      return Math.max(getValueOrDefault(actual, previous), 0)
    }

    return new TimerDetailsState(
      timerId, name, new Duration(determineValue(hours, duration.hours),
                                  determineValue(minutes, duration.minutes),
                                  determineValue(seconds, duration.seconds))
    );
  }
});

export default timerDetails;