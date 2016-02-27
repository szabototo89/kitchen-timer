import ActionTypes from 'actions/actionTypes';
import Action from "actions/action";
import Timer from "models/timer";

export function addTimerToList(): Action {
  return {
    type: ActionTypes.timerList.ADD_TIMER
  };
}

export interface RemoveTimerAction extends Action {
  timerId: string;
}

export function removeTimer(timerId: string) {
  return {
    type: ActionTypes.timerList.REMOVE_TIMER,
    timerId
  };
}

export interface EditTimerAction extends Action {
  timer: Timer;
}

export function editTimer(timer: Timer): EditTimerAction {
  return {
    type: ActionTypes.timerDetails.LOAD_TIMER,
    timer
  };
}

export function startTimer(timer: Timer) {
  return {
    type: ActionTypes.activeTimerList.ADD_TIMER,
    timer
  };
}