import ActionTypes from 'actions/actionTypes';
import Timer from "models/timer";
import Action from "action";

export function pauseTimer(timer: Timer) {
  return {
    type: ActionTypes.activeTimer.PAUSE_TIMER,
    timer
  };
}

export function startTimer(timer: Timer) {
  return {
    type: ActionTypes.activeTimer.START_TIMER,
    timer
  };
}