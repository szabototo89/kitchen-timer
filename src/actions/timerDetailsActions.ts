import { ActionBase } from "actions/actionBase";
import * as ActionTypes from 'actions/timerDetailsActionTypes';

export interface ChangeNameActionType extends ActionBase {
  name: string;
}

export interface EditTimerActionType extends ActionBase {
  editMode: boolean;
}

export function changeName(value: string): ChangeNameActionType {
  return {
    type: ActionTypes.CHANGE_NAME,
    name: value
  };
}

export function setDuration({ hours = 0, minutes = 0, seconds = 0 }) {
  return {
    type: ActionTypes.SET_DURATION,
    duration: {
      hours,
      minutes,
      seconds
    }
  };
}

export function enterEditMode(timer) {
  return {
    type: ActionTypes.EDIT_MODE,
    timer,
    isEditMode: true
  };
}

export function exitEditMode(timer) {
  return {
    type: ActionTypes.EDIT_MODE,
    timer,
    isEditMode: false
  };
}

export function saveTimer(timer) {
  return {
    type: ActionTypes.SAVE_TIMER,
    timer
  };
}