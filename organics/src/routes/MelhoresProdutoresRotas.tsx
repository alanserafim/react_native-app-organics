import { View, Text } from 'react-native'
import React from 'react'
import ProdutorRotas from './ProdutorRotas'
import MelhoresProdutores from '../screens/MelhoresProdutores'

export default function MelhoresProdutoresRotas() {
  return (
    <ProdutorRotas componentePrincipal={MelhoresProdutores} />
  )
}