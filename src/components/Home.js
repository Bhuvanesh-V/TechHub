import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView, Text, Alert } from 'react-native';
import { HubVideoList} from '../data/videogallery';

var videoList = [
    {
        name: 'C#',
        category: '.Net',
        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    },
    {
        name: 'VB',
        category: '.Net',
        url: 'https://firebasestorage.googleapis.com/v0/b/techhub-bhuvan.appspot.com/o/CSharpFundamentals.mp4?alt=media&token=c6b4e666-558a-46b7-bf05-bcf204796ca8'
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
        name: '+',
        category: '.Net',
        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    },
    {
        name: '+',
        category: '.Net',
        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    },
    {
        name: '+',
        category: '.Net',
        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    },
    {
        name: '+',
        category: '.Net',
        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    },
    {
        name: '+',
        category: '.Net',
        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    },
    {
        name: '+',
        category: '.Net',
        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    },
    {
        name: '+',
        category: '.Net',
        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    },
    {
        name: '+',
        category: '.Net',
        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    },
    {
        name: '+',
        category: '.Net',
        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    },
    {
        name: '+',
        category: '.Net',
        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    },
    {
        name: '+',
        category: '.Net',
        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    },

]
export class Home extends Component {
    constructor() {
        super()
        this.state = {
            videoUrl: ''
        }
    }

    render() {
        var videoGallery = [];
        for (let video of HubVideoList) {
            videoGallery.push(
                <View style={styles.videoGrid}  onTouchEnd={this.props.showHubList.bind(this, {category: video.category, subCategory: video.subCategory })}>
                    <Text style={styles.labels} >{video.category}</Text>
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
    scrollview: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FFF'
    },
    labels: {
        fontSize: 18,
        color: '#ffffff',
        fontWeight: "600",
    },
    videoGrid: {
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 5,
        backgroundColor: '#6103EE'
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