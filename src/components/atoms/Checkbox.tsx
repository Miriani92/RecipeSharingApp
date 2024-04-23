import React from 'react';
import CheckBox from 'react-native-bouncy-checkbox';

export const Checkbox = () => {
  return (
    <CheckBox
      size={32}
      fillColor="red"
      unFillColor="red"
      textStyle={{fontFamily: 'JosefinSans-Regular'}}
      isChecked={true}
      onPress={(isChecked: boolean) => {
        console.log(isChecked);
      }}
    />
  );
};
