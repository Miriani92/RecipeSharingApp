import React from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors} from '../../constants/styles/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// import {sizes} from '../../constants/styles/sizes';

const Tab = createBottomTabNavigator();
const setOptions = ({route}: any) => ({
  tabBarIcon: ({focused}: {focused: boolean}) => {
    const iconColor = focused ? colors.while_level_1 : colors.grey_light;
    if (route.name === 'Discover') {
      return <Icon name="account-search" size={24} color={iconColor} />;
    }
    if (route.name === 'Community') {
      return <Icon name="pot-steam" size={24} color={iconColor} />;
    }
    if (route.name === 'Meal Plans') {
      return <Icon name="calendar-account" size={24} color={iconColor} />;
    }
    if (route.name === 'My Cart') {
      return <Icon name="cart-outline" size={24} color={iconColor} />;
    }
    if (route.name === 'Profile') {
      // change with the image
      return <Icon name="cart-outline" size={24} color={iconColor} />;
    }
  },
  tabBarActiveTintColor: colors.while_level_1,
  tabBarInactiveTintColor: 'gray',
  headerShown: false,
  tabBarStyle: {
    backgroundColor: colors.dark_grey,
  },
});
export const Home = () => {
  return (
    <Tab.Navigator
      // screenOptions={{
      //   tabBarActiveTintColor: colors.while_level_1,
      //   tabBarStyle: {
      //     backgroundColor: colors.dark_grey,
      //   },
      // }}
      screenOptions={setOptions}>
      <Tab.Screen
        name="Discover"
        component={() => <Text>Hello Discover</Text>}
      />
      <Tab.Screen name="Community" component={() => <Text>Commnity</Text>} />
      <Tab.Screen name="Meal Plans" component={() => <Text>Meal Plans</Text>} />
      <Tab.Screen name="My Cart" component={() => <Text>My Cart</Text>} />
      <Tab.Screen name="Profile" component={() => <Text>Profile</Text>} />
    </Tab.Navigator>
  );
};
