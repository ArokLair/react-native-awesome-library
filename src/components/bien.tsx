// import React from 'react';
// import { StyleSheet, Button, View, Text, Image } from 'react-native';
// import { useEffect, useState } from 'react';
// import axios from 'axios';



// export function Bien() {

//     const [bien, setBien] = useState({
//         id: 0,
//         cod: 0,
//         cod_ant: 0,
//         tipo: '',
//         nombre: '',
//         serie: '',
//         marca: '',
//         monto: '',
//       });
//   useEffect(() => {
//     axios
//       .get('http://localhost:3000/')
//       .then((response) => response.data)
//       .then((data) => setBien(data));
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text>{bien?.nombre}</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
//   head: { height: 40, backgroundColor: '#f1f8ff' },
//   text: { margin: 6 },
// });
