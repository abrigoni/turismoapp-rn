import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LodgingsScreen from '../screens/LodgingsScreen';
import LodgingDetailScreen from '../screens/LodgingDetailScreen';
import LodgingsMapScreen from '../screens/LodgingsMapScreen';
import FiltersScreen from '../screens/FiltersScreen';

const Stack = createStackNavigator();

const LodgingNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Alojamientos" component={LodgingsScreen} />
      <Stack.Screen name="Ficha Alojamiento" component={LodgingDetailScreen} />
      <Stack.Screen name="Alojamientos - Mapa" component={LodgingsMapScreen} />
      <Stack.Screen name="Filtros - Alojamientos" component={FiltersScreen} />
    </Stack.Navigator>
  );
};

export default LodgingNavigator;