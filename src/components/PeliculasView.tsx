import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card } from '@rneui/themed';
import { useRoute } from '@react-navigation/native';
export interface Props {}
export function PeliculasView() {
  const route = useRoute();
  const key = route.params.key;
  const tema = {
    lightColors: {
      primary: '#FEFCF3',
      secondary: '#F0DBDB',
      color_text: 'black',
    },
    darkColors: { primary: '#000', secondary: '#282A3A', color_text: 'white' },
  };
  const [peliculasStar, setPeliculasStar] = useState();
  useEffect(() => {
    console.log(route);
    axios.get(route.params.url).then((response) => {
      setPeliculasStar(response.data);
    });
  }, [key]);
  useEffect(() => {
    console.log(key);
  }, [key]);

  return (
    <View style={{ ...style.styleView, backgroundColor: tema[key].secondary }}>
      <Card
        containerStyle={{ ...style.card, backgroundColor: tema[key].primary }}
      >
        <Card.Title>{peliculasStar?.title}</Card.Title>
        <Text style={{ ...style.texto, color: tema[key].color_text }}>
          Director: {peliculasStar?.director}
        </Text>
        <Text style={{ ...style.texto, color: tema[key].color_text }}>
          Fecha de Lanzamiento: {peliculasStar?.release_date}
        </Text>
        <Text style={{ ...style.texto, color: tema[key].color_text }}>
          Productor: {peliculasStar?.producer}
        </Text>
        <Text style={{ ...style.texto2, color: tema[key].color_text }}>
          {peliculasStar?.opening_crawl}
        </Text>
      </Card>
    </View>
  );
}
const style = StyleSheet.create({
  styleView: {
    backgroundColor: '#171717',
    flex: 1,
  },
  card: {
    borderRadius: 10,
  },
  texto: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  texto2: {
    fontSize: 13,
  },
});
