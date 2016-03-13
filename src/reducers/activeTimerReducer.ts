import createActionType from "actions/createActionType";
import { addElement } from 'reducers/simpleListFactory';
import ActiveTimer from "models/ActiveTimer";

const listName = 'activeTimers';

// action types
const actions = createActionType({
  START_ACTIVE_TIMER: null
});

// actions
export const startActiveTimer = (preset) => {
  const activeTimer = new ActiveTimer(preset);
  return addElement(listName)(activeTimer);
};