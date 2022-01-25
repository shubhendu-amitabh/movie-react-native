import React from 'react';
import {SafeAreaView, StyleSheet, View, Image, Text} from 'react-native';

const MovieDetailsScreen = ({navigation})=>{

    console.log(navigation);

    return(
        <SafeAreaView style={styles.container}>
        {
            <View>
            <Text>Detail Screen</Text>
            <Image
              style={styles.image}
              source={{uri:'https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg'}}
            />
            </View>
            
        }
        </SafeAreaView>
      );
};
export default MovieDetailsScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fdfd"
    },
    image:{
        height:300,
        width:200,
        margin:5
      },
});