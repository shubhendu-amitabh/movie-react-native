import React from 'react';
import { StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MovieDetailsScreen from './Screens/MovieDetailsScreen';
import MovieListScreen from './Screens/MovieListScreen';

const Stack = createStackNavigator();

const App = ()=>{

  return(
    <NavigationContainer>
      <Stack.Navigator styles={styles.container} initialRouteName='MovieListScreen'>
        <Stack.Screen
          name='MovieDetailsScreen'
          component={MovieDetailsScreen}
          options={{headerShown:true}}
        />
        <Stack.Screen
          name='MovieListScreen'
          component={MovieListScreen}
          options={{headerShown:true}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
  
};

export default App;

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
