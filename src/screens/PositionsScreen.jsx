import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const PositionsScreen = () => {
  return (

    <View style={ styles.container}>
        <View style={ styles.box2}>
            <Text>Amarillo</Text>
        </View>
        <View style={ styles.box1}>
            <Text>Rojo</Text>
        </View>
    </View>
    
  )
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#333',
        margin: 30,
        justifyContent: 'center',
        alignItems: 'center'

    },

    box1: {
        backgroundColor: '#FF1E1E',
        width: 100,
        height: 100,
        // position: 'absolute',
        // top: 0,
        // left: 0,
        // right: 0,
        // bottom: 0
    },

    box2: {
        backgroundColor: '#FBE83B',
        width: 100,
        height: 100,
    }
})

