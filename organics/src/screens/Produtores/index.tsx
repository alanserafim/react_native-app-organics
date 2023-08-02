import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

import Produtor from './components/Produtor';
import Topo from './components/Topo';
import {useProdutores} from '../../hooks/useProdutores';
import useTextos from '../../hooks/useTextos';

interface ProdutoresProps {
  melhoresProdutores: boolean
}

export default function Produtores({ melhoresProdutores }: ProdutoresProps) {
  //@ts-ignore
  const { lista } = useProdutores(melhoresProdutores);
  //@ts-ignore
  const { tituloProdutores } = useTextos();

  const TopoLista = () => {
    return <>
      <Topo 
      melhoresProdutores={melhoresProdutores} />
      <Text style={estilos.titulo}>{tituloProdutores}</Text>
    </>
  }

  return <FlatList
    data={lista}
    renderItem={
      ({ item }) => <Produtor {...item}  />
    }
    keyExtractor={({ nome }) => nome}
    ListHeaderComponent={TopoLista}
    style={estilos.lista} />
}

const estilos = StyleSheet.create({
  lista: {
    backgroundColor: '#ffffff',
  },
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646',
  }
})
