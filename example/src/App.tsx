import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PeliculasComponent from './component/PeliculasComponent';
import HomeComponent from './component/HomeComponent';
import StarWar from './component/StarWar';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeComponent} />
        <Stack.Screen name="Peliculas" component={PeliculasComponent} />
        <Stack.Screen name="Personajes" component={StarWar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
