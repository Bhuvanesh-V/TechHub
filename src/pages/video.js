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
      //<Video source={{uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"}}
      //style={styles.backgroundVideo} />
      //https://r4---sn-npoeener.googlevideo.com/videoplayback?expire=1577387702&ei=VrIEXs_WKOuohwbz3YugDw&ip=161.0.16.22&id=o-AM-TqFiB57eAICfWN5La4kjIYOnEekygVMuGSrP63n67&itag=18&source=youtube&requiressl=yes&mime=video%2Fmp4&gir=yes&clen=20085037&ratebypass=yes&dur=488.153&lmt=1480996710159951&fvip=4&fexp=23842630,23860863&c=WEB&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRAIgZmieNpaK88RIVuUKofs29TZHQvyw5A7f74--3_S9gmwCIAREZLsEAtPCyOHlqPuUzAyV1lQVjBblnlnLut3MzC5G&video_id=r_5P6GVYJpY&title=C%23+Fundamentals+for+Absolute+Beginners-+00+Course+Introduction&rm=sn-ab5ee77z&req_id=3fe591c19aa5a3ee&ipbypass=yes&redirect_counter=2&cm2rm=sn-cvhse7z&cms_redirect=yes&mip=150.107.121.2&mm=34&mn=sn-npoeener&ms=ltu&mt=1577366054&mv=u&mvi=3&pl=24&lsparams=ipbypass,mip,mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRgIhAL53ZQGCm0Zh2MHziDDGrYlIJmW6KK-2WAxhugBQyrS3AiEAuWNHL9Lhwz1luOXPDOtb7MI_YlUK453h6wv0W3OOfM8=
      return (<Video source={{uri: "https://firebasestorage.googleapis.com/v0/b/techhub-bhuvan.appspot.com/o/CSharpFundamentals.mp4?alt=media&token=c6b4e666-558a-46b7-bf05-bcf204796ca8"}}
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