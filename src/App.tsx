import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Root} from './navigators/Root';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {AppContainer} from './components/organisms/AppContainer';

const queryClient = new QueryClient();
export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <AppContainer>
          <Root />
        </AppContainer>
      </NavigationContainer>
    </QueryClientProvider>
  );
};
