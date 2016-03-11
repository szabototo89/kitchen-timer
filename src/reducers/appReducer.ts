import { combineReducers } from 'redux';
import { reducer as simpleListReducer } from 'reducers/simpleListFactory';

export default combineReducers({
  lists: simpleListReducer(null, {
    timerPresets: (a, b) => a.name === b.name
  })
});