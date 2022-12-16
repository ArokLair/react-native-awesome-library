import React from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const Menu = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Pressable
          onPress={() => navigation.navigate('Bien')}
          style={styles.buttonn}
        >
          <Text>Crud</Text>
        </Pressable>
      </View>
      <View style={styles.box}>
        <Pressable
          onPress={() => navigation.navigate('StarWarHome')}
          style={styles.buttonn}
        >
          <Text>Star Wars</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    marginTop: 50,

    width: '90%',
    height: 80,
  },
  buttonn: {
    backgroundColor: '#99ccff',
    borderRadius: 20,
    width: '100%',
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
  },
});
