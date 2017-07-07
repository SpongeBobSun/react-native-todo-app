import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { Navigation } from 'react-native-navigation';

import App from './App';
import AddTodo from './screens/AddTodo';
import store from './store/Config.js';

export function registerScreens() {
  Navigation.registerComponent('todo.MainScreen', () => App, store, Provider);
  Navigation.registerComponent('todo.AddTodo', () => AddTodo, store, Provider);
}