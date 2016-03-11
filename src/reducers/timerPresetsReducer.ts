import { compose } from 'redux';
import simpleListReducer, { addElement, removeElement, updateElement, getElements } from "reducers/simpleListReducer";
import { TimerPreset } from "models/TimerPreset";
import { Duration } from "models/Duration";

const listName = 'timerPresets';

// Actions
export function addTimerPreset(name: string) {
  const timer = new TimerPreset(name, new Duration(0, 0, 0));
  return addElement(listName)(timer);
}

export function removeTimerPreset(timer: TimerPreset) {
  return removeElement(listName)(timer);
}

export function updateTimerPreset(timer: TimerPreset) {
  return updateElement(listName)(timer);
}

// Reducers
const initialState = [];

export function timerPresetsReducer(state = initialState, action) {
  return state;
}

const timerPresetComparator = (a, b) => a.id === b.id;

// Selectors

export const getTimerPresets = (state) => state.timerPresets;

export default function(state, action) {
  const innerState = simpleListReducer(timerPresetComparator)(state, action);
  return timerPresetsReducer(innerState, action);
}