import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLoggerMiddleware from 'redux-logger';
import rootReducer from '../../server/reducer';

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  createLoggerMiddleware()
)(createStore);

export default function configureStore() {
  return createStoreWithMiddleware(rootReducer);
}