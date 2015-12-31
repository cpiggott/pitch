import 'babel-core/polyfill';
import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import io from 'socket.io-client';
import App from './containers/App';

const socket = io(`${location.protocol}//${location.hostname}:3011`);
window.socket = socket;

const store = configureStore(socket);
window.reduxStore = store;

socket.on('state', state =>
  store.dispatch({type: 'SET_STATE', state})
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);