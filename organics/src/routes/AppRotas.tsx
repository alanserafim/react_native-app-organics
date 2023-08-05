import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import MelhoresProdutoresRotas from './MelhoresProdutoresRotas';
import ProdutorRotas from './ProdutorRotas';
import coracao from '../assets/coracao.svg';
import home from '../assets/home.svg';

export default function AppRotas() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={({ route })=>({ 
          headerShown: false,
          tabBarActiveTintColor: '#2a9f85',
          tabBarInactiveTintColor: '#c7c7c7',
          tabBarIcon: ({ color }) => {
            let Icon = home;
            if (route.name === 'Melhores Produtores') {
              Icon = coracao;
            } return <Icon color={color} width={20} height={20} />;
          },
          tabBarLabelStyle: {
            fontSize: 13,
        },
          })}>
        <Tab.Screen name="Home" component={ProdutorRotas} />
        <Tab.Screen name="Melhores Produtores" component={MelhoresProdutoresRotas} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
