import React, {ReactNode} from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const SafeAreaContainer = ({children}: {children: ReactNode}) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{paddingTop: insets.top, paddingBottom: insets.bottom, flex: 1}}>
      {children}
    </View>
  );
};
