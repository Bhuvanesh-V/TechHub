import React, { Component } from 'react';
import { Text, View, Button, Alert, StyleSheet } from 'react-native';
import Video from 'react-native-video';


// Later on in your styles..
const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 10,
    left: 10,
    bottom: 10,
    right: 10,
    height: '40%',
    width: '80%',
    borderColor: 'blue',
    borderWidth: 2,
    borderRadius: 5
  },
});

export default class HelloWorldApp extends Component {
  constructor () {
    super()
    this.state = {
      showText: false
    }
 }
  getGreetings = () => {
    this.setState({showText: true })
    Alert.alert("Happy Coding React Native");
  }
  showGreet = () => {
    if (this.state.showText) {
      return (<Video source={{uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"}}
      style={styles.backgroundVideo} />);
    } else {
      return null;
    }
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button title="try This!" onPress={this.getGreetings}></Button>
        {this.showGreet()}
        
      </View>
    );
  }
}