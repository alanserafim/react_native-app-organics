import { useRoute } from '@react-navigation/native';
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Cesta from './componentes/Cesta';


export default function ProdutorTela() {

  const route = useRoute();
  // @ts-ignore
  const { nome, imagem, cestas } = route.params;
  

  return (
    <FlatList
      data={cestas}
      renderItem={({ item }) => <Cesta {...item} produtor={{ nome,  imagem }}/>}
      style={estilos.lista}
    >

    </FlatList>

    // <Cesta cestas={cestas} produtor={{nome, imagem}}/>
  )
}

const estilos = StyleSheet.create({
  lista: {
      backgroundColor: '#ffffff',
  },
  conteudo: {
      paddingHorizontal: 16,
  },
  logo: {
      flexDirection: 'row',
  },
  produtorImage: {
      width: 62,
      height: 62,

      marginTop: -23,

      borderRadius: 6,
  },
  produtor: {
      color: '#464646',
      fontSize: 20,
      lineHeight: 32,
      fontWeight: 'bold',
      marginLeft: 16,
  },
  cestas: {
      color: '#464646',
      fontSize: 20,
      lineHeight: 32,
      fontWeight: 'bold',
      marginTop: 32,
  }
});
