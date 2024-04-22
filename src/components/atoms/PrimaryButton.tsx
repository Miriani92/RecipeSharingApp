import React, {FC} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from './PrimaryButton.styles';

export type ButtonProps = {
  text: string;
  textColor: string;
  backgroundColor: string;
  onPress: () => void;
  style?: any;
};

export const PrimaryButton: FC<ButtonProps> = ({
  text,
  onPress = () => console.log('Primary Button Clicked'),
  textColor = 'white',
  backgroundColor = 'green',
  style = {},
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.wrapper, {backgroundColor, ...style}]}>
      <Text style={[styles.text, {color: textColor}]}>{text}</Text>
    </TouchableOpacity>
  );
};
