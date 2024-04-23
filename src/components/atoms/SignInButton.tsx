import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {sizes} from '../../constants/styles/sizes';

type SignInButtonProps = {
  text: string;
  onPress: () => void;
  color?: string;
};

export const SignInButton: React.FC<SignInButtonProps> = ({
  text,
  onPress,
  color = 'blue',
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={{color, fontSize: sizes.bs}}>{text}</Text>
    </TouchableOpacity>
  );
};
