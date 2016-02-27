import { combineReducers } from 'redux';
import timerDetails from 'reducers/timerDetails';
import timerListReducer from 'reducers/timerListReducer';
import activeTimerListReducer from 'reducers/activeTimerListReducer';

export default combineReducers({
  timerDetails: timerDetails,
  timerList: timerListReducer,
  activeTimerList: activeTimerListReducer
});