import React from 'react'
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { globalStyles } from '../../styles/globalStyles'
import { CustomTitle } from '../../coponents/ui/CustomTitle';
import { CustomWatching } from '../../coponents/home/CustomWatching';
import { CustomCategories } from '../../coponents/home/CustomCategories';
import { CustomSlideMovie } from '../../coponents/ui/CustomSlideMovie';


const RecommendedMovies = [
  { id: 1, titleMovie: 'Rapido y Furioso 1', img: 'https://image.tmdb.org/t/p/w300/1E5baAaEse26fej7uHcjOgEE2t2.jpg'},
  { id: 2, titleMovie: 'Rapido y Furioso 2', img: 'https://image.tmdb.org/t/p/w300/1E5baAaEse26fej7uHcjOgEE2t2.jpg'},
  { id: 3, titleMovie: 'Rapido y Furioso 3', img: 'https://image.tmdb.org/t/p/w300/1E5baAaEse26fej7uHcjOgEE2t2.jpg'},
  { id: 4, titleMovie: 'Rapido y Furioso 4', img: 'https://image.tmdb.org/t/p/w300/1E5baAaEse26fej7uHcjOgEE2t2.jpg'},
  { id: 5, titleMovie: 'Rapido y Furioso 5', img: 'https://image.tmdb.org/t/p/w300/1E5baAaEse26fej7uHcjOgEE2t2.jpg'}
]

export const HomeScreen = () => {

  const widthDimension = Dimensions.get('window').width;

  return (
    <View style={ globalStyles.layout}>
        <View style={ styles.boxHeader}>
        <CustomSlideMovie 
          moviesData={RecommendedMovies}
          widthData={widthDimension}
        />
        </View>

        <View style={ styles.boxView}>
          <CustomTitle title={'Continue Watching'}/>
          <CustomWatching />
        </View>

        <View style={ styles.boxCategories}>
          <CustomTitle title={'Categories'} />
          <CustomCategories />
        </View>

        <View style={ styles.boxRecomend}>
          <CustomTitle 
            title={ 'Recommended For You'}
            linkPath='/recomended'
          />
          <CustomSlideMovie moviesData={RecommendedMovies}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({

  boxHeader: {
    flex: 2,
  },

  boxView: {
    flex: 1,
    // borderWidth: 1,
    // borderColor: '#fff'
  },

  boxCategories: {
    flex: 1,
    // borderWidth: 1,
    // borderColor: '#fff'
  },

  boxRecomend: {
    flex: 2,
    // borderWidth: 1,
    // borderColor: '#fff'
  },

})




