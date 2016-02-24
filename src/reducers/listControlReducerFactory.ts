import ActionTypes from 'actions/actionTypes';
import {createAction} from "reducers/createAction";
import assign from "utils/assign";

const listControls = {};

const listControlReducerFactory = (mapStateToList = null, mapListToState = null) => (name: string, initialState) => {
  listControls[name] = assign({}, initialState, {
    $id$: name
  });

  mapListToState = mapListToState || (list => list);
  mapStateToList = mapStateToList || (state => state);

  function listControlActionFactory(name) {
    return {
      addItem(item) {
        return {
          type: ActionTypes.listControl.ADD_ITEM,
          $id$: name,
          item
        };
      },

      removeItem(item) {
        return {
          type: ActionTypes.listControl.REMOVE_ITEM,
          $id$: name,
          item
        };
      }
    };
  }

  function listControlReducer(state, action) {
    if (!state) return initialState;
    const { $id$: id } = action;
    if (id !== name) return state;

    const reducer = createAction(initialState, {
      [ActionTypes.listControl.REMOVE_ITEM](state) {
        return assign({}, state,
          mapListToState(mapStateToList(state).filter(item => item !== action.item))
        );
      },

      [ActionTypes.listControl.ADD_ITEM](state) {
        return assign(state, mapListToState([ ...mapStateToList(state), action.item ]));
      }
    });

    return reducer(state, action);
  }

  return listControlReducer;
};

export default listControlReducerFactory;