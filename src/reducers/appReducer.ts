import { combineReducers } from 'redux';
import listFeatureReducer from 'reducers/listFeatureReducer';

export default combineReducers({
  lists: listFeatureReducer
});