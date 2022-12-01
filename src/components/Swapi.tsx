import React from 'react';
import { StyleSheet, Button, View, Text, Image } from 'react-native';
import axios from 'axios';
import { useEffect, useState } from 'react';
export function Swapi() {
  const [estado, setEstado] = useState({
    name: 'Hola mundo',
    birth_year: '03/03/2000',
  });
  const [contador, setContador] = useState(1);

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
        <Image
          style={styles.img}
          source={{
            uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5298bac0-b8bf-4c80-af67-725c1272dbb0/dcbrky3-d4685ae4-a280-40ab-a56f-8c93c5eea8d9.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUyOThiYWMwLWI4YmYtNGM4MC1hZjY3LTcyNWMxMjcyZGJiMFwvZGNicmt5My1kNDY4NWFlNC1hMjgwLTQwYWItYTU2Zi04YzkzYzVlZWE4ZDkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.5A7ZNgOZNnctFrT9QNhuYLnqAv93XJ5Q2Uxp0Jz55C4',
          }}
        />
        <Text style={styles.titulo}>Listado de Actores de Star Wars</Text>
        <Text>Personaje: {contador}</Text>
        <Text>{estado?.name}</Text>
        <Text>{estado?.birth_year}</Text>
        <Button title="cambiar" color={'blue'} onPress={click} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: 80,
  },
  container: {
    width: '100%',
    height: '20%',
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
    width: '90%',
    height: 260,
    backgroundColor: '#efefef',
    padding: 10,
  },
});
