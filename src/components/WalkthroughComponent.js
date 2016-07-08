// @flow

'use strict';
import React, {
  Component,
} from 'react';

import {
  Animated,
  Image,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  PanResponder,
  TextInput,
  ScrollView,
  LayoutAnimation
} from 'react-native';

import { connect } from 'react-redux';
import { updateLayout } from '../actions/appState';

class WalkthroughComponent extends Component {

    constructor(props : propTypes) {
        super(props);
    }

    _onLayoutChange(e) {
      const layout = e.nativeEvent.layout;
      const oldLayout = this.props.layout;

      if ((layout && layout.width) !== (oldLayout && oldLayout.width) ||
        (layout && layout.height) !== (oldLayout && oldLayout.height)) {
          this.props.dispatch(updateLayout(layout));
      }
    }


    _renderWalkthrough() {
      const { width, height } = this.props.layout;
//      console.log(width);
//      console.log(height);
        return (
        <Animated.View  style = {[styles.container]} ref="pageHolder" testID = "animatedView">
          <View>
            <View>
              <Text style = {[styles.label1]} testID = "label1">
                Label 1
              </Text>
              <Text style = {[styles.label2]} testID = "label1">
                Label 2
              </Text>
            </View>
          </View>
        </Animated.View>
    );
    }

    render() {
        return (
          <View onLayout={this._onLayoutChange.bind(this)}>
          {this._renderWalkthrough()}
          </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#3944ad'
  },
  contentHolder: {
    backgroundColor: '#fff',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
},
label1: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  label2: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const Walkthrough = connect(state => ({
    layout: state.appState.layout
}))(WalkthroughComponent);

export default Walkthrough;
