import React, {
  Component,
} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Animated
} from 'react-native';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import WalkthroughComponent from './components/WalkthroughComponent'

import * as reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

export default class AxsyApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <WalkthroughComponent/>
      </Provider>
    )
 }
}
