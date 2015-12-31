import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducer';
import thunkMiddleware from 'redux-thunk';
import createLoggerMiddleware from 'redux-node-logger';
import gameMiddleware from '../game/middleware';

const INITIAL_STATE = {
  games: {}
};

const createStoreWithMiddleware = applyMiddleware(
  gameMiddleware,
  thunkMiddleware,
  createLoggerMiddleware()
)(createStore);

export default function makeStore(initialState = INITIAL_STATE) {
  return createStoreWithMiddleware(reducer, initialState);
}