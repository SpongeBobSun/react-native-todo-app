/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import { Navigation } from 'react-native-navigation';

import { registerScreens } from './js';

registerScreens();

Navigation.startSingleScreenApp({
  screen: {
    screen: 'todo.MainScreen',
    title: 'Todo',
    navigatorStyle: {},
    navigatorButtons: {},
  },
})
