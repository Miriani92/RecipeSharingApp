import React from 'react';
import {Vegetarian as VegetarianScreen} from '../../screens/onboarding/Vegetarian';
import {useNavigation} from '@react-navigation/native';

export const Vegetarian = () => {
  const navigation = useNavigation<any>();
  const navigateNextScreen = () => {
    navigation.navigate('WhatsImportant');
  };
  return <VegetarianScreen navigate={navigateNextScreen} />;
};
