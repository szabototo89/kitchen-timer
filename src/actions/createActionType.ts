interface ActionType {
  [actionType: string]: string | ActionType;
}

export default function createActionType<TActionType>(actionTypes: TActionType): TActionType {

  function _getActionTypeValue(prefix: string, actionType: string) {
    return prefix !== '' ? `${prefix}.${actionType}` : actionType;
  }

  function _createActionType(prefix: string, actionTypes: TActionType): ActionType {
    const result: ActionType = {};

    for (const actionType of Object.keys(actionTypes)) {
      const value = actionTypes[actionType];
      if (value instanceof Function) {
        result[actionType] = _getActionTypeValue(prefix, value(actionType));
      }
      else if (value instanceof Object) {
        result[actionType] = _createActionType(_getActionTypeValue(prefix, actionType), value);
      }
      else {
        result[actionType] = _getActionTypeValue(prefix, actionType);
      }
    }

    return result;
  }

  return _createActionType('', actionTypes) as any;
}