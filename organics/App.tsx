import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import Home from './src/screens/Home';
import {useProdutores} from './src/hooks/useProdutores';
import Cesta from './src/screens/Cesta';

function App(): JSX.Element {
  

  const { lista } = useProdutores(false);

  return (
    <SafeAreaView>
      <StatusBar />
      {/* <Home melhoresProdutores={true} /> */}
      {lista.length > 0 && (
        <Cesta
          produtor={{
            nome: lista[0].nome,
            imagem: lista[0].imagem,
          }}
          {...lista[0].cestas[0]}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
  },
});

export default App;
