/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import AppRoot from './js';

export default class Todo extends Component {
  render() {
    return (
      <AppRoot />
    );
  }
}


AppRegistry.registerComponent('Todo', () => Todo);
