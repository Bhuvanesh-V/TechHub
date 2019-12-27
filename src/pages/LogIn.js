import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, TextInput, Button, StatusBar } from 'react-native';

export class LogIn extends Component {

    render() {
        return (
            <View style={styles.container}>
                <StatusBar style={styles.statusbar}></StatusBar>
                <Image source={require('../images/logo.png')} style={styles.logo} ></Image>
                <TextInput placeholder="User Name" style={styles.inputtxt}></TextInput>
                <TextInput placeholder="Password" secureTextEntry={true} style={styles.inputtxt}></TextInput>
                <Button title="LogIn" style={styles.loginbtn}></Button>
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
        marginVertical: 10,
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