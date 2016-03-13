import createActionType from "actions/createActionType";

const advancedListFactory = (name: string) => ({ elementReducer = null, comparator = null } = {}) => {
  // action types
  console.info(name, elementReducer)
  const computeActionName = (name) => (actionName) => `${actionName}:${name}`;

  const actions = createActionType({
    ADD_ELEMENT: computeActionName(name),
    REMOVE_ELEMENT: computeActionName(name)
  });

  // actions
  const addElement = (element) => ({
    type: actions.ADD_ELEMENT,
    element
  });

  const removeElement = (element) => ({
    type: actions.REMOVE_ELEMENT,
    element
  });

  // selectors
  const getElements = (state: any) => state.elements;
  const setElements = (state: any, elements: Array<any>) => ({ elements });

  // reducers
  const initialState = { elements: [] };
  const elementComparator = comparator || ((a, b) => a === b);

  function reducer(state = initialState, action) {
    switch (action.type) {
      case actions.ADD_ELEMENT:
        return Object.assign({}, state, setElements(state, [
          ...getElements(state),
          action.element
        ]));
      case actions.REMOVE_ELEMENT:
        return Object.assign({}, state, setElements(state,
          getElements(state).filter(element => !elementComparator(element, action.element))
        ));
    }

    if (elementReducer) {
      return Object.assign({ }, state, setElements(state,
        getElements(state).map(element => elementReducer(element, action)))
      );
    }

    return state;
  }

  return {
    // actions
    addElement,
    removeElement,

    // selectors
    getElements,

    // reducer
    reducer
  };
};

export default advancedListFactory;