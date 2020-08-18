import React, {useState, useContext} from 'react';
import { View, Text, ActivityIndicator, StyleSheet, FlatList } from 'react-native';
import { SearchBar, Icon } from 'react-native-elements';
import { useQuery } from '@apollo/client';
import { GET_LODGINGS } from '../graphql/queries';
import { Context } from '../context/context';
import LodgingCard from '../components/LodgingCard';

const LodgingsScreen = ({ navigation }) => {
  const { loading, error, data } = useQuery(GET_LODGINGS);
  const {value, setValue} = useContext(Context);
  const activeFilters = true;
  const [search, setSearch] = useState('');

  const updateSearch = (search) => {
    setSearch(search);
  };

  const navigateToLodgingDetail = (lodging) => {
    navigation.navigate('Lodging-Detail', { lodging })
  };

  const handleNavigationToLodgingMap = () => {
    navigation.navigate('Lodgings-Map', { lodgings: data.lodgings, position: null});
  }

  return (
    <View style={styles.container}>
      <Text>Alojamientos</Text>
      <Text>{value.lodgings.data[0]}</Text>
      <View style={styles.row}>
        <Icon
          name="map"
          type="material"
          size={30}
          color="#4A5BEA"
          onPress={handleNavigationToLodgingMap}
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
          data={data.lodgings}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <LodgingCard lodging={item} onPress={navigateToLodgingDetail} />}
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
  row: {
    paddingHorizontal: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  flatList: {
    padding: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }
});

export default LodgingsScreen;