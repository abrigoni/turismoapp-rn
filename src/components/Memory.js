import React from 'react';
import { Text } from 'react-native-paper';
import { Image } from 'react-native-elements';
import { TouchableOpacity, StyleSheet } from 'react-native';

export default function Memory({ image, onRemove }) {
  return (
    <TouchableOpacity onLongPress={() => onRemove(image)}>
      <Image
        source={{ uri: image.uri }}
        style={styles.image}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 20,
    height: 150,
    width: 150,
    marginBottom: 5,
    marginRight: 5,
  }
})