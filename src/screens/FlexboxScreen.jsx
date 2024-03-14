import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const FlexboxScreen = () => {


  return (
    <>
    <View style={ styles.container}>
        <View style={ styles.box1}>
            <Text>Rojo</Text>
        </View>
        <View style={ styles.box2}>
            <Text>Amarillo</Text>
        </View>
        <View style={ styles.box3}>
            <Text>Celeste</Text>
        </View>
    </View>
    </>
  )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,  // 1 + 1 + 1 = 3
        backgroundColor: '#333',
        flexDirection:'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-end'
        // margin: 10,

    },

    box1: {
        flex: 1, 
        backgroundColor: '#FF1E1E',
        // alignSelf:'flex-start',
        width: 100,
        height: 100,
    },

    box2: {
        flex: 3,
        backgroundColor: '#FBE83B',
        // alignSelf:'flex-start'
        width: 100,
        height: 100,
    },

    box3: {
        flex: 1,
        backgroundColor: '#05BAD2',
        // alignSelf:'flex-end'
        width: 100,
        height: 100,
    }

})
