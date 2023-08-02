import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import AppRotas from './src/routes/AppRotas';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <AppRotas />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
  },
});

export default App;
