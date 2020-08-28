import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Dialog, Portal, Button } from 'react-native-paper';


export default function DeleteDialog({ visible, hideDialog, handleConfirm }) {
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title>Confirmar acción</Dialog.Title>
        <Dialog.Content>
          <Text>¿Esta seguro que desea borrar el recuerdo?</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button style={styles.cancelButton} mode="outlined" onPress={hideDialog}>Cancelar</Button>
          <Button style={styles.confirmButton} mode="contained" onPress={handleConfirm}>Confirmar</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}

const styles = StyleSheet.create({
  cancelButton: {
    color: "#18192F",
    borderColor: "#18192F",
    marginRight: 15,
  },
  confirmButton: {
    backgroundColor: "#18192F",
    color: "white",
  },
})
