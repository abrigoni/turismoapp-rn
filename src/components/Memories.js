import React, { useContext, useState } from 'react';
import { ScrollView, View, StyleSheet, Text, AsyncStorage } from 'react-native';
import ImagePickerBottomSheet from './ImagePickerBottomSheet';
import { Context } from '../context/context';
import Memory from './Memory';

export default function ({ isFavorite, establishment, isGastronomic }) {
  const { value, setValue } = useContext(Context);

  const removeImage = (memory) => {
    let est = value.favorites.find(x => x.id === establishment.id && isGastronomic === x.isGastronomic);
    est.memories = est.memories.filter(x => x.fileName !== memory.fileName);
    updateStorage();
    setValue({...value});
  };

  const saveImage = (image) => {
    let est = value.favorites.find(x => x.id === establishment.id && isGastronomic === x.isGastronomic);
    console.log(est);
    est.memories.push(image);
    updateStorage();
    setValue({ ...value });
  };

  async function updateStorage() {
    await AsyncStorage.removeItem('Favoritos');
    await AsyncStorage.setItem('Favoritos', JSON.stringify(value.favorites));
  }

  const renderMemories = () => {
    if (establishment.memories.length === 0) return <Text>Todavia no hay recuerdos guardados</Text>;

    return (
      <View style={styles.gallery}>
        {establishment.memories.map((element, idx) => (
          <Memory key={idx} image={element} onRemove={removeImage} />
        ))}
      </View>
    );
  };

  const renderIsFav = () => {
    return (
      <View>
        <ImagePickerBottomSheet handleImageSave={saveImage} />
        {renderMemories()}
      </View>
    );
  };

  const renderNoFavMessage = () => {
    return <Text>Para añadir recuerdos añada este establecimiento a sus favoritos.</Text>;
  }
  return (
    <ScrollView style={styles.container}>
      {isFavorite ? renderIsFav() : renderNoFavMessage()}
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
  },
  gallery: {
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    flexWrap: "wrap",
  }
});
