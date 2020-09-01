import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import GastronomicsScreen from '../screens/GastronomicsScreen';
import GastronomicDetailScreen from '../screens/GastronomicDetailScreen';
import GastronomicsMapScreen from '../screens/GastronomicsMapScreen';
import FiltersScreen from '../screens/FiltersScreen';

const Stack = createStackNavigator();

const GastronomicNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Gastronomicos" component={GastronomicsScreen}/>
      <Stack.Screen name="Ficha Gastronomico" component={GastronomicDetailScreen}/>
      <Stack.Screen name="Gastronomicos - Mapa" component={GastronomicsMapScreen} />
      <Stack.Screen name="Filtros - Gastronomicos" component={FiltersScreen} />
    </Stack.Navigator>
  );
};

export default GastronomicNavigator;