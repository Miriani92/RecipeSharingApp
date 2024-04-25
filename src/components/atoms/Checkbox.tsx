import React from 'react';
import CheckBox from 'react-native-bouncy-checkbox';

export const Checkbox = ({fillColor, isChecked, onPress}: any) => {
  return (
    <CheckBox
      size={32}
      fillColor={fillColor}
      unFillColor={fillColor}
      textStyle={{fontFamily: 'JosefinSans-Regular'}}
      isChecked={isChecked}
      onPress={onPress}
    />
  );
};
