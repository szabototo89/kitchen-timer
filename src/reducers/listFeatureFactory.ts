import {createAction} from "reducers/createAction";
import ActionTypes from "actions/actionTypes";
import assign from "utils/assign";

export class ListFeatureFactory {
  private id:string;

  constructor(public name:string) {
    this.id = `ListFeatureFactory__${name}`;
  }

  public createActions() {
    return {
      addItem: (item) => ({
        $id$: this.id,
        type: ActionTypes.listControl.ADD_ITEM,
        item
      }),

      removeItem: (item) => ({
        $id$: this.id,
        type: ActionTypes.listControl.REMOVE_ITEM,
        item
      })
    };
  }

  public createReducer(initialState, options) {
    const { id } = this;

    // initialize options if they are not defined
    options = assign(options, {
      mapListToState: (list) => list,
      mapStateToList: (state) => state,
      compare: (that, other) => that !== other
    });

    const { mapListToState, mapStateToList, compare } = options;

    return function reducer(state, action) {
      if (!state) return initialState;
      const { $id$: actionId } = action;
      if (actionId !== id) return state;

      return createAction(initialState, {
        [ActionTypes.listControl.REMOVE_ITEM](state) {
          return assign({}, state, mapListToState(mapStateToList(state).filter(item => compare(item, action.item))));
        },

        [ActionTypes.listControl.ADD_ITEM](state) {
          return assign({}, state, mapListToState([...mapStateToList(state), action.item]))
        }
      });
    };
  }
}

export default ListFeatureFactory;