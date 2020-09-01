import React, {useContext, useState} from 'react';
import { View, Text, ActivityIndicator, StyleSheet, FlatList } from 'react-native';
import { SearchBar, Icon } from 'react-native-elements';
import { Context } from '../context/context';
import LodgingCard from '../components/LodgingCard';
import GastronomicCard from '../components/GastronomicCard';

const FavoritesScreen = ({navigation}) => {
  const { value, setValue } = useContext(Context);
  const [search, setSearch] = useState('');

  const updateSearch = (search) => {
    setSearch(search);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    value.favorites.forEach((item) => {
      item.visible = item.name.toLowerCase().includes(search.toLowerCase());
    });
    setValue({ ...value });
  };

  const handleClear = (e) => {
    e.preventDefault();
    value.favorites.forEach((item) => {
      item.visible = true;
    });
    setSearch("");
    setValue({ ...value });
  }

  const navigateToLodgingDetail = (lodging) => {
    navigation.navigate('Ficha Alojamiento', { lodging })
  };

  const handleNavigationToFavoriteMap = () => {
    navigation.navigate('Favoritos - Mapa', { position: null });
  };

  const navigateToGastronomicDetail = (gastronomic) => {
    navigation.navigate('Ficha Gastronomico', { gastronomic })
  };

  const renderItem = ({item}) => {
    if (item.visible) {
        return item.isGastronomic ? <GastronomicCard gastronomic={item} onPress={navigateToGastronomicDetail} /> : <LodgingCard lodging={item} onPress={navigateToLodgingDetail} /> 
    }
  };

  return (
    <View style={styles.container}>
      <Text>Favoritos</Text>
      <View style={styles.row}>
        <Icon
          name="map"
          type="material"
          size={30}
          color="#4A5BEA"
          onPress={handleNavigationToFavoriteMap}
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

      </View>

      {/* {activeFilters && <Text>Filtrado por: </Text>} */}
      <Text>Resultados: {value.favorites && value.favorites.filter(x => x.visible).length}</Text>
      <Text onPress={handleClear}>Borrar filtros</Text>
      <View style={styles.flatList}>

        {value.favorites && <FlatList
          data={value.favorites}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
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
export default FavoritesScreen;