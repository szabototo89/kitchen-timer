import advancedListFactory from 'reducers/advancedListReducer';
import { reducer as activeTimerReducer } from 'reducers/activeTimerReducer';

export const {
  reducer,
  addElement,
  removeElement,
  getElements: getActiveTimers
} = advancedListFactory('activeTimers')({
  elementReducer: activeTimerReducer
});