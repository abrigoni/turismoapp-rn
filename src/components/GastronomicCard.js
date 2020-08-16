import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import DarkOverlay from './DarkOverlay';


const GastronomicCard = ({ gastronomic, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(gastronomic)}>
      <DarkOverlay picture={gastronomic.picture}>
        <View style={styles.cardContainer}>
          <Text style={styles.cardTitle}>{gastronomic.name}</Text>
          <Text style={styles.cardSubtitle}>{gastronomic.location.name}</Text>
          <Text style={styles.cardSubtitle}>{gastronomic.address}</Text>
        </View>
      </DarkOverlay>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    padding: 10,
  },
  cardTitle: {
    fontSize: 22,
    color: "white",
    fontWeight: "bold",
  },
  cardSubtitle: {
    fontSize: 18,
    color: "white",
  }
});

export default GastronomicCard;



