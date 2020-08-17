import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

const GastronomicsMapScreen = ({route}) => {
  const { gastronomics, position } = route.params;
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
      {gastronomics.map((element, idx) => <Marker coordinate={{latitude: element.lat, longitude: element.lng}} /> )}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

export default GastronomicsMapScreen;