import advancedListFactory from 'reducers/advancedListReducer';
import { reducer as timerPresetReducer } from 'reducers/timerPresetReducer';

export const {
  addElement,
  removeElement,
  reducer,
  getElements
} = advancedListFactory('timerPresets')({
  elementReducer: timerPresetReducer
});