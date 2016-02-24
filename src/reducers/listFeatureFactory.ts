import {createAction} from "reducers/createAction";
import ActionTypes from "actions/actionTypes";
import assign from "utils/assign";

export class ListFeatureFactory {
  private id: string;
  private initialState: any;

  constructor(public name: string) {
    this.id = `ListFeatureFactory__${name}`;
  }

  public createReducer(initialState, options) {
    const { id } = this;
    options = assign(options, {
      mapListToState: (list) => list,
      mapStateToList: (state) => state,
      compare: (item, action) => item !== action.item
    });

    const { mapListToState, mapStateToList, compare } = options;

    return function reducer(state, action) {
      if (!state) return initialState;
      const { $id$: actionId } = action;
      if (actionId !== id) return state;

      return createAction(initialState, {
        [ActionTypes.listControl.REMOVE_ITEM](state) {
          return assign({}, state, mapListToState(mapStateToList(state).filter(item => compare(item, action))));
        },

        [ActionTypes.listControl.ADD_ITEM](state) {
          return assign({}, state, mapListToState([...mapStateToList(state), action.item ]))
        }
      });
    }
  }
}

export default ListFeatureFactory;