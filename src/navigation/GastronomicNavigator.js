import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import GastronomicsScreen from '../screens/GastronomicsScreen';
import GastronomicDetailScreen from '../screens/GastronomicDetailScreen';

const Stack = createStackNavigator();

const GastronomicNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Gastronomics" component={GastronomicsScreen}/>
      <Stack.Screen name="Gastronomic-Detail" component={GastronomicDetailScreen}/>
    </Stack.Navigator>
  );
};

export default GastronomicNavigator;