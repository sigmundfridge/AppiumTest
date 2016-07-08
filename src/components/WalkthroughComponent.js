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
    scrollValue: Animated.Value;

    constructor(props : propTypes) {
        super(props);
        this.scrollValue = new Animated.Value(0);
    }

    _onLayoutChange(e) {
      const layout = e.nativeEvent.layout;
      const oldLayout = this.props.layout;

      if ((layout && layout.width) !== (oldLayout && oldLayout.width) ||
        (layout && layout.height) !== (oldLayout && oldLayout.height)) {
          this.props.dispatch(updateLayout(layout));
      }
    }

    _goForward() {
    }

    _renderWalkthrough() {
      const { width, height } = this.props.layout;

      const contentWidth = width * 0.429;
      const logoHeightMobile = 30 + 9 + 25;
      const contentHeight = height * 0.596;

      const totalWidth = (contentWidth) * 5;
      const controlsWidth = contentWidth * 0.205;
      const sideWidth = (contentWidth * 0.795) / 2;

      const translateX = this.scrollValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -totalWidth]
      });

      const marginBottom = contentHeight * 0.04;

      const animatedViewStyle = {height: contentHeight - 70, width: totalWidth, flexDirection: 'row', alignSelf: 'flex-start', alignItems: 'center', transform: [{translateX}]};
      const screenHolderStyles = {flex: 1, width: contentWidth};

        return (
        <TouchableWithoutFeedback onPress={this._goForward.bind(this)} accessible = {true}>
            <View style={screenHolderStyles} accessible = {true}>
                <View accessible = {true}>
                <Text style = {styles.label1} accessible = {true}>Label 1</Text>
                </View>
                <Text style = {styles.label2} accessible = {true}>Label 2</Text>
              </View>
      </TouchableWithoutFeedback>
    );
    }

    render() {
      let { width, height } = this.props.layout;

      const contentWidth = width ;
      const contentHeight = height;

      const holderStyles = {
        backgroundColor: '#fff',
        width: contentWidth,
        height: contentHeight,
        borderRadius: 10,
        marginTop: 0
      };

      return (
        <View style = {[styles.container]} ref="container" onLayout={this._onLayoutChange.bind(this)}>
          <View style={[styles.contentHolder, holderStyles]}>
            {this._renderWalkthrough()}
          </View>
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
