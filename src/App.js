import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FavoritesScreen from './screens/FavoritesScreen';
import LodgingNavigator from './navigation/LodgingNavigator';
import GastronomicNavigator from './navigation/GastronomicNavigator';
import { Context } from './context/context';

const Tab = createBottomTabNavigator();

const App = () => {
  const [value, setValue] = useState({
    lodgings: {
      data: [],
      activeFilters: {
        "locations": [],
        "classifications": [],
        "categories": []
      }
    },
    gastronomics: {
      data: [],
      activeFilters: {
        "locations": [],
        "specialities": [],
        "activities": []
      }
    },
    favorites: {
      data: [],
    }
  });
  return (
    <NavigationContainer>
      <Context.Provider value={{ value, setValue }}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Lodgings') {
                iconName = 'hotel';
              } else if (route.name === 'Gastronomics') {
                iconName = 'restaurant';
              } else if (route.name === 'Favorites') {
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

          <Tab.Screen name="Lodgings" component={LodgingNavigator} />
          <Tab.Screen name="Favorites" component={FavoritesScreen} />
          <Tab.Screen name="Gastronomics" component={GastronomicNavigator} />
        </Tab.Navigator>
      </Context.Provider>
    </NavigationContainer>
  );
};

export default App;
