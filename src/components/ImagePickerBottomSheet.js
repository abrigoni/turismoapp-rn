import React from 'react';
import { BottomSheet, Icon } from 'react-native-elements';

export default function (props) {
  const handleCameraClick = () => {
    console.log("camera");
  };

  const handleGalleryClick = () => {
    console.log("gallery");
  };

  return (
    <BottomSheet
      list={[
        {
          leftIcon: { name: "photo-camera", type: "material", color: "#18192F" },
          title: 'Camara',
          onPress: handleCameraClick,
        },
        {
          leftIcon: { name: "photo-album", type: "material", color: "#18192F" },
          title: 'Galeria',
          onPress: handleGalleryClick,
        },
        {
          title: 'Cancelar',
          containerStyle: { backgroundColor: 'red' },
          titleStyle: { color: 'white' },
          leftIcon: {name: 'close', color: 'white'}
        },
      ]}
      cancelButtonIndex={2}
      buttonProps={{ title: 'Crear Recuerdo' }}
    />
  );
}
