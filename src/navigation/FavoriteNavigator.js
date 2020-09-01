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
      <Stack.Screen name="Favoritos" component={FavoritesScreen}/>
      <Stack.Screen name="Favoritos - Mapa" component={FavoritesMapScreen} />
      <Stack.Screen name="Ficha Gastronomico" component={GastronomicDetailScreen}/>
      <Stack.Screen name="Ficha Alojamiento" component={LodgingDetailScreen} />
    </Stack.Navigator>
  );
};

export default FavoriteNavigator;