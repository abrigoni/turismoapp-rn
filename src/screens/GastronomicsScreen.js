import React, {useState} from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { SearchBar} from 'react-native-elements';
import { useQuery } from '@apollo/client';
import { GET_GASTRONOMICS } from '../graphql/queries';
/* components */
import GastronomicCard from '../components/GastronomicCard';

const GastronomicsScreen = () => {
  const { loading, error, data } = useQuery(GET_GASTRONOMICS);
  const activeFilters = true;
  const [search, setSearch] = useState('');

  const updateSearch = (search) => {
    setSearch(search);
  };
  
  return (
    <View>
      <Text>Gastronomicos</Text>
      <SearchBar
        lightTheme
        placeholder="Buscar"
        value={search}
        onChangeText={updateSearch}
      />
      {activeFilters && <Text>Filtrado por: </Text>}

      <View style={styles.flatList}>
        {loading && <ActivityIndicator />}

        {data && <FlatList
          data={data.gastronomics}
          keyExtractor = { (item, index) => index.toString() }
          renderItem={({ item }) => <GastronomicCard gastronomic={item} />}
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
  }
});

export default GastronomicsScreen;