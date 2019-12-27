import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import LogIn from '../pages/LogIn';
import SignUp from '../pages/SignUp';
import { View, Text } from 'react-native';

export default class Validate extends Component {
    render() {
        return (
            <View style={styles.validate}>
                <LogIn></LogIn>
                <Text style={styles.textRegister}> ────────  SignUp With  ────────</Text>
                <SignUp></SignUp>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    validate: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: '100%'
    },
    textRegister: {
        fontSize: 16,
        backgroundColor: '#7D75A6',
        color: '#ffffff',
        width: '100%',
        textAlign: "center",
    }
})