import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import estrela from '../assets/estrela.png'
import estrelaCinza from '../assets/estrelaCinza.png'

interface EstrelaProps {
    quantidade?: number,
    editavel?: boolean,
    grande?: boolean
}

export default function Estrelas(
    { 
        quantidade: quatidadeAntiga,
        editavel = false,
        grande = false,
    
    } : EstrelaProps) {

        const estilos = estilosFuncao(grande);
  return (
    <View style={estilos.estrelas}>
      <Image source={estrela} style={estilos.estrela}/>
      <Image source={estrela} style={estilos.estrela}/>
    </View>
  )
}


const estilosFuncao = (grande : boolean) => StyleSheet.create({
    estrelas: {
        flexDirection: 'row',
    },
    estrela: {
        width: grande? 36 : 12,
        height: grande? 36 : 12,
        marginRight: 2
    }
})