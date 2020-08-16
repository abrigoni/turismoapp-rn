import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

const EstablishmentLocationMap = ({ address, lat, lng }) => {

  return (
    <View style={styles.mapContainer}>
      <View style={styles.address}>
        <Text style={styles.text}>{address}</Text>
      </View>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: 0.0111,
          longitudeDelta: 0.0111
        }}
        showsUserLocation
        
      >
        <Marker coordinate={{latitude: lat, longitude: lng}}/>
      </MapView>
    </View>

  );
};

const styles = StyleSheet.create({
  mapContainer: {
    height: 200,
    width: "100%",
    borderColor: "#18192F",
    borderWidth: 2,
    borderRadius: 20,
    marginBottom: 20,
    overflow: "hidden"
  },
  address: {
    height: 30,
    color: "white",
    backgroundColor: 'rgba(24,25,47,0.8)',
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "white",
    fontSize: 16,
  },
  map: {
    flex: 1,
  }
})

export default EstablishmentLocationMap;