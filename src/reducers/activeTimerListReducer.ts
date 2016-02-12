import ActionTypes from 'actions/actionTypes';
import { createAction } from "reducers/createAction";

const initialState = {
  timers: []
};

const activeTimerListReducer = createAction(initialState, {
  [ActionTypes.activeTimerList.REMOVE_FROM_LIST](state) {

  }
});

export default activeTimerListReducer;