import React from 'react';
import {styles} from './BackButton.styles';
import {TouchableOpacity, Image} from 'react-native';
import {images} from '../../constants/images/images';

export const BackButton = ({onPress}: {onPress: () => void}) => {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
      <Image source={images.back} resizeMode="cover" style={styles.image} />
    </TouchableOpacity>
  );
};
