import React, {useCallback, useState, useEffect} from 'react';
import {OnboardingNavigator} from './OnboardingNavigator';
import auth from '@react-native-firebase/auth';
import {UserNavigator} from './userNavigator';

export const Root = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const onAuthStateChanged = useCallback(
    (user: any) => {
      setUser(user);
      if (initializing) setInitializing(false);
    },
    [initializing],
  );

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, [onAuthStateChanged]);

  if (initializing) {
    return null;
  }

  if (user) {
    return <UserNavigator />;
  }

  return <OnboardingNavigator />;
};
