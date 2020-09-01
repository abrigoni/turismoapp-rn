import React, { useContext, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { useQuery } from '@apollo/client';
import { GET_LODGINGS_FILTERS, GET_GASTRONOMICS_FILTERS } from '../graphql/queries';
import { Context } from '../context/context';
import FilterChip from '../components/FilterChip';

const FiltersScreen = ({ navigation, route }) => {
  const { isLodging } = route.params;
  const { value, setValue } = useContext(Context);
  const { loading, data, error } = useQuery(isLodging ? GET_LODGINGS_FILTERS : GET_GASTRONOMICS_FILTERS);
  const [ filters, setFilters ] = useState({
    lodgings: {
      locations: [],
      classifications: [],
      categories: []
    },
    gastronomics: {
      locations: [],
      specialities: [],
      activities: []
    },
  });

  const handleGastronomicsFilterSelect = (key, element, wasSelected) => {
    let gastronomicsFilters = filters.gastronomics;

    if (wasSelected) {
      gastronomicsFilters[key] = gastronomicsFilters[key].filter(x => x !== element);
    } else {
      gastronomicsFilters[key].push(element);
    }
    setFilters({...filters})
  };

  const handleLodgingsFilterSelect = (key, element, wasSelected) => {
    let lodgingsFilters = filters.lodgings;

    if (wasSelected) {
      lodgingsFilters[key] = lodgingsFilters[key].filter(x => x !== element);
    } else {
      lodgingsFilters[key].push(element);
    }
    setFilters({...filters});

  };


  const handleFilter = () => {
    if (isLodging) {
      const { locations, classifications, categories } = filters.lodgings;
      value.lodgings.activeFilters = [].concat(locations, classifications, categories);
      value.lodgings.data.forEach(x => {
        if (
          filters.lodgings.locations.includes(x.location.name) ||
          filters.lodgings.classifications.includes(x.classification.name) || 
          filters.lodgings.categories.includes(x.category.stars)
        ) {
          x.visible = true;
        } else 
          x.visible = false;
      });
    }
    else {
      const { locations, specialities, activities } = filters.gastronomics;
      value.gastronomics.activeFilters = [].concat(locations, specialities, activities);
      value.gastronomics.data.forEach(x => {
        if (
          filters.gastronomics.locations.includes(x.location?.name) ||
          x.activities.some(y => filters.gastronomics.activities.includes(y.name)) || 
          x.specialities.some(y => filters.gastronomics.specialities.includes(y.name)) 
        ) {
          x.visible = true;
        }
        else 
          x.visible = false;
      });
    }
    
    setValue({...value});
    navigation.goBack();
  };

  const renderLodgingsFilters = () => {
    return (
      <View>
        <Text style={styles.sectionText}>Ubicacion</Text>
        <View style={styles.chipsContainer}>
          {data.locations.map((element, idx) => <FilterChip key={idx} filterKey="locations" text={element.name} onPress={handleLodgingsFilterSelect} />)}
        </View>
        <Text style={styles.sectionText}>Clasificacion</Text>
        <View style={styles.chipsContainer}>
          {data.classifications.map((element, idx) => <FilterChip key={idx} filterKey="classifications" text={element.name} onPress={handleLodgingsFilterSelect}/>)}
        </View>
        <Text style={styles.sectionText}>Categoria</Text>
        <View style={styles.chipsContainer}>
          {data.categories.map((element, idx) => <FilterChip key={idx} filterKey="categories" text={element.stars} onPress={handleLodgingsFilterSelect}/>)}
        </View>
      </View>
    );
  };

  const renderGastronomicsFilters = () => {
    return (
      <View>
        <Text style={styles.sectionText}>Ubicacion</Text>
        <View style={styles.chipsContainer}>
          {data.locations.map((element, idx) => <FilterChip key={idx} filterKey="locations" text={element.name} onPress={handleGastronomicsFilterSelect}/> )}
        </View>
        <Text style={styles.sectionText}>Especialidades</Text>
        <View style={styles.chipsContainer}>
          {data.specialities.map((element, idx) => <FilterChip key={idx} filterKey="specialities" text={element.name} onPress={handleGastronomicsFilterSelect}/>)}
        </View>
        <Text style={styles.sectionText}>Actividades</Text>
        <View style={styles.chipsContainer}>
          {data.activities.map((element, idx) => <FilterChip key={idx} filterKey="activities" text={element.name} onPress={handleGastronomicsFilterSelect}/>)}
        </View>
      </View>
    )
  };

  return (
    <ScrollView className={styles.container}>
      <Text style={styles.sectionText}>Seleccione los filtros: </Text>
      {data && (isLodging ? renderLodgingsFilters() : renderGastronomicsFilters())}

      <Button style={styles.button} onPress={handleFilter} mode="contained">
        Filtrar
      </Button>
    </ScrollView>

  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionText: {
    fontSize: 22,
    color: "#18192F",
    marginBottom: 10,
    marginLeft: 20,
  },
  text: {
    fontSize: 18,
    color: "black",
  },
  chipsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    flexWrap: "wrap",
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: "#18192F",
    color: "white",
    borderRadius: 20,
    marginHorizontal: 20,
  }
});

export default FiltersScreen;