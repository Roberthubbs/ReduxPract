import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from '../reducers/root_reducer';
import { allTodos } from '../reducers/selectors';

const configureStore = (preloadedState = {} ) => {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(logger)
  );
};

export default configureStore;

