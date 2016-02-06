import Action from "actions/action";

export interface ActionResult<TState> {
  [actionType: string]: (state: TState, action: any) => TState;
}

export function createAction<TState, TAction extends Action>(initialState: TState, handlers?: ActionResult<TState>) {
  return function (state: TState, action: TAction): TState {
    if (!state) return initialState;
    if (!handlers) return state;

    for (const actionType of Object.keys(handlers)) {
      if (action.type === actionType) {
        const handler = handlers[actionType];
        return handler(state, action);
      }
    }

    return state;
  };
}