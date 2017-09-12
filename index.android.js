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
  View
} from 'react-native';

var Dimensions = require('Dimensions');
export default class RN3 extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.mystyle}>
            Welcome to React Native!{Dimensions.get('window').width}
          </Text>
          <Text style={styles.mystyle}>
            当前屏幕的高度{Dimensions.get('window').height}
          </Text>
          <Text style={styles.mystyle}>
            当前屏幕的分辨率{Dimensions.get('window').scale}
          </Text>

        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //主轴方向居中
    justifyContent:'center',
    backgroundColor: '#F5FCFF',
    alignItems:'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  mystyle:{
    flex:1,
    backgroundColor:'red',
    marginTop:30
  }
});

AppRegistry.registerComponent('RN3', () => RN3);
