import React, {useState} from 'react';
import { StyleSheet } from 'react-native';
import {Chip} from 'react-native-paper';

const FilterChip = ({filterKey, text, onPress}) => {
  const [selected, setSelected] = useState(false);

  const handleSwitch = () => {
    setSelected(!selected);
    onPress(filterKey, text, selected);
  };

  return (
    <Chip
      type="flat"
      style={styles.chip}
      textStyle={{ color: "white" }}
      onPress={handleSwitch}
      selected={selected}
      selectedColor="white"
    >
      {text}
    </Chip>
  );
};

const styles = StyleSheet.create({
  chip: {
    marginTop: 5,
    marginRight: 5,
    backgroundColor: "#4A5BEA",
    color: "white"
  },
});

export default FilterChip;