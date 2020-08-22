import React from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import ImagePickerBottomSheet from './ImagePickerBottomSheet';

export default function ({ isFavorite, establishment, isGastronomic }) {

  const renderMemories = () => {
    return (
      <View>
        <ImagePickerBottomSheet />
      </View>
    );
  };

  const renderNoFavMessage = () => {
    return <Text>Este establecimiento no esta marcado como favorito. Para añadir recuerdos añadalo a sus favoritos.</Text>;
  }
  return (
    <ScrollView style={styles.container}>
      {isFavorite ? renderMemories() : renderNoFavMessage()}
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
  },
});
