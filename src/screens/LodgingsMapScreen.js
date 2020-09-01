import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { Context } from '../context/context';
import Geolocation from '@react-native-community/geolocation';


const LodgingsMapScreen = ({ navigation, route}) => {
  const { value } = useContext(Context);
  const lodgings = value.lodgings.data;
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
  
  function handleNavigationDetail(lodging) {
    navigation.navigate('Ficha Alojamiento', { lodging });
  }

  return (
    <MapView
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      region={{
        latitude: position.lat,
        longitude: position.lng,
        latitudeDelta: 0.0111,
        longitudeDelta: 0.0111
      }}
      showsUserLocation
    >
      {lodgings.map((element, idx) => (element.visible && <Marker key={idx}  coordinate={{ latitude: element.lat, longitude: element.lng }} pinColor="#18192F" title={element.name} onPress={() => handleNavigationDetail(element)}/> ) )}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

export default LodgingsMapScreen;