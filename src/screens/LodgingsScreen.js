import React, { useState, useContext, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, FlatList } from 'react-native';
import { SearchBar, Icon } from 'react-native-elements';
import { useQuery } from '@apollo/client';
import { GET_LODGINGS } from '../graphql/queries';
import { Context } from '../context/context';
import LodgingCard from '../components/LodgingCard';

const LodgingsScreen = ({ navigation }) => {
  const { loading, error, data } = useQuery(GET_LODGINGS);
  const { value, setValue } = useContext(Context);
  const [search, setSearch] = useState('');


  useEffect(() => {
    if (data) {
      value.lodgings.data = data.lodgings.map(x => ({ ...x, visible: true }));
      setValue({ ...value });
    }
  }, [data]);

  const updateSearch = (search) => {
    setSearch(search);
  };

  const navigateToLodgingDetail = (lodging) => {
    navigation.navigate('Lodging-Detail', { lodging })
  };

  const handleNavigationToLodgingMap = () => {
    navigation.navigate('Lodgings-Map', { lodgings: data.lodgings, position: null });
  }

  const handleNavigationToFilter = () => {
    navigation.navigate('Filters', { isLodging: true });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    value.lodgings.data.forEach((item) => {
      item.visible = item.name.toLowerCase().includes(search.toLowerCase());
    });
    setValue({ ...value });
  };

  const handleClear = (e) => {
    e.preventDefault();
    value.lodgings.data.forEach((item) => {
      item.visible = true;
    });
    setValue({ ...value });
  }

  return (
    <View style={styles.container}>
      <Text>Alojamientos</Text>
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
      <Text>Resultados: {value.lodgings.data.filter(x => x.visible).length}</Text>
      <Text onPress={handleClear}>Borrar filtros</Text>
      <View style={styles.flatList}>
        {loading && <ActivityIndicator />}

        {value.lodgings.data && <FlatList
          data={value.lodgings.data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (item.visible && <LodgingCard lodging={item} onPress={navigateToLodgingDetail} />)}
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