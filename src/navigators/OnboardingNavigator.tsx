import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../containers/onboarding/Home';
import {ChooseRecipe} from '../containers/onboarding/ChooseRecipe';
import {Vegetarian} from '../containers/onboarding/Vegetarian';
import {WhatsImportant} from '../containers/onboarding/WhatsImportant';

export const OnboardingNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={Home}
      /> */}
      {/* <Stack.Screen
        options={{headerShown: false}}
        name="ChooseRecipe"
        component={ChooseRecipe}
      /> */}
      {/* <Stack.Screen
        options={{headerShown: false}}
        name="Vegetarian"
        component={Vegetarian}
      /> */}
      <Stack.Screen
        options={{headerShown: false}}
        name="Vegetarian"
        component={WhatsImportant}
      />
    </Stack.Navigator>
  );
};
