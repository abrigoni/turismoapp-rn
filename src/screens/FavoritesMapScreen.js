import React, {  useState, useContext, useEffect  } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { Context } from '../context/context';
import Geolocation from '@react-native-community/geolocation';

const FavoritesMapScreen = ({ route }) => {
  const { value } = useContext(Context);
  const { favorites } = value;
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