import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const CustomTitle = ({
    title,
    linkPath=''
}) => {

  return (
    <View style={ styles.container}>
        <Text style={ styles.textTitle}>{title}</Text>

        { linkPath != '' && (
        <TouchableOpacity onPress={() => {}}>
            <Text style={ styles.textBotton}>See All</Text>
        </TouchableOpacity>
        )}
    </View>
  )
}


const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
    },

    textTitle: {
        color: '#fff',
        fontSize: 15
    },

    textBotton: {
        color: '#fff',
        fontSize: 14
    }
})