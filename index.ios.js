/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import BusinessDetail from "./src/business/BusinessDetail";

export default class RNExample extends Component {
  render() {
    return (
      <BusinessDetail/>
    );
  }
}

AppRegistry.registerComponent('RNExample', () => RNExample);
