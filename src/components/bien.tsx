import React from 'react';
import { StyleSheet, Text, Button, Alert, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useBien } from '../hooks/useBien';
import { AgregarBien } from './AgregarBien';
interface IBien {
  id?: Number;
  cod: Number;
  cod_ant: Number;
  tipo: String;
  nombre: String;
  serie: String;
  marca: String;
  monto: Number;
}

export interface Props {
  isForm: boolean;
  backgroundColor: string;
  numResult: number;
}

export function Bien({
  isForm = false,
  backgroundColor = 'blue',
  numResult = 4,
}: Props) {
  const { borrarBien } = useBien();
  const [bienes, setBienes] = useState<IBien[]>();
  const [listaBien, setListaBien] = useState(true);
  const [verList, setVerList] = useState(isForm);

  const handleVisible = () => {
    setVerList(!verList);
  };
  const handleDelete = async (cod: Number) => {
    const result = await borrarBien(cod);
    if (result) {
      setListaBien(!listaBien);
      Alert.alert('bien eliminado correctamente');
    } else {
      Alert.alert('no se ha eliminado el bien');
    }
  };

  useEffect(() => {
    axios
      .get(`https://hablaplus-backend-production.up.railway.app/bien`)
      .then((response) => response.data)
      .then((data) => setBienes(data));
  }, [listaBien]);

  return (
    <ScrollView
      style={{ ...styles.container, backgroundColor: backgroundColor }}
    >
      <Button
        title={!verList ? 'Agregar bien' : 'Ver Listado'}
        onPress={handleVisible}
      />
      {verList && <AgregarBien />}
      {!verList && (
        <>
          <Text style={styles.titulo}>Listado de Bienes</Text>
          {bienes?.map((bien, iter) => {
            if (iter < numResult) {
              return (
                <Text key={iter}>
                  {bien.nombre}
                  <Button
                    title="Eliminar"
                    onPress={() => handleDelete(bien.cod)}
                  />
                </Text>
              );
            }
          })}
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: { flex: 1, width: '100%' },
  text: { margin: 6 },
  titulo: { fontSize: 20, fontWeight: 'bold' },
  butto: { backgroundColor: 'red' },
});
