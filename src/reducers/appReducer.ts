import { combineReducers } from 'redux';
import timerDetails from 'reducers/timerDetails';
import timerListReducer from 'reducers/timerListReducer';

export default combineReducers({
  timerDetails,
  timerList: timerListReducer
});