import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { Context } from '../context/context';

const GastronomicsMapScreen = ({route}) => {
  const { position } = route.params;
  const { value } = useContext(Context);
  const gastronomics = value.gastronomics.data;
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
      {gastronomics.map((element, idx) => (element.visible &&<Marker key={idx} coordinate={{latitude: element.lat, longitude: element.lng}} /> ) )}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

export default GastronomicsMapScreen;