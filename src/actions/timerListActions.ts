import ActionTypes from 'actions/actionTypes';
import Action from "actions/action";

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