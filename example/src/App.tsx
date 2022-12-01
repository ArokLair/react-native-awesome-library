import * as React from 'react';
<<<<<<< HEAD
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PeliculasComponent from './component/PeliculasComponent';
import HomeComponent from './component/HomeComponent';
import StarWar from './component/StarWar';
=======

import { StyleSheet, View } from 'react-native';
import {
  AwesomeLibraryView,
  Component,
  Swapi,
} from 'react-native-awesome-library-lu';

>>>>>>> 6fdc065d2d1985f081e54ed4d83d4ba6e0a0d645
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
<<<<<<< HEAD
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeComponent} />
        <Stack.Screen name="Peliculas" component={PeliculasComponent} />
        <Stack.Screen name="Personajes" component={StarWar} />
      </Stack.Navigator>
    </NavigationContainer>
=======
    <View style={styles.container}>
      <AwesomeLibraryView color="#32a852" style={styles.box} />
      <Component />
      <Swapi />
    </View>
>>>>>>> 6fdc065d2d1985f081e54ed4d83d4ba6e0a0d645
  );
}
