import React, { useState } from 'react';
import { Image } from 'react-native-elements';
import { TouchableOpacity, StyleSheet } from 'react-native';
import DeleteDialog from './DeleteDialog';

export default function Memory({ image, onRemove }) {
  const [dialogVisible, setDialogVisible] = useState(false);

  const showDialog = () => setDialogVisible(true);

  const hideDialog = () => setDialogVisible(false);

  const handleConfirm = () => onRemove(image);

  return (
    <React.Fragment>
      <TouchableOpacity onLongPress={() => showDialog()}>
        <Image
          source={{ uri: image.uri }}
          style={styles.image}
        />
      </TouchableOpacity>
      <DeleteDialog visible={dialogVisible} hideDialog={hideDialog} handleConfirm={handleConfirm}/>
    </React.Fragment>
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