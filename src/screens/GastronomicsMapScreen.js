import React, { useState, useContext, useEffect  } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { Context } from '../context/context';
import Geolocation from '@react-native-community/geolocation';

const GastronomicsMapScreen = ({route, navigation}) => {
  const { value } = useContext(Context);
  const gastronomics = value.gastronomics.data;
  const [position, setPosition] = useState({
    lat: -54.8064,
    lng: -68.305,
  });

  function getUserLocation() {
    Geolocation.getCurrentPosition(info => {
      setPosition({...position, lat: info.coords.latitude, lng: info.coords.longitude});
    });
  } 

  useEffect(() => {
    getUserLocation();
  }, []);

  function handleNavigationDetail(gastronomic) {
    navigation.navigate('Ficha Gastronomico', { gastronomic });
  }

  return (
    <MapView
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      region={{
        latitude: position ? position.lat : -54.8064,
        longitude: position ? position.lng : -68.305,
        latitudeDelta: 0.0111,
        longitudeDelta: 0.0111
      }}
      showsUserLocation
    >
      {gastronomics.map((element, idx) => (element.visible &&<Marker key={idx} coordinate={{latitude: element.lat, longitude: element.lng}} title={element.name} onPress={() => handleNavigationDetail(element)} /> ) )}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

export default GastronomicsMapScreen;