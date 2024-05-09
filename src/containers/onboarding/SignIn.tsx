import React, {useState} from 'react';
import {SignIn as SignInScreen} from '../../screens/onboarding/SignIn';
import {Keyboard} from 'react-native';

import auth from '@react-native-firebase/auth';

export const SignIn = () => {
  const [email, setEmail] = useState({
    value: '',
    isValid: false,
    focused: false,
  });
  const [password, setPassword] = useState({
    value: '',
    isValid: false,
    focused: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResponse, setSubmitResponse] = useState<
    'success' | 'error' | undefined
  >();

  ///////////////////// refactor //////////////////
  const handleBlurOnEmail = () => {
    setEmail(s => ({...s, focused: false}));
  };
  const handleBlurOnPassword = () => {
    setPassword(s => ({...s, focused: false}));
  };
  const handleFocusOnEmail = () => {
    setEmail(s => ({...s, focused: true}));
  };
  const handleFocusOnPassword = () => {
    setPassword(s => ({...s, focused: true}));
  };
  ///////////////////// refactor //////////////////

  const handleSetEmail = (value: string) => {
    const isValidEmail =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
    setEmail(() => ({value, isValid: isValidEmail, focused: true}));
  };
  const handleSetPassword = (value: string) => {
    setPassword(() => ({value, isValid: value.length > 6, focused: true}));
  };

  const onSubmit = async () => {
    setSubmitResponse(undefined);
    Keyboard.dismiss();
    setIsSubmitting(true);
    auth()
      .signInWithEmailAndPassword(email.value, password.value)
      .then(() => {
        setIsSubmitting(false);
        console.log('User account created & signed in!');
        setSubmitResponse('success');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        setIsSubmitting(false);
        setSubmitResponse('error');
        console.error(error);
      });
  };
  return (
    <SignInScreen
      handleSetEmail={handleSetEmail}
      handleSetPassword={handleSetPassword}
      email={email}
      password={password}
      handleBlurOnEmail={handleBlurOnEmail}
      handleBlurOnPassword={handleBlurOnPassword}
      onSubmit={onSubmit}
      isSubmitting={isSubmitting}
      submitResponse={submitResponse}
      handleFocusOnEmail={handleFocusOnEmail}
      handleFocusOnPassword={handleFocusOnPassword}
    />
  );
};
