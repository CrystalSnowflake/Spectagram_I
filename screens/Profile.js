import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Profile extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.text}> This screen will display your profile ! </Text>
            </View>
        );
    }
}

const styles = StyleSheet({
    container:{
        flex: 1,
        backgroundColor: 'pink',
        justifyContent: 'center',
        alignContent: 'center'
    },
    text: {
        color: 'magenta'
    }
})