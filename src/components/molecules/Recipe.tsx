import React from 'react';
import {Image, Text} from 'react-native';
import {styles} from './Recipe.styles';
import {View} from 'react-native';

type RecipeProps = {
  image: any;
  title: string;
};

export const Recipe = ({image, title}: RecipeProps) => {
  return (
    <View style={styles.wrapper}>
      <Image source={image} style={styles.image} resizeMode="cover" />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
