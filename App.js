import React, { Component } from 'react';
import { Text, View, Button, Alert, StyleSheet } from 'react-native';
import Video from 'react-native-video';
import Validate from './src/components/Validate';
import Home from './src/components/Home';

const styles = StyleSheet.create({
});

export default class HelloWorldApp extends Component {

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {/* <Validate></Validate>       */}
        <Home></Home>
      </View>
    );
  }
}