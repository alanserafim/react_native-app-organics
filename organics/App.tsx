import React from 'react';
import { SafeAreaView, StyleSheet, Text, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Home from './src/screens/Home';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView>
      <Home/>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
 tela: {
  flex: 1
 }
});

export default App;
