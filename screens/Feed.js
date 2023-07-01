import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Feed extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.text}> This will be your feed screen ! </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
        justifyContent: 'center',
        alignContent: 'center'
    },
    text: {
        color: 'magenta'
    }
})