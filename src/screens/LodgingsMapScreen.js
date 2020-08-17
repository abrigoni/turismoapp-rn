import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

const LodgingsMapScreen = ({route}) => {
  const { lodgings, position } = route.params;

  return (
    <MapView
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      region={{
        latitude: -54.8064,
        longitude: -68.305,
        latitudeDelta: 0.0111,
        longitudeDelta: 0.0111
      }}
      showsUserLocation
    >
      {lodgings.map((element, idx) => <Marker key={idx} coordinate={{latitude: element.lat, longitude: element.lng}} /> )}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

export default LodgingsMapScreen;