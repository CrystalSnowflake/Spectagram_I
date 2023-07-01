import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Post extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.text}> This is where your create your post !</Text>
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
        color: 'white'
    }
})