import React, { useState, useContext } from 'react';
import { ScrollView, View, ImageBackground, StyleSheet } from 'react-native';
import { Text, ButtonGroup, Icon } from 'react-native-elements';
import LodgingDetailInformation from '../components/LodgingDetailInformation';
import Memories from '../components/Memories';
import { Context } from '../context/context';


const LodgingDetailScreen = ({ route }) => {
  const { value, setValue } = useContext(Context);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { lodging } = route.params;
  const buttons = ['Información', 'Recuerdos'];
  const [isFavorite, setIsFavorite] = useState(false);

  const handleToggleFav = (e) => {
    e.preventDefault();
    if (isFavorite) {
      // remove
    } else {
      // add
      value.favorites.push({ ...lodging, isGastronomic: false, visible: true });
    }
    setIsFavorite(!isFavorite);
    setValue({ ...value });
  };

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={{ uri: lodging.picture }}
        style={styles.imageContainer}
        imageStyle={styles.image}
      >
        <View style={styles.imageContent}>
          <View style={styles.imageTextContainer}>
            <View>
              <Text style={styles.lodgingName}>{lodging.name}</Text>
              <View style={styles.locationInfo}>
                <Icon
                  name="location-on"
                  type="material"
                  color="white"
                />
                <Text style={styles.locationText}>{lodging.location.name}</Text>
              </View>
            </View>
            <View style={styles.favoriteIcon}>
              <Icon size={35} onPress={handleToggleFav} type="material" name={isFavorite ? "favorite" : "favorite-border"} color={isFavorite ? "#e74c3c" : "white"} />
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

      {selectedIndex === 0 ? <LodgingDetailInformation lodging={lodging} /> : <Memories isFavorite={isFavorite} establishment={lodging} isGastronomic={false} />}
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
  lodgingName: {
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

export default LodgingDetailScreen;