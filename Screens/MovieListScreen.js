import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList 
  ,Image,
  SafeAreaView, TouchableOpacity, Button} from 'react-native';
import { SearchBar } from 'react-native-elements/dist/searchbar/SearchBar';

const MovieListScreen = ({navigation})=>{
    const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

   // console.log(data);

  // hooks: get called after ui is created by run time 
  useEffect(()=>{
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=25a2d34452da2b3f1c3451a0369b962c&language=en-US&page=1')
    .then((response)=>response.json())
    .then((json)=>setData(json))
    .catch((error)=>console.error(error))
    .finally(()=>setLoading(false));
  },[]);

  const updateSearch = (search)=>{
    setSearch(search);
  };

  const itemClick = (item)=>{
    console.log('item clicked: ' + item.title);
  };

  return(
    <SafeAreaView style={styles.container}>
    {
      isLoading ? <Text style={{color:"#fff"}}>Loading...</Text> : (
        <View>
        <Button
      title="Go to Detail Screen"
      onPress={() =>
        navigation.navigate('MovieDetailsScreen', { name: 'Jane' })
      }
    />
        <Text style={{color:"#fff",margin:5, fontSize:20, fontWeight:"bold"}}>Movie Browser</Text>
        <View style={{backgroundColor:"#fff",margin:5}}>
        <SearchBar
        placeholder='Search here'
        onChangeText={this.updateSearch}
        value={search}
        round={true}
        ></SearchBar>
        </View>
        <FlatList
        data={data.results}
        renderItem={({item})=>(
          <View style={styles.item}
          >
            <Image
              style={styles.image}
              source={{uri:'https://image.tmdb.org/t/p/w500/' + item.poster_path}}
            />
            <View style={{justifyContent:"center"}}>
              <Text style={{fontWeight:"bold", color:"#ffff"}}>{item.title}</Text>
              <View style={{flexDirection:"row", marginTop:20}}>
                <Text style={{fontWeight:"bold", color:"#fff"}}>Release Date: </Text>
                <Text style={{color:"#fff"}}>{item.release_date}</Text>
              </View>
              <View style={{flexDirection:"row"}}>
                <Text style={{fontWeight:"bold", color:"#fff"}}>Popularity: </Text>
                <Text style={{color:"#fff"}}>{item.popularity}</Text>
              </View>
            </View>
          </View>
        )}
        >
        </FlatList>
        </View>
      )
    }
    </SafeAreaView>
  );

    
};
export default MovieListScreen;

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"#000"
    },
    image:{
      height:300,
      width:200,
      margin:5
    },
    item:{
      flexDirection:"row",
    }
  });