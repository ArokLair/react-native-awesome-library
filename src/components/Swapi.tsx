import React from 'react';
import { StyleSheet, Button, View, Text, Image } from 'react-native';
import axios from 'axios';
import { useEffect, useState } from 'react';
export interface Props {
  color: string;
  isbutton: boolean;
  image: number;
  isImage: boolean;
  backgroundColor: string;
  idColor: 'bgprimary' | 'bgsecondary';
}

export function Swapi({
  color,
  isbutton,
  image,
  isImage,
  backgroundColor = 'blue',
  idColor = 'bgprimary',
}: Props) {
  const [estado, setEstado] = useState({
  });
  const [contador, setContador] = useState(1);
  const [imagen] = useState([
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/1200px-Star_wars2.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png',
  ]);
  const styleBg = {
    bgprimary: { id: 1, backgroundColor: 'skyblue', color: 'dark' },
    bgsecondary: { id: 2, backgroundColor: 'red', color: 'white' },
  };
  const [bg] = useState(styleBg);

  useEffect(() => {
    axios.get('https://swapi.py4e.com/api/planets/' + contador)
      .then((response) => response.data)
      .then((data) => setEstado(data));
  }, [contador]);
  const click = () => {
    setContador(contador + 1);
  };
  return (
    <View style={{ ...styles.container, backgroundColor: backgroundColor }}>
      <View
        style={{ ...styles.box, backgroundColor: bg[idColor].backgroundColor }}
      >
        {isImage ? (
          <Image
            style={styles.img}
            source={{
              uri: imagen[image],
            }}
          />
        ) : null}
        <Text style={{ color: bg[idColor].color }}>
          Listado de Actores de Star Wars
        </Text>
        <Text style={{ color: bg[idColor].color }}>Personaje: {contador}</Text>
        <Text style={{ color: bg[idColor].color }}>{estado?.name}</Text>
        <Text style={{ color: bg[idColor].color }}>{estado?.birth_year}</Text>
        {isbutton ? (
          <Button title="cambiar" color={color} onPress={click} />
        ) : null}
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
    padding: 10,
  },
});
