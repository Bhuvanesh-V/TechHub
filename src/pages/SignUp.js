import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Button, StatusBar } from 'react-native';

export default class SignUp extends Component {

    render() {
        return (
            <View style={styles.container}>
                <StatusBar style={styles.statusbar}></StatusBar>
                <TextInput placeholder="New User Name" style={styles.inputtxt}></TextInput>
                <TextInput placeholder="Mail Id" style={styles.inputtxt}></TextInput>
                <TextInput placeholder="OTP" style={styles.inputtxt}></TextInput>
                <TextInput placeholder="New Password" style={styles.inputtxt}></TextInput>
                <Button title="SignUp" style={styles.loginbtn}></Button>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#7D75A6'
    },
    inputtxt: {
        marginVertical: 5,
        borderColor: 'blueviolet',
        borderWidth: 1,
        fontSize: 16,
        textAlign: "center",
        borderRadius: 5,
        width: 200,
        color: '#000000'
    },
    loginbtn: {
        fontSize: 16,
        borderRadius: 50,
        color: '#FFFFFF'
    },
    logintxt: {
        fontSize: 18,
        color: '#FFFFFF'
    },
    statusbar: {
        backgroundColor: '#B894F6'
    }, 
    logo: {
        width: 80,
        height: 80
    }
});