import createActionType from "actions/createActionType";

const ActionTypes = createActionType({
  timerDetails: {
    CHANGE_NAME: null,
    CHANGE_DURATION: null
  }
});

export default ActionTypes;