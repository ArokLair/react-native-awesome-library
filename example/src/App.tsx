import * as React from 'react';

import { StyleSheet} from 'react-native';

import {
  // AwesomeLibraryView,
  // Component,
  StarWarHome,
  LinkStack,
  Swapi,
  PeliculasView,
  Bien,
  Menu,
} from 'react-native-awesome-library-lu';

export default function App() {
  const propiedad = [
    {
      name: 'StarWarHome',
      componente: StarWarHome,
      prop: {
        numberResult: 6,
        keys: 'darkColors',
      },
    },
    {
      name: 'Bien',
      componente: Bien,
      prop: {
        numResult: 4,
        backgroundColor: '#ececec',
      },
    },
    {
      name: 'Personajes',
      componente: Swapi,
      prop: {
        isbutton: true,
        image: 0,
        isImage: true,
      },
    },
    {
      name: 'Peliculas',
      componente: PeliculasView,
      prop: {},
    },
    {
      name: 'Menu',
      componente: Menu,
      prop: {},
    },
  ];
  return (
    <>
      <LinkStack prop={propiedad} />

      {/*<Swapi
       color="blue"
       isbutton={true}
       isImage={true}
       image={1}
       backgroundColor="blue"
       idColor="bgsecondary"//d
 />*/}
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   box: {
//     width: 60,
//     height: 60,
//     marginVertical: 20,
//   },
// });
