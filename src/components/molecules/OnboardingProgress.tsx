import React from 'react';
import {ONBOARDING_SCREENS_QUANTITY} from '../../constants/onboarding';
import {View, Text} from 'react-native';
import {styles} from './OnboardingProgress.styles';
import {sizes} from '../../constants/styles/sizes';

type OnboardingProgressProps = {
  activeIndex: number;
};

export const OnboardingProgress = ({
  activeIndex = 0,
}: OnboardingProgressProps) => {
  const views = Array.from({length: ONBOARDING_SCREENS_QUANTITY}).fill(0);

  return (
    <View style={styles.wrapper}>
      <Text style={{color: 'white'}}>
        {activeIndex} of {ONBOARDING_SCREENS_QUANTITY}
      </Text>
      <View style={styles.progressWrapper}>
        {views.map((_, currentIndex) => {
          let backgroundColor = 'white';
          let isLeftBorderRadius = currentIndex === 0;
          let isRightBorderRadius =
            currentIndex === ONBOARDING_SCREENS_QUANTITY - 1;

          if (currentIndex + 1 <= activeIndex) {
            backgroundColor = 'grey';
          }
          return (
            <View
              key={currentIndex}
              style={[
                styles.bar,
                {
                  backgroundColor: backgroundColor,
                  borderTopLeftRadius: isLeftBorderRadius ? sizes.xsm : 0,
                  borderBottomLeftRadius: isLeftBorderRadius ? sizes.xsm : 0,
                  borderTopRightRadius: isRightBorderRadius ? sizes.xsm : 0,
                  borderBottomRightRadius: isRightBorderRadius ? sizes.xsm : 0,
                },
              ]}></View>
          );
        })}
      </View>
    </View>
  );
};
