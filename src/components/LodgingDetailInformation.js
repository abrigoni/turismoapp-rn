import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import EstablishmentLocationMap from './EstablishmentLocationMap';

const LodgingDetailInformation = ({ lodging }) => {
  const { address, classification, category, lat, lng } = lodging;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{classification.name}</Text>
      <View style={styles.row}>
        <Icon 
          name="star"
          type="material"
          color="#f1c40f"
        />
        <Text style={styles.text}> ({category.value}) {category.stars}</Text>
      </View>
      <EstablishmentLocationMap address={address} lat={lat} lng={lng}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
  },
  text: {
    fontSize: 18,
    color: "black",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
    marginBottom: 20,
  },
});

export default LodgingDetailInformation;