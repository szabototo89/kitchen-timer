import createActionType from "actions/createActionType";

// Action Types
const ListActionTypes = createActionType({
  ADD_ELEMENT: null,
  REMOVE_ELEMENT: null
});

// Actions
export function addElement(listName, element) {
  return {
    type: ListActionTypes.ADD_ELEMENT,
    listName,
    element
  };
}

export function removeElement(listName, element) {
  return {
    type: ListActionTypes.REMOVE_ELEMENT,
    listName,
    element
  };
}

// Reducers
const initialState = {};

const updateList = (applyList) => (state, action) => {
  const { listName, element } = action;
  const currentList = state[listName] || [];
  // if (!currentList) { return state; }

  return Object.assign({}, state, {
    [listName]: applyList(currentList, element)
  })
};

const addElementReducer = updateList((currentList, element) => {
  return [ ...currentList, element ];
});

const removeElementReducer = updateList((currentList, element) => {
  return currentList.filter(el => el !== element);
});

export default function listFeatureReducer(state, action) {
  if (!state) return initialState;

  switch (action.type) {
    case ListActionTypes.ADD_ELEMENT:
      return addElementReducer(state, action);

    case ListActionTypes.REMOVE_ELEMENT:
      return removeElementReducer(state, action);
  }

  return state;
}