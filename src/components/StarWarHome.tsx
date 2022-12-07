import * as React from 'react';
import axios from 'axios';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Card, Button } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
interface Props {
  numberResult: number;
  isButton: boolean;
  find: string | null;
  navigation:any;
}
export function StarWarHome({ numberResult = 3, isButton = true, find = null}: Props) {
  const navigation = useNavigation();
  const [peliculas, setPeliculas] = React.useState([]);
  const filterResult=(dato:Object[])=>{
    const datas = dato
    const result=[]
    numberResult = numberResult > datas.length ? datas.length : numberResult
    for (let i = 0; i < numberResult; i++) {
      result.push(datas[i])
    } 
    return result
  }
  if (find == null) {
    React.useEffect(() => {
      axios.get('https://swapi.py4e.com/api/films').then((response) => {
        const result=filterResult(response.data.results)
        setPeliculas(result);
      }).catch((error) => {
        console.log(error);
      });
    }, [numberResult]);
  } else {
    React.useEffect(() => {
      axios.get('https://swapi.py4e.com/api/films/?search=' + find).then((response) => {
        const result=filterResult(response.data.results)
        setPeliculas(result);
        console.log(response);
      });
    }, [find]);
  }

  return (
    <ScrollView style={styles.container}>
      {peliculas &&
        peliculas.map((text) => (
          <View>
            <Card >
              <Card.Title>{text.title}</Card.Title>
              <Text>Director: {text.director}</Text>
              <Text>Fecha de Lanzamiento: {text.release_date}</Text>
              {isButton ? <Button  onPress={() =>
                  navigation.navigate('Peliculas', { url: text.url })
                }>
                Mas Informacion
              </Button> : null}
            </Card>
          </View>
        ))}
      <Button onPress={()=>navigation.navigate('Personajes')}>
        Mira todos los actores de Star War
      </Button>
    </ScrollView>
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