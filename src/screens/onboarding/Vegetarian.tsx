import React from 'react';
import {styles} from './Vegetarian.styles';
import {Text, View, Image, SafeAreaView} from 'react-native';
import {SafeAreaContainer} from '../../components/atoms/SafeAreaContainer';
import {images} from '../../constants/images/images';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const Vegetarian = ({navigate}: any) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.subHeader}>A ew quick questions: </Text>
      <Text style={styles.header}>Are you a vegetarian</Text>
      <TouchableOpacity style={styles.option} onPress={() => navigate()}>
        <Image source={images.hamburger} style={styles.image} />
        <Text style={styles.text}>Nope show me all recipes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => navigate()}>
        <Image source={images.avocado} style={styles.image} />
        <Text style={styles.text}>Yes, hide recipes with meat</Text>
      </TouchableOpacity>
    </View>
  );
};
