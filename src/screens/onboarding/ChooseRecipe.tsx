import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {styles} from './ChooseRecipe.styles';
import {images} from '../../constants/images/images';
import {Recipe} from '../../components/molecules/Recipe';
import {Text} from 'react-native';
import {SafeAreaContainer} from '../../components/atoms/SafeAreaContainer';
import {PrimaryButton} from '../../components/atoms/PrimaryButton';
import {colors} from '../../constants/styles/colors';
import {PopupAnimation} from '../../components/animations/PopupAnimation';
import {BackButton} from '../../components/molecules/BackButton';

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

export const ChooseRecipe = ({
  setRecipes,
  handleCheckActiveRecipes,
  isGoNext,
  navigate,
}: any) => {
  return (
    <SafeAreaView
      style={{backgroundColor: colors.background_onboarding, flex: 1}}>
      <View style={styles.wrapper}>
        <View>
          <Text style={styles.header}>Choose at least 2 recipes you like!</Text>
          <Text style={styles.subHeader}>
            This will help us show you right recipes
          </Text>
        </View>
        <View style={styles.recipeWrapper}>
          {choiceRecipeData.slice(0, 2).map(item => {
            let isChecked = handleCheckActiveRecipes(item.title);
            return (
              <Recipe
                key={item.title}
                {...item}
                onPress={setRecipes}
                isChecked={isChecked}
              />
            );
          })}
        </View>
        <View style={styles.recipeWrapper}>
          {choiceRecipeData.slice(2).map(item => {
            let isChecked = handleCheckActiveRecipes(item.title);
            return (
              <Recipe
                key={item.title}
                {...item}
                onPress={setRecipes}
                isChecked={isChecked}
              />
            );
          })}
        </View>
      </View>
      {isGoNext && (
        <PopupAnimation defaultOffset={100} getToValue={0}>
          <View style={styles.buttonWrapper}>
            <PrimaryButton
              backgroundColor={colors.dark_red}
              textColor="white"
              text="Next"
              onPress={() => navigate()}
            />
          </View>
        </PopupAnimation>
      )}
    </SafeAreaView>
  );
};
