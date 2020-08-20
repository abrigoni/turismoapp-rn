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
      <Stack.Screen name="Lodgings" component={LodgingsScreen} />
      <Stack.Screen name="Lodging-Detail" component={LodgingDetailScreen} />
      <Stack.Screen name="Lodgings-Map" component={LodgingsMapScreen} />
      <Stack.Screen name="Filters" component={FiltersScreen} />
    </Stack.Navigator>
  );
};

export default LodgingNavigator;