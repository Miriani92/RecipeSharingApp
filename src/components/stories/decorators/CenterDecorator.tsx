import React from 'react';
import {View} from 'react-native';

export const getCenterDecorator = () => {
  return (Story: any) => {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Story />
      </View>
    );
  };
};
