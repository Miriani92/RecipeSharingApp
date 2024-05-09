import React from 'react';
import {Home as HomeScreen} from '../../screens/onboarding/Home';
import {useNavigation} from '@react-navigation/native';

export const Home = () => {
  const navigation = useNavigation<any>();
  const navigateNextScreen = (screen: string) => {
    navigation.navigate(screen);
  };
  return <HomeScreen navigate={navigateNextScreen} />;
};
