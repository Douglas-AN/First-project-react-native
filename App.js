import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AppTabs from './Components/AppTab';


export default function App() {
  const queryClient = new QueryClient()
  const Tab = createBottomTabNavigator();

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <AppTabs />       
      </NavigationContainer>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
