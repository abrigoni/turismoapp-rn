import React from 'react';
import { View, ScrollView, Text, StyleSheet, } from 'react-native';
import { Chip, Button } from 'react-native-paper';


export default function ActiveFilters({data, handleClear, results}) {
  return (
    <View style={styles.filters}>
      <Text>Resultados: {results}</Text>
      <ScrollView horizontal>
        {data.map((item, idx) => <Chip key={idx} style={styles.chip} textStyle={{ color: "white" }}>{item}</Chip>)}
      </ScrollView>
      {data.length !== 0 && <Button style={styles.button} onPress={handleClear} mode="contained">Borrar filtros</Button>}
    </View>
  );
} 

const styles = StyleSheet.create({
  filters: {
    paddingTop: 5,
    paddingHorizontal: 30
  },
  chip: {
    marginTop: 5,
    marginRight: 5,
    marginBottom: 5,
    backgroundColor: "#4A5BEA",
    color: "white"
  },
  button: {
    marginTop: 10,
    backgroundColor: "#18192F",
    color: "white",
    borderRadius: 6,
    marginHorizontal: 20,
  }
});