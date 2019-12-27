import React, { Component } from 'react';
import { StyleSheet, View, Alert, Image } from 'react-native';
import { ScrollView, Text } from 'react-native';

export class HubList extends Component {

    render() {
        var videoGallery = [];
        for (let video of this.props.subCategory) {
            videoGallery.push(
                <View style={styles.videoGrid}  onTouchEnd={this.props.playVideo.bind(this, {subTitle: video.subTitle, videoTitle: video.videoTitle, url: video.url })}>
                    <View style={styles.videoRow}>
                        <Text style={styles.labels} >{video.videoTitle}</Text>
                    </View>
                </View>
            )
        }
        return (
            <ScrollView style={styles.scrollview}>
                <View style={styles.home}>
                    {videoGallery}
                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    home: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'space-around',
        justifyContent: 'space-around',
        backgroundColor: '#FFF'
    },
    videoRow: {
        flexDirection: 'row'
    },
    scrollview: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FFF'
    },
    labels: {
        fontSize: 18,
        color: '#ffffff',
        fontWeight: "600",
        overflow: 'hidden'
    },
    logo: {
        width: '10%',
        height: '100%'
    },
    videoGrid: {
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 100,
        borderRadius: 5,
        backgroundColor: '#7029e9'
    },
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
})