import createActionType from "actions/createActionType";

// Action Types
const ListActionTypes = createActionType({
  ADD_ELEMENT: null,
  REMOVE_ELEMENT: null,
  UPDATE_ELEMENT: null,
  CLEAR_DATA: null
});

// Actions
export const addElement = (listName) => (element) => {
  return {
    type: ListActionTypes.ADD_ELEMENT,
    listName,
    element
  };
};

export const removeElement = (listName) => (element) => {
  return {
    type: ListActionTypes.REMOVE_ELEMENT,
    listName,
    element
  };
};

export const updateElement = (listName) => (element) => {
  return {
    type: ListActionTypes.UPDATE_ELEMENT,
    listName,
    element
  };
};

// Reducers
const initialState = [];

const updateList = (applyList) => (state?, action?) => {
  const { listName, element } = action;
  const currentList = state[listName] || [];
  // if (!currentList) { return state; }

  return applyList(currentList, element);
};

const addElementReducer = updateList((currentList, element) => {
  return [ ...currentList, element ];
});

const removeElementReducer = elementComparator => updateList((currentList, element) => {
  return currentList.filter(el => !elementComparator(el, element));
});

const updateElementReducer = elementComparator => updateList((currentList, element) => {
  return currentList.map(el => {
    if (elementComparator(el, element)) {
      return element;
    }

    return el;
  });
});

const clearDataReducer = updateList(() => []);

const listReducer = (elementComparator = ((a, b) => a === b)) => (state, action) => {
  if (!state || !action) return initialState;

  switch (action.type) {
    case ListActionTypes.CLEAR_DATA:
      return clearDataReducer(state);

    case ListActionTypes.ADD_ELEMENT:
      return addElementReducer(state, action);

    case ListActionTypes.REMOVE_ELEMENT:
      return removeElementReducer(elementComparator)(state, action);

    case ListActionTypes.UPDATE_ELEMENT:
      return updateElementReducer(elementComparator)(state, action);
  }

  return state;
};

// Selectors

export const getElements = (listName) => (state) => {
  return state;
};

export default listReducer;