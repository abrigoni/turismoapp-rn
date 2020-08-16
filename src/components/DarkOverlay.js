import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';

const DarkOverlay = (props) => {
  return (
    <ImageBackground
      source={{ uri: props.picture }}
      style={styles.container}
      imageStyle={{borderRadius: 20}}
    >
      <View style={styles.child}>
        {props.children}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 300,
    borderRadius: 20,
    marginBottom: 20,
  },
  child: {
    flex: 1,
    backgroundColor: 'rgba(24,25,47,0.3)',
    borderRadius: 20,
  }
});

export default DarkOverlay;