import React, {ReactElement, useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import {carregaProdutores} from '../../../services/carregaDados';
import Produtor from './Produtor';
import {useProdutores} from '../../../hooks/useProdutores';

interface ProdutoresProps {
  topo: ReactElement;
}

export default function Produtores({topo}: ProdutoresProps) {
  const {titulo, lista} = useProdutores(false);

  const TopoLista = () => {
    return (
      <>
        {topo}
        <Text style={estilos.titulo}>{titulo}</Text>
      </>
    );
  };

  return (
    <FlatList
      data={lista}
      renderItem={({item}) => <Produtor {...item} />}
      keyExtractor={({nome}) => nome}
      ListHeaderComponent={TopoLista}
    />
  );
}

const estilos = StyleSheet.create({
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646',
  },
});
