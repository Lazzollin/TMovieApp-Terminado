import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const CustomCategories = () => {

  return (
   <View style={ styles.categoriesContainer}>
        { [0,1,2,3].map( item => (
        <TouchableOpacity key={item} style={ styles.categoriesBtn} >
            <Text style={ styles.categoriesIcon}>😂</Text>
            <Text style={ styles.categoriesTitle}>Comedy</Text>
        </TouchableOpacity>
        ))}
    </View>
  )
}


const styles = StyleSheet.create({

    categoriesContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
  
    categoriesBtn: {
      backgroundColor: '#222',
      padding: 10,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    categoriesIcon: {
      fontSize: 30
    },
  
    categoriesTitle: {
      color: '#fff',
      fontSize: 16
    }
  
  })
