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
            <Button title="LogIn" color={"#7029e9"} onPress={this.props.onPress} style={styles.loginbtn}></Button>
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
        backgroundColor: '#ffffff'
    },
    inputtxt: {
        marginVertical: 10,
        borderColor: "#7029e9",
        borderWidth: 1,
        fontSize: 16,
        textAlign: "center",
        borderRadius: 5,
        width: "70%",
        color: '#000000'
    },
    loginbtn: {
        fontSize: 16,
        width: "90%",
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
    },
      loginbtn: {
        fontSize: 16,
        borderRadius: 50,
        color: '#FFFFFF'
      },
});