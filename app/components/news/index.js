/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

class NewsComponent extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>news Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default NewsComponent;
