import React from 'react';
import { PermissionsAndroid } from 'react-native';
import { BottomSheet } from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';

const options = {
  title: 'Seleccionar Imagen',
};

const requestCameraPermission = async () => {
  try {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: "TurismoApp Permisos",
        message:
          "TurismoApp necesita acceso a la camara y galeria" +
          "para que puedas elegir fotos y guardarlas como recuerdos.",
        buttonNegative: "Rechazar",
        buttonPositive: "Aceptar"
      }
    );
  } catch (err) {
    console.warn(err);
  }
};

export default function ({handleImageSave}) {

  const handleCameraClick = () => {
    requestCameraPermission();
    ImagePicker.launchCamera(options, response => {
      if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const image = {
          uri: response.uri,
          fileName: response.fileName
        };
        handleImageSave(image);
      }
    })
  };

  const handleGalleryClick = () => {
    ImagePicker.launchImageLibrary(options, response => {
      if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const image = {
          uri: response.uri,
          fileName: response.fileName
        };
        handleImageSave(image);
      }
    })
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
