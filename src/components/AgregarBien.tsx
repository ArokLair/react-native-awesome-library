import React from 'react';
import { View, Text, TextInput, StyleSheet, Alert, Button } from 'react-native';
import { useBien } from '../hooks/useBien';
import { useState } from 'react';

export const AgregarBien = () => {
  const { agregarBien } = useBien();

  const [biene, setBiene] = useState({
    id: 0,
    cod: 0,
    cod_ant: 0,
    tipo: '',
    nombre: 'hghg',
    serie: '',
    marca: 'hgf',
    monto: 0,
  });

  const handleSubmit = async () => {
    const result = await agregarBien(biene);
    if (result) {
      Alert.alert('bien agregado correctamente');
    } else {
      Alert.alert('no se ha agregado el bien');
    }
  };
  const handleChangeInputs = (value: string, property: string) => {
    switch (property) {
      case 'cod':
        setBiene({ ...biene, cod: Number(value) });
        break;
      case 'cod_ant':
        setBiene({ ...biene, cod_ant: Number(value) });
        break;
      case 'tipo':
        setBiene({ ...biene, tipo: value });
        break;
      case 'nombre':
        setBiene({ ...biene, nombre: value });
        break;
      case 'serie':
        setBiene({ ...biene, serie: value });
        break;
      case 'marca':
        setBiene({ ...biene, marca: value });
        break;
      case 'monto':
        setBiene({ ...biene, monto: Number(value) });
        break;
    }
  };

  return (
    <View>
      <Text>Codigo: </Text>
      <TextInput
        onChangeText={(texto) => {
          handleChangeInputs(texto, 'cod');
        }}
        value={biene.cod.toString()}
        style={styles.input}
        keyboardType="numeric"
      />
      <Text>Codigo Anterior : </Text>
      <TextInput
        onChangeText={(texto) => {
          handleChangeInputs(texto, 'cod_ant');
        }}
        value={biene.cod_ant.toString()}
        style={styles.input}
        keyboardType="numeric"
      />
      <Text>Tipo: </Text>
      <TextInput
        onChangeText={(texto) => {
          handleChangeInputs(texto, 'tipo');
        }}
        value={biene.tipo}
        style={styles.input}
      />
      <Text>Nombre: </Text>
      <TextInput
        onChangeText={(texto) => {
          handleChangeInputs(texto, 'nombre');
        }}
        value={biene.nombre}
        style={styles.input}
      />
      <Text>Serie : </Text>
      <TextInput
        onChangeText={(texto) => {
          handleChangeInputs(texto, 'serie');
        }}
        value={biene.serie}
        style={styles.input}
      />
      <Text> Marca : </Text>
      <TextInput
        onChangeText={(texto) => {
          handleChangeInputs(texto, 'marca');
        }}
        value={biene.marca}
        style={styles.input}
      />
      <Text>Monto: </Text>
      <TextInput
        onChangeText={(texto) => {
          handleChangeInputs(texto, 'monto');
        }}
        value={biene.monto.toString()}
        style={styles.input}
      />
      <Button title="Guardar datos" onPress={handleSubmit} />
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
