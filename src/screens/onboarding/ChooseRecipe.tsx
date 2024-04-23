import React from 'react';
import {View} from 'react-native';
import {styles} from './ChooseRecipe.styles';
import {images} from '../../constants/images/images';
import {Recipe} from '../../components/molecules/Recipe';
import {Text} from 'react-native';
import {SafeAreaContainer} from '../../components/atoms/SafeAreaContainer';
import {OnboardingProgress} from '../../components/molecules/OnboardingProgress';

const choiceRecipeData = [
  {
    image: images.pasta,
    title: 'One Pot Garlic Parmesan Pasta',
  },
  {
    image: images.peanut_butter,
    title: 'Peanut Butter Energy Bites',
  },
  {
    image: images.chocolate_cookie,
    title: 'Vegan Chocolate Chip Cookies',
  },
  {
    image: images.buffalo,
    title: 'Buffalo \nCauliFlower',
  },
];

export const ChooseRecipe = () => {
  return (
    <SafeAreaContainer>
      <View style={styles.wrapper}>
        <OnboardingProgress activeIndex={4} />
        <View>
          <Text style={styles.header}>Choose at least 3 recipes you like!</Text>
          <Text style={styles.subHeader}>
            This will help us show you right recipes
          </Text>
        </View>
        <View style={styles.recipeWrapper}>
          {choiceRecipeData.slice(0, 2).map(item => {
            return <Recipe key={item.title} {...item} />;
          })}
        </View>
        <View style={styles.recipeWrapper}>
          {choiceRecipeData.slice(2).map(item => {
            return <Recipe key={item.title} {...item} />;
          })}
        </View>
      </View>
    </SafeAreaContainer>
  );
};
