import createActionType from 'actions/createActionType';
import { connect } from "react-redux";

// Action Types
const actions = createActionType({
  ADD_ELEMENT: null,
  REMOVE_ELEMENT: null,
  UPDATE_ELEMENT: null
});

// Actions
const addElement = (name: string) => (element) => {
  return {
    type: actions.ADD_ELEMENT,
    name,
    element
  };
};

const removeElement = (name: string) => (element) => {
  return {
    type: actions.REMOVE_ELEMENT,
    name,
    element
  };
};

const updateElement = (name: string) => (oldElement, newElement) => {
  return {
    type: actions.UPDATE_ELEMENT,
    name,
    oldElement,
    newElement
  };
};

// Selectors
const getListElements = (name, state) => {
  return state.lists[name];
};

// Reducer
const initialState = {};

export const reducer = (customReducers = null, comparators = null) => (state = initialState, action) => {
  const currentElements: Array<any> = state[action.name];
  const comparator: (a: any, b: any) => boolean = comparators[action.name] || ((a, b) => a === b);

  switch (action.type) {
    case actions.ADD_ELEMENT: {
      const elements = currentElements || [];
      return Object.assign({}, state, {
        [action.name]: [ ...elements, action.element ]
      });
    }

    case actions.REMOVE_ELEMENT: {
      const elements = currentElements;
      return Object.assign({}, state, {
        [action.name]: elements.filter(element => !comparator(element, action.element))
      });
    }
  }

  if (customReducers && currentElements) {
    return Object.keys(customReducers).reduce((leftState, listName) => {
      return Object.assign(leftState, {
        [listName]: currentElements.map(element => customReducers[listName](element, action))
      });
    }, {});
  }

  return state;
};

// Containers
export const SimpleList = (name: string) => (mapStateToProps, mapDispatchToProps) => (component) => {
  const _mapStateToProps = (state) => {
    return mapStateToProps(getListElements(name, state) || []);
  };

  const _mapDispatchToProps = (dispatch) => {
    return mapDispatchToProps(dispatch, {
      name,
      addElement: addElement(name),
      removeElement: removeElement(name),
      updateElement: updateElement(name)
    });
  };

  return connect(_mapStateToProps, _mapDispatchToProps)(component);
};

export default reducer;