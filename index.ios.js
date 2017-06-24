/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Cell from "./app/Cell";

export default class RNExample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{height: 80,width: "100%", backgroundColor:"#363f5e"}}>
          <Text style={{color: "#fff", fontSize: 18,fontWeight:"bold",textAlign: "center",marginTop:46}}>工作台</Text>
        </View>
        <Cell count="40" title="客户管理" parity="odd"/>
        <Cell count="50" title="业务管理" parity="even"/>
        <Cell count="60" title="贷后管理" parity="odd"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#edf1fc'
  }
});

AppRegistry.registerComponent('RNExample', () => RNExample);
