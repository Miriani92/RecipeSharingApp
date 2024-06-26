import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {styles} from './WhatsImportant.styles';
import {colors} from '../../constants/styles/colors';
import {Option} from '../../components/molecules/Option';
import {PrimaryButton} from '../../components/atoms/PrimaryButton';
import {PopupAnimation} from '../../components/animations/PopupAnimation';

const optionData = [
  'I want to meal prep',
  'I want easy recipes',
  'I want something sweet',
  'I want comfort food',
  'I want to be adventurous',
];
export const WhatsImportant = ({
  setOptions,
  handleCheckActiveOptions,
  isOptionChosen,
  navigate,
}: any) => {
  return (
    <SafeAreaView
      style={{backgroundColor: colors.background_onboarding, flex: 1}}>
      <View style={styles.wrapper}>
        <View style={styles.headerWrapper}>
          <Text style={styles.header}>
            What's most important to you when cooking?
          </Text>
          <Text style={styles.subHeader}>Choose two below</Text>
        </View>
        <View style={styles.optionsWrapper}>
          {optionData.map((option: string) => {
            let isChecked = handleCheckActiveOptions(option);
            return (
              <Option
                key={option}
                text={option}
                onPress={setOptions}
                isChecked={isChecked}
                isOptionChosen={isOptionChosen}
              />
            );
          })}
        </View>
      </View>
      {isOptionChosen && (
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
