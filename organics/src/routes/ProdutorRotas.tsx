import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import ProdutorTela from '../screens/Produtor';
import Home from '../screens/Home';

export default function ProdutorRotas({ componentePrincipal = Home }) {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeProdutor" component={componentePrincipal} />
      <Stack.Screen name="Produtor" component={ProdutorTela} />
    </Stack.Navigator>
  );
}
