import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Text} from 'react-native';

export const UserNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={() => <Text>Hello User</Text>}
      />
    </Stack.Navigator>
  );
};
