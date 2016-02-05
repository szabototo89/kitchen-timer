import ActionTypes from 'actions/timerListActionTypes';

export function createTimer(name: string) {
  return {
    type: ActionTypes.ADD_TIMER,
    name,
    duration: {
      hours: 0, minutes: 0, seconds: 0
    }
  };
}

export function removeTimerFromList(id: string) {
  return {
    type: ActionTypes.REMOVE_TIMER,
    timerId: id
  };
}