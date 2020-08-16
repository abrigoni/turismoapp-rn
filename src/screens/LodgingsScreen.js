import React, { useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, FlatList } from 'react-native';
import { SearchBar} from 'react-native-elements';
import { useQuery } from '@apollo/client';
import { GET_LODGINGS } from '../graphql/queries';
/* components */
import LodgingCard from '../components/LodgingCard';

const LodgingsScreen = () => {
  const { loading, error, data } = useQuery(GET_LODGINGS);
  const activeFilters = true;
  const [search, setSearch] = useState('');

  const updateSearch = (search) => {
    setSearch(search);
  };

  return (
    <View style={styles.container}>
      <Text>Alojamientos</Text>
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
          data={data.lodgings}
          keyExtractor = { (item, index) => index.toString() }
          renderItem={({ item }) => <LodgingCard lodging={item} />}
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

export default LodgingsScreen;