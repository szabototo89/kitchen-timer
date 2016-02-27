import ActionTypes from 'actions/actionTypes';
import Timer from "models/timer";
import Action from "actions/action";
import Duration from "models/duration";

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

export function updateTimer(timer: Timer, duration: Duration) {
  return {
    type: ActionTypes.activeTimer.UPDATE_TIMER,
    timer,
    duration
  };
}