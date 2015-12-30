import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducer';
import thunkMiddleware from 'redux-thunk';
import createLoggerMiddleware from 'redux-node-logger';

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  createLoggerMiddleware()
)(createStore);

export default function makeStore() {
  return createStoreWithMiddleware(reducer);
}