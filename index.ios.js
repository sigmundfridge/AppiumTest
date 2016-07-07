/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 
import React, {Component} from 'react'
import { AppRegistry } from 'react-native';
import App from './src/index';

class AppiumTest extends Component {
  render() {
    return (
      <App />
    );
  }
};

AppRegistry.registerComponent('AppiumTest', () => AppiumTest);
