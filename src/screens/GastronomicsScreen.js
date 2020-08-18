import React, { useState, useContext} from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { SearchBar, Icon } from 'react-native-elements';
import { useQuery } from '@apollo/client';
import { GET_GASTRONOMICS } from '../graphql/queries';
import { Context } from '../context/context';
import GastronomicCard from '../components/GastronomicCard';

const GastronomicsScreen = ({ navigation }) => {
  const { loading, error, data } = useQuery(GET_GASTRONOMICS);
  const {value, setValue} = useContext(Context);
  const activeFilters = true;
  const [search, setSearch] = useState('');
  const updateSearch = (search) => {
    setSearch(search);
  };

  const navigateToGastronomicDetail = (gastronomic) => {
    navigation.navigate('Gastronomic-Detail', { gastronomic })
  };

  const handleNavigationToGastronomicMap = () => {
    navigation.navigate('Gastronomics-Map', { gastronomics: data.gastronomics, position: null});
  };

  return (
    <View>
      <Text>Gastronomicos</Text>
      <Text>{value.gastronomics.data[0]}</Text>
      <View style={styles.row}>
        <Icon
          name="map"
          type="material"
          size={30}
          color="#4A5BEA"
          onPress={handleNavigationToGastronomicMap}
        />
        <SearchBar
          lightTheme
          placeholder="Buscar"
          value={search}
          onChangeText={updateSearch}
          containerStyle={styles.container}
        />
        <Icon
          name="filter-list"
          type="material"
          size={30}
          color="#4A5BEA"
        />
      </View>
      {activeFilters && <Text>Filtrado por: </Text>}

      <View style={styles.flatList}>
        {loading && <ActivityIndicator />}
        {data && <FlatList
          data={data.gastronomics}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <GastronomicCard gastronomic={item} onPress={navigateToGastronomicDetail} />}
        />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1"
  },
  flatList: {
    padding: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  row: {
    paddingHorizontal: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
});

export default GastronomicsScreen;