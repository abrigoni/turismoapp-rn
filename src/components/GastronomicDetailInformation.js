import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Chip } from 'react-native-paper';
import EstablishmentLocationMap from './EstablishmentLocationMap';

const GastronomicDetailInformation = ({ gastronomic }) => {
  const { specialities, activities, address, lat, lng } = gastronomic;
  console.log(specialities);
  return (
    <View style={styles.container}>
      <Text style={styles.sectionText}>Especialidades</Text>
      <View style={styles.chipsContainer}>
        {specialities.map((element, idx) => <Chip key={idx} type="flat" style={styles.chip} textStyle={{color:"white"}}>{element.name} </Chip>)}
      </View>
      <Text style={styles.sectionText}>Actividades</Text>
      <View style={styles.chipsContainer}>
        {activities.map((element, idx) => <Chip key={idx} type="flat" style={styles.chip} textStyle={{color:"white"}}>{element.name} </Chip>)}
      </View>
      <EstablishmentLocationMap address={address} lat={lat} lng={lng} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
  },
  sectionText: {
    fontSize: 22,
    color: "#18192F",
    marginBottom: 10,
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
  chip: {
    marginTop: 5,
    marginRight: 5,
    backgroundColor: "#4A5BEA",
    color: "white"
  },
  chipsContainer: {
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    marginBottom: 15,
    flexWrap: "wrap"
  }
});

export default GastronomicDetailInformation;