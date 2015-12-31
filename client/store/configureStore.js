import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLoggerMiddleware from 'redux-logger';
import rootReducer from '../reducer';
import remoteActionMiddleware from '../middleware/remote-action'
import { getThisUser } from '../user';

export default function configureStore(socket) {
  const createStoreWithMiddleware = applyMiddleware(
    remoteActionMiddleware(socket, getThisUser),
    thunkMiddleware,
    createLoggerMiddleware()
  )(createStore);
  
  return createStoreWithMiddleware(rootReducer);
}