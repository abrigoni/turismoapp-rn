import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LodgingNavigator from './navigation/LodgingNavigator';
import GastronomicNavigator from './navigation/GastronomicNavigator';
import FavoriteNavigator from './navigation/FavoriteNavigator';
import { Context } from './context/context';
import { AsyncStorage } from 'react-native';

const Tab = createBottomTabNavigator();

const App = () => {
  const [value, setValue] = useState({
    lodgings: {
      data: [],
      activeFilters: []
    },
    gastronomics: {
      data: [],
      activeFilters: []
    },
    favorites: null
  });

  async function getFavs() {
    const favsStorage = await AsyncStorage.getItem('Favoritos');
    const favs = JSON.parse(favsStorage);
    console.log(favs?.length);
    setValue({...value, favorites: favs ?? []});
  }

  useEffect(() => {
    getFavs();
  }, []);

  return (
    <NavigationContainer>
      <Context.Provider value={{ value, setValue }}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Alojamientos') {
                iconName = 'hotel';
              } else if (route.name === 'Gastronomicos') {
                iconName = 'restaurant';
              } else if (route.name === 'Favoritos') {
                iconName = focused ? 'favorite' : 'favorite-border';
              }
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#18192F',
            inactiveTintColor: '#CACAD8',
          }}
        >

          <Tab.Screen name="Alojamientos" component={LodgingNavigator} />
          <Tab.Screen name="Favoritos" component={FavoriteNavigator} />
          <Tab.Screen name="Gastronomicos" component={GastronomicNavigator} />
        </Tab.Navigator>
      </Context.Provider>
    </NavigationContainer>
  );
};

export default App;
