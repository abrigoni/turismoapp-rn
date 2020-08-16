import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import DarkOverlay from './DarkOverlay';

const LodgingCard = ({ lodging }) => {
  return (
    <TouchableOpacity>
      <DarkOverlay picture={lodging.picture}>
        <View style={styles.cardContainer}>
          <View style={styles.titleSection}>
            <Text style={styles.cardTitle}>{lodging.name}</Text>
          </View>
          <Text style={styles.cardSubtitle}>{lodging.location.name}</Text>
          <Text style={styles.cardSubtitle}>{lodging.address}</Text>
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
  titleSection: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  cardSubtitle: {
    fontSize: 18,
    color: "white",
  }
})
export default LodgingCard;