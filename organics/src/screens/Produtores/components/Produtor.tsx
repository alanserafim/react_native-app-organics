import {View, Text, StyleSheet, Image, ImageSourcePropType, TouchableOpacity} from 'react-native';
import React, { useMemo, useReducer, useState } from 'react';
import Estrelas from '../../../components/Estrelas';

interface ProdutorProps {
  nome: string;
  imagem: ImageSourcePropType;
  distancia: number;
  estrelas?: number;
  aoPressionar: () => void;
}

const distanciaEmMetros = (distancia: number) => {
  return `${distancia}m`
}

export default function Produtor({
  nome,
  imagem,
  distancia,
  estrelas,
  aoPressionar
}: ProdutorProps) {

  const [selecionado, inverterSelecionado] = useReducer(
    (selecionado) => !selecionado, 
    false
  );

  //UseMemo salva o valor da função na memória e só atualiza quando o valor da variável distancia mudar
  const distanciaTexto = useMemo(
    () => distanciaEmMetros(distancia), 
    [distancia])
    ;


  return (
    <TouchableOpacity 
      style={estilos.card}
      //onPress={inverterSelecionado}
      onPress={aoPressionar}
    >
      <Image style={estilos.imagem} source={imagem} accessibilityLabel={nome} />
      <View style={estilos.informacoes}>
        <View>
          <Text style={estilos.nome}>{nome}</Text>
          <Estrelas 
            quantidade={estrelas}
            editavel={selecionado}
            grande={selecionado}  
          />
        </View>

        <Text style={estilos.distancia}>{distanciaTexto}</Text>
      </View>
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
  card: {
    backgroundColor: '#f6f6f6',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6,
    flexDirection: 'row',
    /*box shadow no Android*/
    elevation: 4,
    /* box shadow no IOS*/
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  imagem: {
    width: 48,
    height: 48,
    borderRadius: 6,
    marginVertical: 16,
    marginLeft: 16,
  },
  informacoes: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 8,
    marginVertical: 16,
    marginRight: 16,
  },
  nome: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold',
  },
  distancia: {
    fontSize: 12,
    lineHeight: 19,
  },
});
