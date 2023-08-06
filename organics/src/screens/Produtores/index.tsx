import React, { useEffect, useState } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

import Produtor from './components/Produtor';
import Topo from './components/Topo';
import {useProdutores} from '../../hooks/useProdutores';
import useTextos from '../../hooks/useTextos';
import { useNavigation, useRoute } from '@react-navigation/native';

interface ProdutoresProps {
  melhoresProdutores: boolean
}

export default function Produtores({ melhoresProdutores }: ProdutoresProps) {

  //@ts-ignore
  const { tituloProdutores, mensagemCompra } = useTextos();
  const { lista } = useProdutores(melhoresProdutores);

  const navigation = useNavigation();
  const route = useRoute();
  
  //@ts-ignore
  const nomeCompra = route.params?.compra.nome;
  //@ts-ignore
  const timestamp = route.params?.compra.timestamp;
  const mensagemCompleta = mensagemCompra?.replace('$NOME', nomeCompra);

  const [ exibeMensagem, setExibeMensagem ] = useState(false);

  useEffect(() => {
    setExibeMensagem(!!nomeCompra)
    let timeout: NodeJS.Timeout;
    if (nomeCompra) {
      timeout = setTimeout(() => {
        setExibeMensagem(false)
      }, 3000)
    }
    return () => clearTimeout(timeout);
  }, [timestamp])
  

  const TopoLista = () => {
    return <>
      <Topo melhoresProdutores={melhoresProdutores} />
      { exibeMensagem && <Text style={estilos.compra}>{ mensagemCompleta }</Text>}

      <Text style={estilos.titulo}>{tituloProdutores}</Text>
    </>
  }

  return <FlatList
    data={lista}
    renderItem={
      ({ item }) => 
      <Produtor {...item}  
      //@ts-ignore
      aoPressionar={()=> navigation.navigate("Produtor", item)} />
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
  },
  compra: {
    backgroundColor: '#EAF5F3',
    padding: 16,
    color: '#464646',	
    fontSize: 16,
    lineHeight: 26,
  }
})
