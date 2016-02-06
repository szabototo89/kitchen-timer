import createActionType from "actions/createActionType";

const ActionTypes = createActionType({
  timerDetails: {
    CHANGE_NAME: null,
    CHANGE_DURATION: null
  },
  timerList: {
    ADD_TIMER: null,
    REMOVE_TIMER: null,
    EDIT_TIMER: null
  }
});

export default ActionTypes;