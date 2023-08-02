import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface TextoProps {
    children: string;
    style: React.CSSProperties
}

export default function Texto({ children, style } : TextoProps) {
  
  let estilo: any = estilos.texto;
  
  if(style?.fontWeight === 'bold') {
    estilo = estilos.textoNegrito;
  }

  return <Text style={[style, estilo]}>{ children }</Text>
}

const estilos = StyleSheet.create({
  texto: {
    fontWeight: 'normal',
  },
  textoNegrito: {
    fontWeight: 'bold',
  }
});
