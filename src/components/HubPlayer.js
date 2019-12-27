import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Text, Alert } from 'react-native';
import VideoPlayer from 'react-native-video-controls';


// Later on in your styles..
const styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        height: '40%',
        width: '100%',
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
    },
    btns: {
        height: 30,
        width: 80,
        marginLeft: 10,
        backgroundColor: "#7029e9",
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    reaction: {
        fontSize: 20,
        color: '#fff'
    }
});

export class HubPlayer extends Component {
    textChange = (e) => {
        Alert.alert(e);
    }
    render() {
        var notes = [];
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <VideoPlayer style={styles.backgroundVideo} resizeMode={"contain"} hideShutterView={false}
                source={{ uri: this.props.uri}}/>
            <View style={styles.buttongruop}>
                <View style={styles.btns} >
                    <Text style={styles.reaction}>Like</Text>
                </View>
                <View style={styles.btns} color="#7029e9">
                    <Text style={styles.reaction}>MyList</Text>
                </View>
            </View>
            <TextInput placeholder="+ Take Notes" style={styles.inputtxt} onKeyPress={this.textChange}></TextInput>
            
        </View>
        );
    }
}


            