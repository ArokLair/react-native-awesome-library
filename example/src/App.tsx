import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { AwesomeLibraryView, ButtonOne } from 'react-native-awesome-library';


export default function App() {
  return (
    <View style={styles.container}>
      <AwesomeLibraryView color="black" style={styles.box} />
      <ButtonOne color='grey' style={styles.button}
      />
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
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  }
});
