import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import estrela from '../assets/estrela.png';
import estrelaCinza from '../assets/estrelaCinza.png';

interface EstrelaProps {
  OnPress: () => void;
  desabilitada: boolean;
  preenchida: boolean;
  grande: boolean;
}

export default function Estrela({
  OnPress,
  desabilitada = true,
  preenchida,
  grande = false,
}: EstrelaProps) {
  const getImagem = () => {
    if (preenchida) {
      return estrela;
    }
    return estrelaCinza;
  };

  const estilos = estilosFuncao(grande);

  return (
    <TouchableOpacity onPress={OnPress} disabled={desabilitada}>
      <Image source={getImagem()} style={estilos.estrela} />
    </TouchableOpacity>
  );
}

const estilosFuncao = (grande: boolean) =>
  StyleSheet.create({
    estrela: {
      width: grande ? 36 : 12,
      height: grande ? 36 : 12,
      marginRight: 2,
    },
  });
