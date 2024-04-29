import React from 'react';
import {View, Platform, StatusBar} from 'react-native';
import {styles} from './AppContainer.styles';

export const AppContainer = ({children}: any) => {
  // hides the status bar
  return (
    <View style={styles.container}>
      {Platform.OS === 'ios' ? (
        <StatusBar translucent barStyle={'dark-content'} hidden={true} />
      ) : (
        <StatusBar barStyle={'dark-content'} hidden={true} />
      )}
      {children}
    </View>
  );
};
