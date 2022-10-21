import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Components/Home';
import SettingStack from './Components/SettingStack';
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from '@tanstack/react-query'


export default function App() {
  const queryClient = new QueryClient()
  const Tab = createBottomTabNavigator();

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        {
          <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}></Tab.Screen>
            <Tab.Screen name="Setting" component={SettingStack}></Tab.Screen>
          </Tab.Navigator>
        }
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
