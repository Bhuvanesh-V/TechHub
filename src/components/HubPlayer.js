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
        top: '21%',
        flexDirection: 'row',
        height: "20%",
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
    },

    videoRow: {
        flexDirection: 'row'
    },
    labels: {
        fontSize: 18,
        color: '#ffffff',
        fontWeight: "600",
        overflow: 'hidden'
    },
    videoGrid: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        height: 50,
        borderRadius: 5
    },
    notesGrid: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        height: 50,
        marginTop: 5,
        borderRadius: 5,
        opacity: 0.8,     
        backgroundColor: "#7029e9",
    }
});

export class HubPlayer extends Component {
    availableNotes;
    constructor() {
        super();
        this.availableNotes = [];
        this.state = {
            notes: []
        }
    }
    renderNotes = () => {
        var notes = [];
        this.availableNotes = ["Oops conepts"];;
        for (let note of this.availableNotes) {
            notes.push(
                <View style={styles.notesGrid}>
                    <View style={styles.videoRow}>
                        <Text style={styles.labels}>{note}</Text>
                    </View>
                </View>
            )
        }
        return (notes);
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <VideoPlayer style={styles.backgroundVideo} resizeMode={"contain"} hideShutterView={false}
                    source={{ uri: this.props.uri }} />
                <View style={styles.buttongruop}>
                    <View style={styles.btns} >
                        <Text style={styles.reaction}>Like</Text>
                    </View>
                    <View style={styles.btns} color="#7029e9">
                        <Text style={styles.reaction}>MyList</Text>
                    </View>
                </View>
                <TextInput placeholder="+ Take Notes" style={styles.inputtxt}></TextInput>
                {this.renderNotes()}
            </View>
        );
    }
}


