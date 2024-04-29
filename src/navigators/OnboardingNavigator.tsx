import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../containers/onboarding/Home';
import {ChooseRecipe} from '../containers/onboarding/ChooseRecipe';
import {Vegetarian} from '../containers/onboarding/Vegetarian';
import {WhatsImportant} from '../containers/onboarding/WhatsImportant';
import {Personalize} from '../containers/onboarding/Personalize';
import {OnboardingProgress} from '../components/molecules/OnboardingProgress';

export const OnboardingNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        header: ({route, options}: any) => {
          return <OnboardingProgress activeIndex={route.params?.activeIndex} />;
        },
        headerMode: 'float',
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={Home}
      />

      <Stack.Screen
        name="Vegetarian"
        component={Vegetarian}
        initialParams={{activeIndex: 1}}
      />
      <Stack.Screen
        name="WhatsImportant"
        component={WhatsImportant}
        initialParams={{activeIndex: 2}}
      />
      <Stack.Screen
        name="ChooseRecipe"
        component={ChooseRecipe}
        initialParams={{activeIndex: 3}}
      />
      <Stack.Screen
        name="Personalize"
        component={Personalize}
        initialParams={{activeIndex: 4}}
      />
    </Stack.Navigator>
  );
};
