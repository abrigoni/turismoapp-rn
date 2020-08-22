import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FavoritesScreen from '../screens/FavoritesScreen';
import FavoritesMapScreen from '../screens/FavoritesMapScreen';
import GastronomicDetailScreen from '../screens/GastronomicDetailScreen';
import LodgingDetailScreen from '../screens/LodgingDetailScreen';


const Stack = createStackNavigator();

const FavoriteNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favorites" component={FavoritesScreen}/>
      <Stack.Screen name="Favorites-Map" component={FavoritesMapScreen} />
      <Stack.Screen name="Gastronomic-Detail" component={GastronomicDetailScreen}/>
      <Stack.Screen name="Lodging-Detail" component={LodgingDetailScreen} />
    </Stack.Navigator>
  );
};

export default FavoriteNavigator;