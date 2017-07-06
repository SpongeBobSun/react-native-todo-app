import React, { Component } from 'react';
import { Provider } from 'react-redux';

import App from './App';
import store from './store/Config.js';

export default class AppRoot extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}