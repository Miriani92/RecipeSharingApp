import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../containers/onboarding/Home';

export const OnboardingNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={Home}
      />
    </Stack.Navigator>
  );
};
