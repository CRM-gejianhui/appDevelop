/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Login from "./src/Login";
import BusinessDetail from "./src/business/BusinessDetail";
import { StackNavigator } from 'react-navigation';

const App = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },
  BusinessDetail: {
    screen: BusinessDetail,
    navigationOptions: {
      header: null
    }
  },
});

export default class RNExample extends Component {
  render() {
    return (
      <App/>
    );
  }
}

AppRegistry.registerComponent('RNExample', () => RNExample);
