import React from 'react';
import { Image, View } from 'react-native';

export const CustomLogo = ({ width, height }) => {


  return (
    
    <View>
        <Image 
            source={require('../../assets/logo.png')}
            style={{
                width: width,
                height: height
            }}
        />
    </View>
    
  )
}
