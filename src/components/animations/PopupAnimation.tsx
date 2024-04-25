import React from 'react';
import {useCallback, useEffect} from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

export const PopupAnimation = ({children, defaultOffset, getToValue}: any) => {
  const translateY = useSharedValue(defaultOffset);

  const startAnimation = useCallback(() => {
    translateY.value = withTiming(getToValue, {duration: 600});
  }, [getToValue, translateY]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
    };
  });
  useEffect(() => {
    startAnimation();
  }, [startAnimation]);

  return <Animated.View style={animatedStyle}>{children}</Animated.View>;
};
