import { StyleSheet, Text, View, Button } from 'react-native';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
export default function StarWar() {
  const [estado, setEstado] = useState({ name: 'Hola mundo' });
  const [contador, setContador] = useState(1);
  useEffect(() => {
    axios
      .get('https://swapi.dev/api/people/1')
      .then((response) => response.data)
      .then((data) => setEstado(data));
  }, []);

  useEffect(() => {
    axios
      .get('https://swapi.dev/api/people/' + contador)
      .then((response) => response.data)
      .then((data) => setEstado(data));
  }, [contador]);

  const click = () => {
    setContador(contador + 1);
  };
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.titulo}>Listado de Actores de Star Wars</Text>
        <Text>Personaje: {contador}</Text>
        <Text>{estado?.name}</Text>
        <Button title="cambiar" color={'blue'} onPress={click} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 10,
    marginBottom: 10,
  },
  box: {
    width: '70%',
    height: 200,
    backgroundColor: '#efefef',
    padding: 10,
  },
});
