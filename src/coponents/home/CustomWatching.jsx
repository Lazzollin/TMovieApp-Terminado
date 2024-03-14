import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import * as Progress from 'react-native-progress';

export const CustomWatching = () => {

  return (
    
    <View style={ styles.card}>
        <View style={ styles.cardImage}>
            <Image
            style={{ width: '100%', height: '100%'}}
            source={{
                uri:  'https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg',
            }}
            />
        </View>
        <View style={ styles.cardInfo}>
            <Text style={ styles.cardInfoTitle}>Title Movie</Text>
            <Progress.Bar 
            progress={0.3} 
            width={null} 
            color={'red'}
            unfilledColor={'#ccc'}
            borderColor='#ccc'
            borderWidth={0}
            />
            <View style={ styles.movieTimeContainer}>
            <Text style={ styles.movieTimeText}>03:45</Text>
            <Text style={ styles.movieTimeText}>05:00</Text>
            </View>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({

    card: {
      flex: 1,
      backgroundColor: '#222',
      flexDirection: 'row',
      borderRadius: 10,
    },
  
     cardImage: {
      flex: 1,
      padding: 10,
     },
  
     cardInfo: {
      flex: 4,
      paddingHorizontal: 10,
      justifyContent: 'space-evenly',
     },
  
     cardInfoTitle: {
        color: '#fff',
        fontSize: 17,
     },
  
     movieTimeContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between'
     },
  
     movieTimeText: {
      color: '#fff',
      fontSize: 12,
     }
  })