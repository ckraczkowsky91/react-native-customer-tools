import React, { Component } from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import AppMenu from './components/AppMenu';
import PCAPTool from './components/PCAPTool';
import PCAPToolResults from './components/PCAPToolResults';

const StackNavigator = createStackNavigator(
  {
    Home: AppMenu,
    Tool: PCAPTool,
    Detail: PCAPToolResults
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'navy'
      },
      headerTintColor: '#fff'
    }
  }
);

export default createAppContainer(StackNavigator);
