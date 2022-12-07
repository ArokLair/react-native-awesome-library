import { View, Text } from 'react-native';
import React from 'react';
import axios from 'axios';
import { useEffect,useState} from 'react';
import { Card } from '@rneui/themed';
import { useRoute } from '@react-navigation/native';
export function PeliculasView() {
    const route = useRoute();
    const [peliculasStar, setPeliculasStar] = useState();
    useEffect(() => {
    console.log(route);
    axios.get(route.params.url).then((response) => {
      setPeliculasStar(response.data);
    });
  }, []);
  return (
    <View>
      <Card>
        <Card.Title>{peliculasStar?.title}</Card.Title>
        <Text>Director: {peliculasStar?.director}</Text>
        <Text>Fecha de Lanzamiento: {peliculasStar?.release_date}</Text>
        <Text>Sipnosis: {peliculasStar?.opening_crawl}</Text>
      </Card>
    </View>
  );
}