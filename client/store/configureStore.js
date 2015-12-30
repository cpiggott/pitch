import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLoggerMiddleware from 'redux-logger';
import rootReducer from '../../server/reducer';
import remoteActionMiddleware from '../middleware/remote-action'

const createStoreWithMiddleware = applyMiddleware(
  remoteActionMiddleware(window.socket),
  thunkMiddleware,
  createLoggerMiddleware()
)(createStore);

export default function configureStore() {
  return createStoreWithMiddleware(rootReducer);
}