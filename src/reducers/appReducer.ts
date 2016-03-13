import { combineReducers } from 'redux';

import { reducer as activeTimerListReducer } from 'reducers/activeTimerListReducer';
import { reducer as timerPresetListReducer } from 'reducers/timerPresetListReducer';

// reducers
export default combineReducers({
  timerPresets: timerPresetListReducer,
  activeTimers: activeTimerListReducer
});
