import React, { Component } from 'react';
import { Text, View, Button, Alert, StyleSheet, ScrollView } from 'react-native';
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-controls';


// Later on in your styles..
const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 10,
    right: 10,
    height: '40%',
    width: '100%',
    borderColor: 'silver',
    borderWidth: 0.1
  },
});

export default class HelloWorldApp extends Component {
  constructor() {
    super()
    this.state = {
      showText: false
    }
  }
  getGreetings = () => {
    this.setState({ showText: true })
  }
  showGreet = () => {
    if (this.state.showText) {
      return (
        <ScrollView>
        <VideoPlayer style={styles.backgroundVideo} resizeMode={"contain"} hideShutterView={false} 
          source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/techhub-bhuvan.appspot.com/o/CSharpFundamentals.mp4?alt=media&token=c6b4e666-558a-46b7-bf05-bcf204796ca8' }}
          
        />
        </ScrollView>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button title="try to" onPress={this.getGreetings}></Button>
        {this.showGreet()}

      </View>
    );
  }
}