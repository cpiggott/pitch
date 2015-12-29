import 'babel-core/polyfill';
import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './containers/App';

const store = configureStore();

window.reduxStore = store;

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);