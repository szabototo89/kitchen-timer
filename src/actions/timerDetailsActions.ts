import Timer from "models/timer";
import Action from "actions/action";
import ActionTypes from 'actions/actionTypes';

export interface ChangeTimerNameAction extends Action {
  name: string;
}

export function changeTimerName(name:string):ChangeTimerNameAction {
  return {
    type: ActionTypes.timerDetails.CHANGE_NAME,
    name
  };
}

interface TimeDuration {
  hours?: number;
  minutes?: number;
  seconds?: number;
}

export interface ChangeTimerDuration extends Action {
  duration: TimeDuration;
}

export function changeTimerDuration(duration: TimeDuration): ChangeTimerDuration {
  return {
    type: ActionTypes.timerDetails.CHANGE_DURATION,
    duration
  };
}

export function updateTimer(timer: Timer) {
  return {
    type: ActionTypes.timerList.UPDATE_TIMER,
    timer
  };
}