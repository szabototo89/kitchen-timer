import { combineReducers } from 'redux';
import { reducer as simpleListReducer } from 'reducers/simpleListFactory';
import { reducer as timerPresetReducer } from 'reducers/timerPresetReducer';

// reducers
export default combineReducers({
  lists: simpleListReducer({
    timerPresets: timerPresetReducer
  }, null)
});