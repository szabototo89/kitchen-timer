import { createStore, applyMiddleware } from 'redux';

const logger = store => next => action => {
  console.group(action.type);
  console.info('dispatching ', action);
  const result = next(action);
  console.info('next state ', store.getState());
  console.groupEnd();
  return result;
};

export default function configureStore<T>(reducer, initialState: T = undefined) {
  return createStore(reducer, initialState, applyMiddleware(
    logger
  ));
}