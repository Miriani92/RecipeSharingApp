import React from 'react';
import {ONBOARDING_SCREENS_QUANTITY} from '../../constants/onboarding';
import {View, Text, Dimensions} from 'react-native';
import {styles} from './OnboardingProgress.styles';
import {sizes} from '../../constants/styles/sizes';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import {colors} from '../../constants/styles/colors';

type OnboardingProgressProps = {
  activeIndex: number;
};
const {width: screenWidth} = Dimensions.get('window');
const stepsWidth = 50;

export const OnboardingProgress = ({
  activeIndex = 0,
}: OnboardingProgressProps) => {
  const views = Array.from({length: ONBOARDING_SCREENS_QUANTITY}).fill(0);
  const width =
    Math.ceil(screenWidth - sizes.sm - stepsWidth - (screenWidth * 10) / 100) /
    ONBOARDING_SCREENS_QUANTITY;

  let animatedWidth = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    animatedWidth.value = width;
    return {
      width: withTiming(animatedWidth.value, {
        duration: 600,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }),
    };
  });

  let getStyle = ({
    backgroundColor,
    isLeftBorderRadius,
    isRightBorderRadius,
  }: any) => {
    return {
      backgroundColor,
      borderTopLeftRadius: isLeftBorderRadius ? sizes.xsm : 0,
      borderBottomLeftRadius: isLeftBorderRadius ? sizes.xsm : 0,
      borderTopRightRadius: isRightBorderRadius ? sizes.xsm : 0,
      borderBottomRightRadius: isRightBorderRadius ? sizes.xsm : 0,
    };
  };

  const handleRenderAnimatedViews = (currentIndex: number) => {
    let backgroundColor = 'white';
    let isLeftBorderRadius = currentIndex === 0;
    let isRightBorderRadius = currentIndex === ONBOARDING_SCREENS_QUANTITY - 1;
    let applyAnimation = activeIndex - currentIndex === 1;
    if (currentIndex + 1 <= activeIndex) {
      backgroundColor = colors.background_progress;
    }
    let props = {
      backgroundColor,
      isLeftBorderRadius,
      applyAnimation,
      isRightBorderRadius,
    };
    let dynamicStyle = getStyle(props);

    return {applyAnimation, dynamicStyle};
  };

  return (
    <View style={[styles.wrapper]}>
      <Text style={styles.text}>
        {activeIndex} of {ONBOARDING_SCREENS_QUANTITY}
      </Text>
      <View style={styles.progressWrapper}>
        {views.map((_, currentIndex) => {
          const {applyAnimation, dynamicStyle} =
            handleRenderAnimatedViews(currentIndex);
          return (
            <Animated.View
              key={currentIndex}
              style={[
                styles.bar,
                dynamicStyle,
                applyAnimation ? animatedStyle : {width},
              ]}
            />
          );
        })}
      </View>
    </View>
  );
};
