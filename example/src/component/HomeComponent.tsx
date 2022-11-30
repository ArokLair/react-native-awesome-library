import * as React from 'react';
import axios from 'axios';
import { StyleSheet, View, Text } from 'react-native';
import { Card, Button } from '@rneui/themed';
export default function HomeComponent({ navigation }) {
  const [peliculas, setPeliculas] = React.useState();
  React.useEffect(() => {
    axios.get('https://swapi.dev/api/films').then((response) => {
      setPeliculas(response.data);
      console.log(response);
    });
  }, []);

  return (
    <View style={styles.container}>
      {peliculas &&
        peliculas.results.map((text) => (
          <View>
            <Card style={styles.container2}>
              <Card.Title>{text.title}</Card.Title>
              <Text>Director: {text.director}</Text>
              <Text>Fecha de Lanzamiento: {text.release_date}</Text>
              <Button
                onPress={() =>
                  navigation.navigate('Peliculas', { url: text.url })
                }
              >
                Mas Informacion
              </Button>
            </Card>
          </View>
        ))}
      <Button onPress={() => navigation.navigate('Personajes')}>
        Mira todos los actores de Star War
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
  },
  container: {
    flex: 1,
  },
  container2: {
    flex: 1,
    marginTop: 420,
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
