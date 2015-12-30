import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducer';
import thunkMiddleware from 'redux-thunk';
import createLoggerMiddleware from 'redux-node-logger';

const INITIAL_STATE = {
  games: {}
};

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  createLoggerMiddleware()
)(createStore);

export default function makeStore(initialState = INITIAL_STATE) {
  return createStoreWithMiddleware(reducer, initialState);
}