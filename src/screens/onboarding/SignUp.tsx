import React, {useEffect} from 'react';
import {styles} from './SignUp.styles';
import {View, Image, Text, TextInput} from 'react-native';
import {images} from '../../constants/images/images';
import {PrimaryButton} from '../../components/atoms/PrimaryButton';
import {colors} from '../../constants/styles/colors';
import {BackButton} from '../../components/molecules/BackButton';
import {useNavigation} from '@react-navigation/native';

export const SignUp = ({
  handleSetEmail,
  handleSetPassword,
  email,
  password,
  handleBlurOnEmail,
  handleBlurOnPassword,
  onSubmit,
  isSubmitting,
  submitResponse,
  handleFocusOnEmail,
  handleFocusOnPassword,
}: any) => {
  const navigation = useNavigation<any>();
  const isFormValid = email.isValid && password.isValid;
  return (
    <View style={styles.wrapper}>
      <View style={styles.upper}>
        <Image source={images.signup} style={styles.image} />
      </View>
      <View style={styles.form}>
        <Text style={styles.header}>Welcome to RecipeSharing App</Text>
        <View style={styles.inputWrapper}>
          <View style={styles.input}>
            <Text style={styles.text}>Email Address</Text>
            <View style={styles.textInputWrapper}>
              <TextInput
                placeholder="Email"
                autoCapitalize="none"
                onBlur={handleBlurOnEmail}
                onFocus={handleFocusOnEmail}
                style={styles.textInput}
                onChangeText={handleSetEmail}
                placeholderTextColor={colors.grey}
                selectionColor={colors.while_level_1}
                value={email.value}
              />
              {email.isValid && (
                <Image source={images.check} style={styles.icon} />
              )}
              {!email.isValid &&
                !email.focused &&
                password.value.length !== 0 && (
                  <Image source={images.close} style={styles.closeIcon} />
                )}
            </View>
          </View>
          <View style={styles.input}>
            <Text style={styles.text}>Password</Text>
            <View style={styles.textInputWrapper}>
              <TextInput
                placeholder="Password"
                secureTextEntry
                autoCapitalize="none"
                onBlur={handleBlurOnPassword}
                onFocus={handleFocusOnPassword}
                style={styles.textInput}
                onChangeText={handleSetPassword}
                placeholderTextColor={colors.grey}
                selectionColor={colors.while_level_1}
                value={password.value}
              />
              {password.isValid && (
                <Image source={images.check} style={styles.icon} />
              )}
              {!password.isValid &&
                !password.focused &&
                password.value.length !== 0 && (
                  <Image source={images.close} style={styles.closeIcon} />
                )}
            </View>
          </View>
          {submitResponse === 'error' &&
            !email.focused &&
            !password.focused && (
              <Text style={{color: 'purple', textAlign: 'right'}}>
                Something Went Wrong
              </Text>
            )}
        </View>
        <PrimaryButton
          backgroundColor={isFormValid ? colors.purple : colors.while_level_1}
          disable={!isFormValid}
          text="Login"
          textColor={isFormValid ? 'white' : 'grey'}
          onPress={onSubmit}
          style={{width: '100%'}}
          isLoading={isSubmitting}
        />
      </View>
    </View>
  );
};
