import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { ScrollView, Text } from 'react-native';

var videoList = [
    {
        name: 'C#',
        category: '.Net',
        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    },
    {
        name: 'VB',
        category: '.Net',
        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    },
    {
        name: 'JS',
        category: '.Net',
        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    },
    {
        name: 'React',
        category: '.Net',
        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    },
    {
        name: 'Angular',
        category: '.Net',
        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    },
    {
        name: 'Vue',
        category: '.Net',
        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    },
    {
        name: 'Blazor',
        category: '.Net',
        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    },
    {
        name: 'Ionic',
        category: '.Net',
        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    },
    {
        name: 'Flutter',
        category: '.Net',
        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    },
    {
        name: 'Xamarin',
        category: '.Net',
        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    },
    {
        name: '1C#',
        category: '.Net',
        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    },
    {
        name: '1VB',
        category: '.Net',
        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    },
    {
        name: '1JS',
        category: '.Net',
        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    },
    {
        name: '1React',
        category: '.Net',
        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    },
    {
        name: '1Angular',
        category: '.Net',
        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    },
    {
        name: '1Vue',
        category: '.Net',
        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    },
    {
        name: '1Blazor',
        category: '.Net',
        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    },
    {
        name: '1Ionic',
        category: '.Net',
        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    },
    {
        name: '1Flutter',
        category: '.Net',
        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    },
    {
        name: '1Xamarin',
        category: '.Net',
        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    },
]

export default class Home extends Component {

    render() {
        var videoGallery = [];
        for (let video of videoList) {
            videoGallery.push(
                <View style={styles.videoGrid}>
                    <Text style={styles.labels}>{video.name}</Text>
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
        backgroundColor: '#7D75A6'
    },
    scrollview: {
        flex: 1,
        width: '100%',
        backgroundColor: '#7D75A6'
    },
    labels: {
        fontSize: 18,
        color: '#fff'
    },
    videoGrid: {
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 10,
        backgroundColor: '#D93240'
    }
})