import React, {FC} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from './PrimaryButton.styles';
import {ActivityIndicator} from 'react-native';

export type ButtonProps = {
  text: string;
  textColor: string;
  backgroundColor: string;
  onPress: () => void;
  style?: any;
  disable?: boolean;
  isLoading?: boolean;
};

export const PrimaryButton: FC<ButtonProps> = ({
  text,
  onPress = () => console.log('Primary Button Clicked'),
  textColor = 'white',
  backgroundColor = 'green',
  style = {},
  disable = false,
  isLoading = false,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disable}
      style={[styles.wrapper, {backgroundColor, ...style}]}>
      {isLoading ? (
        <ActivityIndicator size="small" />
      ) : (
        <Text style={[styles.text, {color: textColor}]}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};
