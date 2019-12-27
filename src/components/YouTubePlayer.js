import React, { Component } from 'react';
import { Text, View, Button, Alert, StyleSheet } from 'react-native';
import { YouTubeStandaloneAndroid } from 'react-native-youtube';


// Later on in your styles..
const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    height: '40%',
    width: '100%',
    borderColor: 'gray',
    borderWidth: 2,
    overlayColor: 'blue'
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
          YouTubeStandaloneAndroid.playVideo({
          apiKey: 'AIzaSyC2L9dQHfuPV6x7yksx2UOcT1nPS1o5DK8',
          videoId: 'r_5P6GVYJpY',
          lightboxMode: false,
          autoplay: true,
          startTime: 120,
        })
          .then(() => console.log('Standalone Player Exited'))
          .catch(errorMessage => console.error(errorMessage))
      )
    } else {
      return null;
    }
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button title="try This!" onPress={this.getGreetings}></Button>
        <View style={styles.backgroundVideo}>
          {this.showGreet()}
        </View>
      </View>
    );
  }
}