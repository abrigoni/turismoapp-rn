import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { Context } from '../context/context';

const FavoritesMapScreen = ({ route }) => {
  const { position } = route.params;
  const { value } = useContext(Context);
  const { favorites } = value;
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
      {favorites.map((element, idx) => (element.visible && <Marker key={idx} coordinate={{ latitude: element.lat, longitude: element.lng }}/> ) )}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

export default FavoritesMapScreen;