import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import {
  // AwesomeLibraryView,
  // Component,
  // Bien,
  StarWarHome,
} from 'react-native-awesome-library-lu';

export default function App() {
  return (
    <View style={styles.container}>
     <StarWarHome isButton={true} numberResult={4} find="Empire" />
     {/*<Swapi
        color="blue"
        isbutton={true}
        isImage={true}
        image={1}
        backgroundColor="blue"
        idColor="bgsecondary"//d
  />*/}
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
