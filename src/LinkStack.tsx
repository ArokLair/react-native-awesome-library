import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export interface datoscomponente {
  prop: object
  name: string
  componente: React.FC
}
export interface Props {
  prop: datoscomponente[];
}
export function LinkStack({prop}:Props) {
  const Stack: any = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StarWarHome">
        {prop && prop.map((propiedad) => (
        <Stack.Screen name={propiedad.name}>
          {() => <propiedad.componente {...propiedad.prop}/>}
        </Stack.Screen>
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}