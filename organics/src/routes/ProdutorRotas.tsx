import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import ProdutorTela from '../screens/Produtor';
import Home from '../screens/Home';
import Cesta from '../screens/Cesta';
import Resumo from '../screens/Resumo';

export default function ProdutorRotas({ componentePrincipal = Home }) {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false}}>
      <Stack.Screen name="HomeProdutor" component={componentePrincipal} />
      <Stack.Screen name="Produtor" component={ProdutorTela} />
      <Stack.Screen name="Cesta" component={Cesta} />
      <Stack.Screen name="Resumo" component={Resumo} />
    </Stack.Navigator>
  );
}
