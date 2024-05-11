import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../containers/inapp/Home';

export const UserNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={Home}
      />
    </Stack.Navigator>
  );
};
