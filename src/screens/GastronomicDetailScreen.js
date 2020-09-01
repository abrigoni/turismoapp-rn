import React, { useState, useContext, useEffect } from 'react';
import { ScrollView, View, ImageBackground, StyleSheet, AsyncStorage } from 'react-native';
import { Text, ButtonGroup, Icon } from 'react-native-elements';
import GastronomicDetailInformation from '../components/GastronomicDetailInformation';
import { Context } from '../context/context';
import Memories from '../components/Memories';


const GastronomicDetailScreen = ({ route }) => {
  const { value, setValue } = useContext(Context);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const { gastronomic } = route.params;
  const buttons = ['Información', 'Recuerdos'];

  const handleToggleFav = (e) => {
    e.preventDefault();
    setIsFavorite(!isFavorite);
    if (isFavorite) {
      // remove
      const favToRemove = value.favorites.find(x => x.id === gastronomic.id && x.isGastronomic);
      value.favorites = value.favorites.filter(x => x !== favToRemove);
    } else {
      // add
      value.favorites.push({ ...gastronomic, isGastronomic: true, visible: true });
    }
    updateStorage();
    setValue({ ...value });
  };

  async function updateStorage() {
    await AsyncStorage.removeItem('Favoritos');
    await AsyncStorage.setItem('Favoritos', JSON.stringify(value.favorites));
  }

  useEffect(() => {
    setIsFavorite(value.favorites.findIndex(x => (x.id === gastronomic.id) && (x.isGastronomic)) !== -1);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={{ uri: gastronomic.picture }}
        style={styles.imageContainer}
        imageStyle={styles.image}
      >
        <View style={styles.imageContent}>
          <View style={styles.imageTextContainer}>
            <View>
              <Text style={styles.gastronomicName}>{gastronomic.name}</Text>
              <View style={styles.locationInfo}>
                <Icon
                  name="location-on"
                  type="material"
                  color="white"
                />
                <Text style={styles.locationText}>{gastronomic.location.name}</Text>
              </View>
            </View>
            <View style={styles.favoriteIcon}>
              <Icon  onPress={handleToggleFav} size={35} type="material" name={isFavorite ? "favorite" : "favorite-border"} color={isFavorite ? "#e74c3c" : "white"} />
            </View>

          </View>
        </View>
      </ImageBackground>
      <ButtonGroup
        onPress={(selectedIndex) => setSelectedIndex(selectedIndex)}
        selectedIndex={selectedIndex}
        buttons={buttons}
        containerStyle={{ height: 40, borderRadius: 20, }}
      />

      {selectedIndex === 0 ? <GastronomicDetailInformation gastronomic={gastronomic} /> : <Memories isFavorite={isFavorite} establishment={gastronomic} isGastronomic={true} />}

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    width: "100%",
    height: 350,
    borderBottomRightRadius: 40,
  },
  image: {
    borderBottomRightRadius: 40,
  },
  imageContent: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  imageTextContainer: {
    backgroundColor: 'rgba(24,25,47,0.8)',
    borderBottomRightRadius: 40,
    borderTopLeftRadius: 20,
    height: 60,
    width: "100%",
    paddingLeft: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  gastronomicName: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#FFF"
  },
  locationInfo: {
    flexDirection: "row",
    alignItems: "center"
  },
  locationText: {
    color: "white",
    paddingLeft: 10,
    fontSize: 18
  },
  favoriteIcon: {
    marginRight: 20,
  }
});

export default GastronomicDetailScreen;