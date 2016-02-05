import { createStore, applyMiddleware } from 'redux';
import appReducer from 'reducers/appReducer';

const logger = store => next => action => {
  console.group(action.type);
  console.info('dispatching ', action);
  const result = next(action);
  console.info('next state ', store.getState());
  console.groupEnd();
  return result;
};

export default function configureStore<T>(initialState: T = undefined) {
  return createStore(appReducer, initialState, applyMiddleware(
    logger
  ));
}