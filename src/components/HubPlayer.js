import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native';
import VideoPlayer from 'react-native-video-controls';


// Later on in your styles..
const styles = StyleSheet.create({
    backgroundVideo: {
        //flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        height: '40%',
        width: '100%',
        borderColor: 'silver',
        borderWidth: 0.1
    },
    inputtxt: {
        marginVertical: 1,
        borderBottomColor: 'silver',
        borderWidth: 1,
        fontSize: 16,
        textAlign: "center",
        width: "100%",
        height: "10%",
        color: '#000000'
    },
    buttongruop: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    }
});

export class HubPlayer extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <VideoPlayer style={styles.backgroundVideo} resizeMode={"contain"} hideShutterView={false}
                source={{ uri: this.props.uri}}/>
            <View style={styles.buttongruop}>
                <Button title="Like" />
                <Button title="MyList" color="#841584" />
            </View>
            <TextInput placeholder="+ Take Notes" style={styles.inputtxt}></TextInput>
        </View>
        );
    }
}


            