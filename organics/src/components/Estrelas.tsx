import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Estrela from './Estrela';

interface EstrelaProps {
  quantidade?: number;
  editavel?: boolean;
  grande?: boolean;
}

export default function Estrelas({
  quantidade: quatidadeAntiga,
  editavel = true,
  grande = false,
}: EstrelaProps) {
  const [quantidade, setQuantidade] = useState(quatidadeAntiga || 0);

  const RenderizarEstrelas = () => {
    const listaEstrelas = [];
    for (let i = 0; i < 5; i++) {
      listaEstrelas.push(
        <Estrela
          OnPress={() => setQuantidade(i + 1)}
          desabilitada={!editavel}
          preenchida={i < quantidade}
          grande={grande}
          key={i}
        />
      );
    }
    return listaEstrelas;
  };

  return (
    <View style={estilos.estrelas}>
      <RenderizarEstrelas />
    </View>
  );
}

const estilos = StyleSheet.create({
    estrelas: {
      flexDirection: 'row',
    },
  });
