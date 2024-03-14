import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, Image, TouchableOpacity, View } from 'react-native';

export const CustomSlideMovie = ( {moviesData, widthData=150, heigthData='100%', position='horizontal' } ) => {

  const navigation = useNavigation();

    const CarrouselMovie = ( {image} ) => {
        // console.log(item.item.img)
        return (
          <View style={{ width: widthData, height: heigthData, marginHorizontal: 5 }}>
            <TouchableOpacity onPress={() => navigation.navigate('Movie')}>
              <Image 
                style={{
                  width: widthData,
                  height: heigthData,
                  borderRadius: 10
                }}
                source={{
                  uri: image
                }}
              />
            </TouchableOpacity>
          </View>
        )
    }

  return (
    
    <FlatList 
        data={moviesData}
        renderItem={({item}) => <CarrouselMovie image={item.img} />}
        keyExtractor={item => item.id}
        horizontal
    />
  )
}
