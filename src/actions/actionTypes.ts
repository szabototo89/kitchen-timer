import createActionType from "actions/createActionType";

const ActionTypes = createActionType({
  timerDetails: {
    CHANGE_NAME: null,
    CHANGE_DURATION: null,
    LOAD_TIMER: null
  },

  timerList: {
    ADD_TIMER: null,
    REMOVE_TIMER: null,
    UPDATE_TIMER: null,
    START_TIMER: null
  },

  activeTimer: {
    START_TIMER: null,
    PAUSE_TIMER: null,
    UPDATE_TIMER: null
  },

  activeTimerList: {
    ADD_TIMER: null,
    REMOVE_FROM_LIST: null
  },

  listControl: {
    ADD_ITEM: null,
    REMOVE_ITEM: null
  }
});

export default ActionTypes;