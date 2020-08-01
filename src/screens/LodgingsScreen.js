import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';

const LodgingsScreen = (props) => {
  return (
    <View>
      <Text>Alojamientos</Text>
      <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
        Press me
      </Button>
    </View>
  );
};

export default LodgingsScreen;