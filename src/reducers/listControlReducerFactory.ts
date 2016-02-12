import ActionTypes from 'actions/actionTypes';
import {createAction} from "createAction";

const listControls = new Map();

export function listControlReducerFactory(name: string, initialState) {
  listControls.set(name, {
    ...initialState
  });

  const listControlReducer = createAction({}, {
    [ActionTypes.listControl.ADD_ITEM](state) {

    },

    [ActionTypes.listControl.REMOVE_ITEM](state) {

    }
  });
}

export default listControlReducerFactory;