import React from 'react';
import {Button} from 'react-native';

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
  return <Button title={text} onPress={onPress} color={color} />;
};
