import React, { Component } from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import AppMenu from './components/AppMenu';

const StackNavigator = createStackNavigator({
  Home: {
    screen: AppMenu
  }
});

export default createAppContainer(StackNavigator);
