import React from 'react';
import {styles} from './Vegetarian.styles';
import {Text, View, Image} from 'react-native';
import {SafeAreaContainer} from '../../components/atoms/SafeAreaContainer';
import {OnboardingProgress} from '../../components/molecules/OnboardingProgress';
import {images} from '../../constants/images/images';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const Vegetarian = () => {
  return (
    <SafeAreaContainer>
      <View style={styles.wrapper}>
        <OnboardingProgress activeIndex={1} />
        <Text style={styles.subHeader}>A ew quick questions: </Text>
        <Text style={styles.header}>Are you a vegetarian</Text>
        <TouchableOpacity
          style={styles.option}
          onPress={() => console.log('option_pressed')}>
          <Image source={images.hamburger} style={styles.image} />
          <Text style={styles.text}>Nope show me all recipes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.option}
          onPress={() => console.log('option_pressed')}>
          <Image source={images.avocado} style={styles.image} />
          <Text style={styles.text}>Yes, hide recipes with meat</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaContainer>
  );
};