import React, { useState, useContext, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { SearchBar, Icon } from 'react-native-elements';
import { useQuery } from '@apollo/client';
import { GET_GASTRONOMICS } from '../graphql/queries';
import { Context } from '../context/context';
import GastronomicCard from '../components/GastronomicCard';

const GastronomicsScreen = ({ navigation }) => {
  const { loading, error, data } = useQuery(GET_GASTRONOMICS);
  const { value, setValue } = useContext(Context);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (data) {
      value.gastronomics.data = data.gastronomics.map(x => ({ ...x, visible: true }));
      setValue({ ...value });
    }
  }, [data]);

  const updateSearch = (search) => {
    setSearch(search);
  };

  const navigateToGastronomicDetail = (gastronomic) => {
    navigation.navigate('Gastronomic-Detail', { gastronomic })
  };

  const handleNavigationToGastronomicMap = () => {
    navigation.navigate('Gastronomics-Map', { gastronomics: data.gastronomics, position: null });
  };

  const handleNavigationToFilter = () => {
    navigation.navigate('Filters', { isLodging: false });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    value.gastronomics.data.forEach((item) => {
      item.visible = item.name?.toLowerCase().includes(search.toLowerCase());
    });
    setValue({...value});
  };

  const handleClear = (e) => {
    e.preventDefault();
    value.gastronomics.data.forEach((item) => {
      item.visible = true;
    });
    setValue({...value});
  }

  return (
    <View>
      <Text>Gastronomicos</Text>
      <View style={styles.row}>
        <Icon
          name="map"
          type="material"
          size={30}
          color="#4A5BEA"
          onPress={handleNavigationToGastronomicMap}
        />
        <SearchBar
          searchIcon={false}
          lightTheme
          placeholder="Buscar"
          value={search}
          onChangeText={updateSearch}
          containerStyle={styles.container}
        />
        <Icon 
          name="search"
          type="material"
          size={30}
          color="#4A5BEA"
          onPress={handleSearch}
        />
        <Icon
          name="filter-list"
          type="material"
          size={30}
          color="#4A5BEA"
          onPress={handleNavigationToFilter}
        />
      </View>
      {/* {activeFilters && <Text>Filtrado por: </Text>} */}
      <Text>Resultados: {value.gastronomics.data.filter(x => x.visible).length}</Text>
      <Text onPress={handleClear}>Borrar filtros</Text>
      <View style={styles.flatList}>
        {loading && <ActivityIndicator />}
        {value.gastronomics.data && <FlatList
          data={value.gastronomics.data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (item.visible && <GastronomicCard gastronomic={item} onPress={navigateToGastronomicDetail} />)}
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