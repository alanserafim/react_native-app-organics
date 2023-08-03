import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import MelhoresProdutoresRotas from './MelhoresProdutoresRotas';
import ProdutorRotas from './ProdutorRotas';

export default function AppRotas() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={ProdutorRotas} />
        <Tab.Screen name="Melhores Produtores" component={MelhoresProdutoresRotas} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
