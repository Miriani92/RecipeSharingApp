import React, {useCallback, useEffect} from 'react';
import {Text, View} from 'react-native';
import {PrimaryButton} from '../../components/atoms/PrimaryButton';
import {styles} from './Personalize.styles';
import {PopupAnimation} from '../../components/animations/PopupAnimation';
import {SafeAreaContainer} from '../../components/atoms/SafeAreaContainer';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../constants/styles/colors';
import {images} from '../../constants/images/images';
import Animated from 'react-native-reanimated';
import {
  useSharedValue,
  withTiming,
  Easing,
  useAnimatedStyle,
} from 'react-native-reanimated';

export const Personalize = () => {
  const scale = useSharedValue(0);
  const navigation = useNavigation<any>();

  const startAnimation = useCallback(() => {
    scale.value = withTiming(1, {
      duration: 600,
      easing: Easing.quad,
    });
  }, [scale]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}, {translateY: -50}],
    };
  });
  useEffect(() => {
    startAnimation();
  }, [startAnimation]);

  return (
    <SafeAreaContainer>
      <View style={styles.wrapper}>
        <View style={styles.headerWrapper}>
          <Text style={styles.header}>
            Personalize your experience by creating account
          </Text>
          <Text style={styles.subHeader}>
            We'll recommend recipes based on your preferences
          </Text>
        </View>
        <View style={styles.imageWrapper}>
          <Animated.Image
            source={images.pizza}
            resizeMode="cover"
            style={[styles.image, animatedStyle]}
          />
        </View>
      </View>
      <PopupAnimation defaultOffset={100} getToValue={0}>
        <View style={styles.buttonWrapper}>
          <PrimaryButton
            backgroundColor={colors.dark_red}
            textColor="white"
            text="Sign Up"
            onPress={() => navigation.navigate('SignUp')}
          />
        </View>
      </PopupAnimation>
    </SafeAreaContainer>
  );
};
