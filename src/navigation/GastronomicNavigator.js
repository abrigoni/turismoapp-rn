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
      <Stack.Screen name="Gastronomics" component={GastronomicsScreen}/>
      <Stack.Screen name="Gastronomic-Detail" component={GastronomicDetailScreen}/>
      <Stack.Screen name="Gastronomics-Map" component={GastronomicsMapScreen} />
      <Stack.Screen name="Filters" component={FiltersScreen} />
    </Stack.Navigator>
  );
};

export default GastronomicNavigator;