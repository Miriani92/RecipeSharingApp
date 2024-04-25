import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {styles} from './Recipe.styles';
import {View} from 'react-native';
import {Checkbox} from '../../components/atoms/Checkbox';

type RecipeProps = {
  image: any;
  title: string;
  onPress: (arg: any) => void;
  isChecked: boolean;
};

export const Recipe = ({image, title, onPress, isChecked}: RecipeProps) => {
  const handlePressRecipe = () => {
    onPress(title);
  };
  return (
    <TouchableOpacity onPress={handlePressRecipe} style={styles.wrapper}>
      <View style={styles.checkboxWrapper}>
        <Checkbox
          fillColor="grey"
          isChecked={isChecked}
          onPress={handlePressRecipe}
        />
      </View>
      <Image source={image} style={styles.image} resizeMode="cover" />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
