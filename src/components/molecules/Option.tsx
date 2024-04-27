import React from 'react';
import {styles} from './Option.styles';
import {Text, TouchableOpacity} from 'react-native';
import {Checkbox} from '../atoms/Checkbox';

export const Option = ({text, onPress, isChecked, isOptionChosen}: any) => {
  let isChosenOptions = isChecked && isOptionChosen;
  const handlePressOption = () => {
    onPress(text);
  };

  return (
    <TouchableOpacity
      onPress={handlePressOption}
      style={[styles.wrapper, isChosenOptions && styles.chosen]}
      disabled={isOptionChosen && !isChecked}>
      <Checkbox
        fillColor="grey"
        isChecked={isChecked}
        onPress={handlePressOption}
      />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
