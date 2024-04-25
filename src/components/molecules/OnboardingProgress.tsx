import React, {useCallback, useState} from 'react';
import {ONBOARDING_SCREENS_QUANTITY} from '../../constants/onboarding';
import {View, Text} from 'react-native';
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

export const OnboardingProgress = ({
  activeIndex = 0,
}: OnboardingProgressProps) => {
  const views = Array.from({length: ONBOARDING_SCREENS_QUANTITY}).fill(0);
  const [width, setWidth] = useState(0);
  let animatedWidth = useSharedValue(0);

  const onLayout = useCallback((event: any) => {
    const {width: currentWidth} = event.nativeEvent.layout;
    setWidth(() => Math.ceil(currentWidth / ONBOARDING_SCREENS_QUANTITY));
  }, []);

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
    <View style={styles.wrapper}>
      <Text style={styles.text}>
        {activeIndex} of {ONBOARDING_SCREENS_QUANTITY}
      </Text>
      <View style={styles.progressWrapper} onLayout={onLayout}>
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
